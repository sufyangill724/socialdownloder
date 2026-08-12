import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using our social media video downloader.',
};

export default function TermsPage() {
  return (
    <section className="py-16">
      <div className="container-custom max-w-3xl mx-auto prose prose-lg">
        <h1>Terms of Service</h1>
        <p><em>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</em></p>

        <h2>Acceptance of Terms</h2>
        <p>
          By accessing or using this website (the "Service"), you agree to be bound by these Terms of
          Service. If you do not agree, please do not use the Service.
        </p>

        <h2>Description of Service</h2>
        <p>
          The Service allows users to submit links to publicly accessible social media content in order
          to obtain a downloadable copy of that content. The Service does not host, store, or control
          the underlying content.
        </p>

        <h2>Acceptable Use</h2>
        <p>You agree that you will only use the Service to:</p>
        <ul>
          <li>Download content that you own or have explicit permission to download.</li>
          <li>Download publicly available content that is not protected by copyright restrictions preventing such downloads.</li>
        </ul>
        <p>You agree not to use the Service to infringe on any third party's intellectual property or privacy rights.</p>

        <h2>No Affiliation</h2>
        <p>
          This Service is independently operated and is not affiliated with, endorsed by, or sponsored by
          Instagram, TikTok, Facebook, YouTube, or any other platform referenced on this site.
        </p>

        <h2>Disclaimer of Warranties</h2>
        <p>
          The Service is provided "as is" without warranties of any kind. We do not guarantee that the
          Service will be uninterrupted, error-free, or that any particular content will be available for download.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, or
          consequential damages arising from your use of the Service.
        </p>

        <h2>Changes to the Service</h2>
        <p>
          We reserve the right to modify or discontinue the Service, or these Terms, at any time without prior notice.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these Terms can be directed to us via our <a href="/contact">Contact page</a>.
        </p>
      </div>
    </section>
  );
}
