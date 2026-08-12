import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://YOURDOMAIN.com'),
  title: {
    default: 'Social Media Video Downloader – Download Reels & Videos',
    template: '%s | Social Media Video Downloader',
  },
  description: 'Download publicly accessible social media videos and reels with a simple, fast and mobile-friendly online downloader.',
  keywords: 'video downloader, social media downloader, reels downloader',
  authors: [{ name: 'Social Video Downloader' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: 'Social Media Video Downloader – Download Reels & Videos',
    description: 'Download publicly accessible social media videos and reels with a simple, fast and mobile-friendly online downloader.',
    siteName: 'Social Video Downloader',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Video Downloader – Download Reels & Videos',
    description: 'Download publicly accessible social media videos and reels with a simple, fast and mobile-friendly online downloader.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0284c7" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}