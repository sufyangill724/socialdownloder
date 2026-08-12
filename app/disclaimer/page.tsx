import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Important disclaimer regarding the use of our social media video downloader.',
};

export default function DisclaimerPage() {
  return (
    <section className="py-16">
      <div className="container-custom max-w-3xl mx-auto prose prose-lg">
        <h1>Disclaimer</h1>

        <h2>No Affiliation</h2>
        <p>
          This website is an independent tool and is not affiliated with, endorsed by, or connected to
          Instagram, TikTok, Facebook, YouTube, Meta, ByteDance, Google, or any other platform mentioned
          on this site. All trademarks and brand names belong to their respective owners.
        </p>

        <h2>Content Responsibility</h2>
        <p>
          We do not host, store, or claim ownership of any video content processed through this Service.
          All content remains the property of its original creators and the respective platforms. It is
          your responsibility to ensure you have the legal right to download and use any content before doing so.
        </p>

        <h2>No Guarantee of Availability</h2>
        <p>
          Because this Service relies on the availability of third-party platforms and APIs, we cannot
          guarantee that every submitted link will be processed successfully or that the Service will be
          available at all times.
        </p>

        <h2>Use at Your Own Risk</h2>
        <p>
          Downloading content that you do not own or have permission to use may violate copyright law or
          a platform's terms of service. You assume all responsibility and risk for your use of this Service.
        </p>
      </div>
    </section>
  );
}
