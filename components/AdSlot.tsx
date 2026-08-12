'use client';

import { useEffect, useRef } from 'react';

interface AdSlotProps {
  position: 'top' | 'middle' | 'bottom';
}

export default function AdSlot({ position }: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;

  useEffect(() => {
    if (publisherId && process.env.NODE_ENV === 'production') {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense initialization error:', err);
      }
    }
  }, []);

  if (!publisherId) {
    return null;
  }

  const adStyles = {
    top: 'mt-4 mb-8',
    middle: 'my-8',
    bottom: 'mt-8 mb-4',
  };

  return (
    <div className={`container-custom ${adStyles[position]}`}>
      <div className="bg-gray-100 rounded-lg p-4 min-h-[90px] flex items-center justify-center">
        <div ref={adRef} className="w-full text-center text-gray-500 text-sm">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client={`ca-${publisherId}`}
            data-ad-slot="YOUR_AD_SLOT_ID"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
          <div className="text-xs text-gray-400 mt-2">Advertisement</div>
        </div>
      </div>
    </div>
  );
}