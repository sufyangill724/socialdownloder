import { Metadata } from 'next';
import FAQ from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common questions about downloading social media videos and reels.',
};

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
    answer: 'Copy the URL of the public reel you want to download, paste it into the input field, and click the download button. Our system will process the request and provide a download link.'
  },
  {
    question: 'Is registration required?',
    answer: 'No registration is required. You can use the tool without creating an account.'
  },
  {
    question: 'Can I download copyrighted content?',
    answer: 'No. You should only download content that you have the rights to or that is publicly available and not protected by copyright. Please respect intellectual property rights.'
  },
  {
    question: 'Why did my download fail?',
    answer: 'Downloads can fail if the content is private, has been deleted, is age-restricted, or if the source platform is temporarily unavailable. Double-check that the link is public and try again.'
  },
  {
    question: 'Do you store the videos I download?',
    answer: 'No. Videos are processed on demand and are not stored on our servers after your session.'
  },
  {
    question: 'Is this service free?',
    answer: 'Yes, the core downloading functionality is free to use.'
  },
];

export default function FAQPage() {
  return (
    <section className="py-16">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-center mb-12">Frequently Asked Questions</h1>
        <FAQ items={faqs} />
      </div>
    </section>
  );
}
