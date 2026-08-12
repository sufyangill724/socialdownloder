import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">SocialDownloader</h3>
            <p className="text-sm">
              A simple online tool for processing publicly accessible social media video URLs.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Platforms</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/instagram-downloader" className="hover:text-white transition-colors">Instagram</Link></li>
              <li><Link href="/tiktok-downloader" className="hover:text-white transition-colors">TikTok</Link></li>
              <li><Link href="/facebook-downloader" className="hover:text-white transition-colors">Facebook</Link></li>
              <li><Link href="/youtube-downloader" className="hover:text-white transition-colors">YouTube</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/supported-platforms" className="hover:text-white transition-colors">Supported Platforms</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>© {currentYear} SocialDownloader. All rights reserved.</p>
          <p className="mt-1 text-xs text-gray-500">
            Independent service. Not affiliated with Instagram, TikTok, Facebook, YouTube, or any other platform.
          </p>
        </div>
      </div>
    </footer>
  );
}