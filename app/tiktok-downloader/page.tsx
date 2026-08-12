import { Metadata } from 'next';
import Downloader from '@/components/Downloader';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'TikTok Video Downloader',
  description: 'Download publicly accessible TikTok videos quickly and easily. Paste a link and get your video in seconds.',
};

export default function TikTokDownloaderPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-100 to-white py-12 md:py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-5xl mb-4">🎵</div>
            <h1 className="mb-4">TikTok Video Downloader</h1>
            <p className="text-xl text-gray-600 mb-8">
              Paste a public TikTok video link below to download it to your device.
            </p>
            <Downloader />
          </div>
        </div>
      </section>

      <AdSlot position="top" />

      <section className="py-16">
        <div className="container-custom max-w-3xl mx-auto prose prose-lg">
          <h2>How to Download a TikTok Video</h2>
          <ol>
            <li>Open TikTok and find the public video you want to save.</li>
            <li>Tap "Share" and select "Copy Link".</li>
            <li>Paste the link into the box above and click "Download".</li>
            <li>Once processed, tap "Download Video" to save the file to your device.</li>
          </ol>
          <h2>Notes on TikTok Downloads</h2>
          <ul>
            <li>Only public videos can be processed — private accounts are not supported.</li>
            <li>Download speed and availability may vary depending on video length and server load.</li>
            <li>Always respect the original creator's rights before downloading or sharing content.</li>
          </ul>
        </div>
      </section>

      <AdSlot position="bottom" />
    </>
  );
}
