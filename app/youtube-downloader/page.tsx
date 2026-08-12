import { Metadata } from 'next';
import Downloader from '@/components/Downloader';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'YouTube Video Downloader',
  description: 'Download publicly accessible YouTube videos and shorts quickly and easily. Paste a link and get your video in seconds.',
};

export default function YouTubeDownloaderPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-red-50 to-white py-12 md:py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-5xl mb-4">▶️</div>
            <h1 className="mb-4">YouTube Video Downloader</h1>
            <p className="text-xl text-gray-600 mb-8">
              Paste a public YouTube video or shorts link below to download it to your device.
            </p>
            <Downloader />
          </div>
        </div>
      </section>

      <AdSlot position="top" />

      <section className="py-16">
        <div className="container-custom max-w-3xl mx-auto prose prose-lg">
          <h2>How to Download a YouTube Video</h2>
          <ol>
            <li>Open YouTube and find the public video you want to save.</li>
            <li>Copy the URL from the address bar or use the "Share" button.</li>
            <li>Paste the link into the box above and click "Download".</li>
            <li>Once processed, click "Download Video" to save the file to your device.</li>
          </ol>
          <h2>Notes on YouTube Downloads</h2>
          <ul>
            <li>Only public videos can be processed — age-restricted, private, or unlisted videos may not work.</li>
            <li>Downloading copyrighted material without permission may violate YouTube's Terms of Service.</li>
            <li>Always respect the original creator's rights before downloading or sharing content.</li>
          </ul>
        </div>
      </section>

      <AdSlot position="bottom" />
    </>
  );
}
