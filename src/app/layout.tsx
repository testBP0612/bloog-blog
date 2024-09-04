import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { WithContext, WebSite } from 'schema-dts';

import ThemeProvider from '@components/ThemeProvider';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.testbp.xyz'),
  title: {
    default: 'Bloop site',
    template: '%s | Bloop',
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_BASE_URL}/feed.xml`,
    }
  },
  description: 'Welcome to Bloop personal blog - a space dedicated to the exploration and sharing of web development insights and experiences.',
};

const websiteLd: WithContext<WebSite> = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: "Bloop's Site",
	url: 'https://www.testbp.xyz',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
      </body>
    </html>
  );
}
