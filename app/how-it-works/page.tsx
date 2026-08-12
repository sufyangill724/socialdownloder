import { Metadata } from 'next';
import Downloader from '@/components/Downloader';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Learn how our social media video downloader works, step by step.',
};

const steps = [
  {
    title: 'Copy the video link',
    description: 'Find the public video, reel, or post you want to download and copy its URL from the share menu.',
  },
  {
    title: 'Paste it into the downloader',
    description: 'Paste the link into the input field on our homepage or the relevant platform page.',
  },
  {
    title: 'Click download',
    description: 'We process the URL and prepare a downloadable version of the video for you.',
  },
  {
    title: 'Save the file',
    description: 'Click "Download Video" to save the file directly to your device.',
  },
];

export default function HowItWorksPage() {
  return (
    <section className="py-16">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-center mb-4">How It Works</h1>
        <p className="text-center text-gray-600 mb-12">
          Downloading a public video takes just a few seconds. Here's the process.
        </p>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-4 items-start card">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Downloader />
        </div>
      </div>
    </section>
  );
}
