import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="py-24">
      <div className="container-custom text-center max-w-xl mx-auto">
        <h1 className="mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <Link href="/" className="btn-primary inline-block">
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}
