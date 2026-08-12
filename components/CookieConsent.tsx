'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-50">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          This website uses cookies to improve your experience. By continuing to use this site, 
          you agree to our use of cookies. For more information, see our{' '}
          <Link href="/privacy-policy" className="text-primary-600 hover:underline">
            Privacy Policy
          </Link>.
        </div>
        <button
          onClick={acceptCookies}
          className="btn-primary text-sm py-2 px-6 whitespace-nowrap"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
}