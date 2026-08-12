import { Metadata } from 'next';
import Downloader from '@/components/Downloader';
import FAQ from '@/components/FAQ';
import PlatformCard from '@/components/PlatformCard';
import AdSlot from '@/components/AdSlot';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Social Media Video Downloader – Download Reels & Videos',
  description: 'Download publicly accessible social media videos and reels with a simple, fast and mobile-friendly online downloader.',
};

const platforms = [
  { name: 'Instagram', icon: '📸', slug: 'instagram', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
  { name: 'TikTok', icon: '🎵', slug: 'tiktok', color: 'bg-gradient-to-r from-black to-gray-800' },
  { name: 'Facebook', icon: '👍', slug: 'facebook', color: 'bg-gradient-to-r from-blue-600 to-blue-800' },
  { name: 'YouTube', icon: '▶️', slug: 'youtube', color: 'bg-gradient-to-r from-red-500 to-red-700' },
];

const faqs = [
  {
    question: 'What is this downloader?',
    answer: 'This is a free online tool that helps you download publicly accessible videos and reels from supported social media platforms. Simply paste a URL and get your video file.'
  },
  {
    question: 'Which platforms are supported?',
    answer: 'We currently support Instagram, TikTok, Facebook, and YouTube. We are working to add more platforms in the future.'
  },
  {
    question: 'How do I download a reel?',
    answer: 'Copy the URL of the public reel you want to download, paste it into the input field above, and click the download button. Our system will process the request and provide a download link.'
  },
  {
    question: 'Is registration required?',
    answer: 'No registration is required. You can use the tool without creating an account.'
  },
  {
    question: 'Can I download copyrighted content?',
    answer: 'No. You should only download content that you have the rights to or that is publicly available and not protected by copyright. Please respect intellectual property rights.'
  }
];

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white py-12 md:py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="mb-4">Social Media Video Downloader</h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Download publicly accessible videos and reels from supported platforms using a simple online tool.
            </p>
            
            <Downloader />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span> No registration
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span> Fast & simple
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span> Mobile friendly
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <span className="text-green-500">✓</span> Privacy conscious
              </div>
            </div>
          </div>
        </div>
      </section>

      <AdSlot position="top" />

      <section className="py-16">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-center mb-6">What This Tool Does</h2>
          <div className="prose prose-lg mx-auto">
            <p>
              This video downloader is designed to help you download publicly accessible content from social media platforms. 
              It's a simple, efficient tool that saves videos directly to your device without requiring software installation.
            </p>
            <p>
              The service processes URLs from supported platforms and provides download links for available content. 
              It's particularly useful for saving your own content or downloading publicly shared videos.
            </p>
            <h3>How It Works</h3>
            <ol>
              <li>Copy a supported public URL from Instagram, TikTok, Facebook, or YouTube</li>
              <li>Paste the URL into the downloader above</li>
              <li>Click the download button to process the request</li>
              <li>Save the resulting video file to your device</li>
            </ol>
            <h3>Important Limitations</h3>
            <ul>
              <li>Only public content can be processed - private, restricted, or deleted content cannot be accessed</li>
              <li>Results depend on the availability of the content on the source platform</li>
              <li>Some videos may not be downloadable due to platform restrictions</li>
              <li>API availability may affect service performance</li>
            </ul>
            <h3>User Responsibility</h3>
            <p>
              <strong>You are responsible for ensuring you have the right to download any content.</strong> 
              Only download videos you have created, have permission to download, or that are publicly available 
              and not protected by intellectual property rights. Always respect copyright laws and platform terms of service.
            </p>
            <h3>Privacy Commitment</h3>
            <p>
              We process URLs temporarily and do not store video content. The service uses third-party APIs to 
              process download requests. For full details, please review our <Link href="/privacy-policy">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>

      <AdSlot position="middle" />

      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="text-center mb-4">Supported Platforms</h2>
          <p className="text-center text-gray-600 mb-12">
            Download from your favorite social media platforms
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <PlatformCard key={platform.slug} {...platform} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-center mb-4">Why Use This Tool</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A practical solution for downloading public social media content
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Simple & Quick</h3>
              <p className="text-gray-600">Paste a URL, click a button, and download your video in seconds. No complicated steps.</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Mobile-Friendly</h3>
              <p className="text-gray-600">Works perfectly on all devices. Download videos directly to your phone or tablet.</p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Privacy-First</h3>
              <p className="text-gray-600">No registration required. We don't store your videos or personal information.</p>
            </div>
          </div>
        </div>
      </section>

      <AdSlot position="bottom" />

      <section className="bg-gray-50 py-16">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <FAQ items={faqs} />
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-center mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="card text-left">
              <h3 className="text-lg font-semibold mb-2">How to Download a Public Reel</h3>
              <p className="text-gray-600 text-sm mb-3">A step-by-step guide to downloading reels from any supported platform.</p>
              <Link href="/blog/how-to-download-public-reel" className="text-primary-600 hover:underline text-sm">
                Read more →
              </Link>
            </div>
            <div className="card text-left">
              <h3 className="text-lg font-semibold mb-2">Common Download Errors</h3>
              <p className="text-gray-600 text-sm mb-3">Troubleshooting guide for the most common issues when downloading videos.</p>
              <Link href="/blog/common-video-download-errors" className="text-primary-600 hover:underline text-sm">
                Read more →
              </Link>
            </div>
            <div className="card text-left">
              <h3 className="text-lg font-semibold mb-2">Safe Video Downloading</h3>
              <p className="text-gray-600 text-sm mb-3">Best practices for safely downloading online videos.</p>
              <Link href="/blog/safe-video-downloading" className="text-primary-600 hover:underline text-sm">
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}