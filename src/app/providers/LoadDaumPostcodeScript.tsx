'use client';

import Script from 'next/script';

export function LoadDaumPostcodeScript() {
  return (
    <Script
      src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
      strategy="beforeInteractive"
    />
  );
}
