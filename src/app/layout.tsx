import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import AppShell from '@/components/AppShell';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Muzi Khuzwayo — Builder, Systems & AI',
  description:
    'Personal site of Muzi Khuzwayo in Cape Town. AI systems, market tools, active ventures, YouTube videos, and essays.',
  keywords: [
    'Muzi Khuzwayo',
    'Dubstrata',
    'TechFusion Alchemy',
    'Quantix',
    'AI Automation',
    'Cape Town',
  ],
  authors: [{ name: 'Muzi Khuzwayo', url: 'https://x.com/3mk4y_' }],
  openGraph: {
    title: 'Muzi Khuzwayo — Builder, Systems & AI',
    description:
      'What I am building, coding, filming, and writing out of Cape Town.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muzi Khuzwayo — Builder, Systems & AI',
    description:
      'What I am building, coding, filming, and writing out of Cape Town.',
    creator: '@3mk4y_',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const s = localStorage.getItem("color-scheme"); if (s === "light" || s === "dark") document.documentElement.setAttribute("data-color-scheme", s); if (localStorage.getItem("sidebar-collapsed") === "true") document.documentElement.setAttribute("data-sidebar", "collapsed"); } catch {} })();`,
          }}
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
