import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Download a Public Reel',
  description: 'A step-by-step guide to downloading reels from any supported platform.',
};

export default function BlogPostPage() {
  return (
    <article className="py-16">
      <div className="container-custom max-w-3xl mx-auto prose prose-lg">
        <Link href="/blog" className="text-sm no-underline">← Back to Blog</Link>
        <h1>How to Download a Public Reel</h1>
        <p>
          Reels have become one of the most popular ways to share short-form video content. If you've
          come across a public reel you'd like to save, here's a simple guide to downloading it.
        </p>
        <h2>Step 1: Find the Reel</h2>
        <p>
          Open the platform's app or website and navigate to the public reel you want to download.
          Make sure the account and content are public — private content cannot be processed.
        </p>
        <h2>Step 2: Copy the Link</h2>
        <p>
          Tap the share or three-dot menu next to the reel and choose "Copy Link". This copies the
          reel's URL to your clipboard.
        </p>
        <h2>Step 3: Paste and Download</h2>
        <p>
          Head to our <Link href="/">downloader homepage</Link>, paste the link into the input field,
          and click "Download". Once processing is complete, click "Download Video" to save the file.
        </p>
        <h2>A Note on Copyright</h2>
        <p>
          Only download reels you own, have permission to use, or that are otherwise free to download.
          Always credit original creators when resharing content.
        </p>
      </div>
    </article>
  );
}
