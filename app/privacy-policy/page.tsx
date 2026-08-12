import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read our privacy policy to understand how we handle your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16">
      <div className="container-custom max-w-3xl mx-auto prose prose-lg">
        <h1>Privacy Policy</h1>
        <p><em>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</em></p>

        <h2>Overview</h2>
        <p>
          This Privacy Policy explains how we collect, use, and protect information when you use our
          social media video downloader ("the Service"). We are committed to protecting your privacy.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li><strong>URLs you submit:</strong> processed temporarily to retrieve video download links and not stored after processing.</li>
          <li><strong>Usage data:</strong> basic analytics such as pages visited and general device/browser information, used to improve the Service.</li>
          <li><strong>Cookies:</strong> used for essential site functionality and, where enabled, advertising.</li>
        </ul>

        <h2>How We Use Information</h2>
        <p>
          We use collected information solely to operate, maintain, and improve the Service, including
          diagnosing technical issues and preventing abuse.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          We may rely on third-party APIs to process download requests and third-party advertising
          providers (such as Google AdSense) to display ads. These providers may collect information
          in accordance with their own privacy policies.
        </p>

        <h2>Data Retention</h2>
        <p>
          We do not store downloaded video files or the URLs you submit beyond the time needed to
          process your request.
        </p>

        <h2>Your Choices</h2>
        <p>
          You may disable cookies in your browser settings. Doing so may affect certain features of the Service.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          The Service is not directed at children under 13, and we do not knowingly collect personal
          information from children.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Continued use of the Service after changes
          are posted constitutes acceptance of the updated policy.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please visit our <a href="/contact">Contact page</a>.
        </p>
      </div>
    </section>
  );
}
