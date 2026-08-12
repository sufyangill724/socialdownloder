import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Common Video Download Errors',
  description: 'Troubleshooting guide for the most common issues when downloading videos.',
};

export default function BlogPostPage() {
  return (
    <article className="py-16">
      <div className="container-custom max-w-3xl mx-auto prose prose-lg">
        <Link href="/blog" className="text-sm no-underline">← Back to Blog</Link>
        <h1>Common Video Download Errors</h1>
        <p>
          Running into an issue while trying to download a video? Here are the most common causes and
          how to resolve them.
        </p>
        <h2>"Invalid URL" Error</h2>
        <p>
          Make sure you've copied the full link, including "https://", and that it points directly to
          a video, reel, or post — not a profile or homepage.
        </p>
        <h2>"Platform Not Supported" Error</h2>
        <p>
          We currently support Instagram, TikTok, Facebook, and YouTube. Links from other platforms
          will return this error.
        </p>
        <h2>"Unable to Process This URL" Error</h2>
        <p>
          This usually means the content is private, has been deleted, or is otherwise restricted by
          the platform. Double-check that the content is publicly viewable in a browser without logging in.
        </p>
        <h2>Slow or Failed Downloads</h2>
        <p>
          Occasional delays can happen during high traffic periods or due to temporary issues with the
          source platform. If a download fails, wait a moment and try again.
        </p>
      </div>
    </article>
  );
}
