import { Metadata } from 'next';
import Downloader from '@/components/Downloader';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Instagram Video & Reel Downloader',
  description: 'Download publicly accessible Instagram reels and videos quickly and easily. Paste a link and get your video in seconds.',
};

export default function InstagramDownloaderPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-purple-50 to-white py-12 md:py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-5xl mb-4">📸</div>
            <h1 className="mb-4">Instagram Video &amp; Reel Downloader</h1>
            <p className="text-xl text-gray-600 mb-8">
              Paste a public Instagram post, reel, or video link below to download it to your device.
            </p>
            <Downloader />
          </div>
        </div>
      </section>

      <AdSlot position="top" />

      <section className="py-16">
        <div className="container-custom max-w-3xl mx-auto prose prose-lg">
          <h2>How to Download an Instagram Reel</h2>
          <ol>
            <li>Open Instagram and find the public post, reel, or video you want to save.</li>
            <li>Tap the three-dot menu and select "Copy Link".</li>
            <li>Paste the link into the box above and click "Download".</li>
            <li>Once processed, tap "Download Video" to save the file to your device.</li>
          </ol>
          <h2>Notes on Instagram Downloads</h2>
          <ul>
            <li>Only public posts, reels, and videos can be processed — private accounts are not supported.</li>
            <li>Stories are only available while they remain active on the platform.</li>
            <li>Always respect the original creator's rights before downloading or sharing content.</li>
          </ul>
        </div>
      </section>

      <AdSlot position="bottom" />
    </>
  );
}
