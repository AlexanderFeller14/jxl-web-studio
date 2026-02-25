import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Sora } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { siteConfig } from '@/lib/site';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-heading'
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`
  },
  description: siteConfig.description
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${sora.variable} ${jakarta.variable} bg-canvas text-ink antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
