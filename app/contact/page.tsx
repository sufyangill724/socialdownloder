import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with our team.',
};

export default function ContactPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@YOURDOMAIN.com';

  return (
    <section className="py-16">
      <div className="container-custom max-w-2xl mx-auto text-center">
        <h1 className="mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-8">
          Have a question, found a bug, or need to report an issue with the Service? Reach out and
          we'll get back to you as soon as possible.
        </p>
        <div className="card inline-block">
          <p className="text-lg font-semibold">Email</p>
          <a href={`mailto:${email}`} className="text-primary-600 text-lg hover:underline">
            {email}
          </a>
        </div>
      </div>
    </section>
  );
}
