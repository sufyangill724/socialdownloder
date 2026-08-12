import { Metadata } from 'next';
import PlatformCard from '@/components/PlatformCard';

export const metadata: Metadata = {
  title: 'Supported Platforms',
  description: 'See which social media platforms our video downloader supports.',
};

const platforms = [
  { name: 'Instagram', icon: '📸', slug: 'instagram', color: 'bg-gradient-to-r from-purple-500 to-pink-500', desc: 'Download public reels, posts, and video content.' },
  { name: 'TikTok', icon: '🎵', slug: 'tiktok', color: 'bg-gradient-to-r from-black to-gray-800', desc: 'Download public TikTok videos without a watermark app.' },
  { name: 'Facebook', icon: '👍', slug: 'facebook', color: 'bg-gradient-to-r from-blue-600 to-blue-800', desc: 'Download public Facebook videos, watch content, and reels.' },
  { name: 'YouTube', icon: '▶️', slug: 'youtube', color: 'bg-gradient-to-r from-red-500 to-red-700', desc: 'Download public YouTube videos and shorts.' },
];

export default function SupportedPlatformsPage() {
  return (
    <section className="py-16">
      <div className="container-custom">
        <h1 className="text-center mb-4">Supported Platforms</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We currently support downloading publicly accessible videos from the platforms below.
          More platforms may be added over time.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <div key={platform.slug}>
              <PlatformCard name={platform.name} icon={platform.icon} slug={platform.slug} color={platform.color} />
              <p className="text-sm text-gray-500 text-center mt-2">{platform.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
