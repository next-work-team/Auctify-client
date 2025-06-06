import type { Metadata } from 'next';
import '@fontsource/pretendard';
import '@fontsource/roboto';
import '@/app/globals.css';

import Providers from '@/app/providers';
import Header from '@/shared/ui/header/Header';
import { LoadDaumPostcodeScript } from '@/app/providers/LoadDaumPostcodeScript';

export const metadata: Metadata = {
  title: 'Auctify - 실시간 경매 플랫폼',
  description: '실시간 경매 플랫폼',
  icons: {
    icon: '/images/favicon.ico',
    shortcut: '/images/favicon-32x32.png', // 북마크 아이콘
    apple: '/images/apple-touch-icon.png', // iOS 및 macOS Safari용 아이콘
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <body className="font-sans flex flex-col">
        <LoadDaumPostcodeScript />
        <Header />
        <div className="flex-1 overflow-auto">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
