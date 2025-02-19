import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';
import Providers from './providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Auctify - 실시간 경매 플랫폼',
  description: '실시간 경매 플랫폼',
  icons: {
    icon: '/image/favicon.ico',
    shortcut: '/image/favicon-32x32.png', // 북마크 아이콘
    apple: '/image/apple-touch-icon.png', // iOS 및 macOS Safari용 아이콘
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
