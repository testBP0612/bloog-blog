import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { WithContext, WebSite } from 'schema-dts';
import { GoogleAnalytics } from '@next/third-parties/google';

import ThemeProvider from '@components/ThemeProvider';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';

import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.testbp.xyz'),
  title: {
    default: "Bloop's Site",
    template: '%s | Bloop',
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_BASE_URL}/feed.xml`,
    },
  },
  openGraph: {
    siteName: "Bloop's Site",
    images: [
      {
        url: '/images/photo.svg',
        width: 600,
        height: 600,
      },
    ],
  },
  description: '歡迎來到 Bloop 個人部落格 - 一個致力於探索和分享 Web 開發見解和經驗的空間。',
  authors: [
    {
      name: 'Bloop',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
  ],
};

const websiteLd: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: "Bloop's Site",
  url: 'https://www.testbp.xyz',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="zh-TW">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
    </html>
  );
}
