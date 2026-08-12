import { NextRequest, NextResponse } from 'next/server';
import { validateUrl, getPlatformFromUrl } from '@/lib/validation';
import { processDownload } from '@/lib/downloader';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url } = body;

    if (!url || typeof url !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid URL.' },
        { status: 400 }
      );
    }

    const validation = validateUrl(url);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, error: validation.error || 'Invalid URL.' },
        { status: 400 }
      );
    }

    const platform = getPlatformFromUrl(url);
    if (!platform) {
      return NextResponse.json(
        { success: false, error: 'This platform is not currently supported.' },
        { status: 400 }
      );
    }

    const result = await processDownload(url, platform);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || 'Unable to process this URL.' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      title: result.title || 'Video',
      thumbnail: result.thumbnail || '',
      downloadUrl: result.downloadUrl || '',
    });

  } catch (error) {
    console.error('Download API error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}