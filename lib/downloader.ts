interface DownloadResult {
  success: boolean;
  title?: string;
  thumbnail?: string;
  downloadUrl?: string;
  error?: string;
}

export async function processDownload(url: string, platform: string): Promise<DownloadResult> {
  try {
    const apiUrl = process.env.DOWNLOADER_API_URL;
    const apiKey = process.env.DOWNLOADER_API_KEY;

    if (!apiUrl) {
      console.warn('DOWNLOADER_API_URL not configured. Using mock implementation.');
      return mockDownload(url, platform);
    }

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': apiKey ? `Bearer ${apiKey}` : '',
      },
      body: JSON.stringify({ url, platform }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API request failed with status ${response.status}`);
    }

    const data = await response.json();
    
    return {
      success: true,
      title: data.title || 'Video',
      thumbnail: data.thumbnail || '',
      downloadUrl: data.downloadUrl || '',
    };

  } catch (error: any) {
    console.error('Download processing error:', error);
    return {
      success: false,
      error: error.message || 'Unable to process this URL. Please try again.',
    };
  }
}

function mockDownload(url: string, platform: string): DownloadResult {
  return {
    success: true,
    title: `Sample Video from ${platform}`,
    thumbnail: 'https://via.placeholder.com/640x360/0ea5e9/ffffff?text=Video+Thumbnail',
    downloadUrl: 'https://example.com/sample-video.mp4',
  };
}