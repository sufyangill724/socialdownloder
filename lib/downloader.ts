interface DownloadResult {
  success: boolean;
  title?: string;
  thumbnail?: string;
  downloadUrl?: string;
  error?: string;
}

// RapidAPI "Social Download All In One" - autolink endpoint.
// Docs: https://rapidapi.com/nguyenmanhict-MuTUtGWD7K/api/social-download-all-in-one
const RAPIDAPI_HOST = 'social-download-all-in-one.p.rapidapi.com';
const DEFAULT_API_URL = `https://${RAPIDAPI_HOST}/v1/social/autolink`;

export async function processDownload(url: string, platform: string): Promise<DownloadResult> {
  const apiUrl = process.env.DOWNLOADER_API_URL || DEFAULT_API_URL;
  const apiKey = process.env.RAPIDAPI_KEY;

  if (!apiKey) {
    console.warn('RAPIDAPI_KEY not configured. Using mock implementation.');
    return mockDownload(url, platform);
  }

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': RAPIDAPI_HOST,
        'x-rapidapi-key': apiKey,
      },
      body: JSON.stringify({ url }),
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => '');
      console.error('RapidAPI request failed:', response.status, errText);
      throw new Error(
        response.status === 429
          ? 'Too many requests right now. Please try again shortly.'
          : 'This video could not be processed. It may be private, deleted, or unsupported.'
      );
    }

    const data = await response.json();

    if (process.env.NODE_ENV !== 'production') {
      console.log('RapidAPI raw response:', JSON.stringify(data, null, 2));
    }

    return parseApiResponse(data);
  } catch (error: any) {
    console.error('Download processing error:', error);
    return {
      success: false,
      error: error.message || 'Unable to process this URL. Please try again.',
    };
  }
}

function parseApiResponse(data: any): DownloadResult {
  const title = data.title || data.desc || data.description || 'Video';
  const thumbnail = data.thumbnail || data.cover || data.image || data.thumb || '';

  const mediaList: any[] =
    data.medias || data.data || data.links || data.formats || data.media || [];

  let downloadUrl = '';

  if (Array.isArray(mediaList) && mediaList.length > 0) {
    const videoItem =
      mediaList.find(
        (m: any) =>
          m?.type === 'video' ||
          m?.extension === 'mp4' ||
          m?.ext === 'mp4' ||
          m?.quality?.toLowerCase?.().includes('video')
      ) || mediaList[0];

    downloadUrl =
      videoItem?.url || videoItem?.link || videoItem?.download_url || videoItem?.downloadUrl || '';
  }

  if (!downloadUrl) {
    downloadUrl =
      data.url || data.downloadUrl || data.download_url || data.video_url || data.videoUrl || '';
  }

  if (!downloadUrl) {
    return {
      success: false,
      error: 'No downloadable video was found for this link.',
    };
  }

  return {
    success: true,
    title,
    thumbnail,
    downloadUrl,
  };
}

function mockDownload(url: string, platform: string): DownloadResult {
  return {
    success: true,
    title: `Sample Video from ${platform}`,
    thumbnail: 'https://via.placeholder.com/640x360/0ea5e9/ffffff?text=Video+Thumbnail',
    downloadUrl: 'https://example.com/sample-video.mp4',
  };
}