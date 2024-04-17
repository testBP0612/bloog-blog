import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ThemeProvider from '@components/ThemeProvider';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.testbp.xyz"),
  title: {
    default: 'Bloop site',
    template: '%s | Bloop',
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': 'https://www.testbp.xyz/feed.xml',
    }
  },
  description: 'Welcome to Bloop personal blog - a space dedicated to the exploration and sharing of web development insights and experiences.',
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
      </body>
    </html>
  );
}
