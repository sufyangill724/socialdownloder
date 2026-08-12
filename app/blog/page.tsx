import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Guides and tips for downloading and managing social media video content.',
};

const posts = [
  {
    slug: 'how-to-download-public-reel',
    title: 'How to Download a Public Reel',
    excerpt: 'A step-by-step guide to downloading reels from any supported platform.',
  },
  {
    slug: 'common-video-download-errors',
    title: 'Common Download Errors',
    excerpt: 'Troubleshooting guide for the most common issues when downloading videos.',
  },
  {
    slug: 'safe-video-downloading',
    title: 'Safe Video Downloading',
    excerpt: 'Best practices for safely downloading online videos.',
  },
];

export default function BlogPage() {
  return (
    <section className="py-16">
      <div className="container-custom max-w-4xl mx-auto">
        <h1 className="text-center mb-12">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card block hover:scale-[1.02] transition-transform">
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
