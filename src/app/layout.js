import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Kunal Kavathekar — Software Developer',
    template: '%s | Kunal Kavathekar',
  },
  description:
    'Software Developer with industry experience in scalable web applications and AI-driven solutions. Full Stack Developer specialising in Next.js, Node.js, and cloud technologies.',
  keywords: [
    'Kunal Kavathekar',
    'Software Developer',
    'Full Stack Developer',
    'Next.js',
    'React',
    'Node.js',
    'Portfolio',
  ],
  authors: [{ name: 'Kunal Kavathekar' }],
  creator: 'Kunal Kavathekar',
  icons: {
    icon: '/branding/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Kunal Kavathekar — Software Developer',
    description:
      'Software Developer with industry experience in scalable web applications and AI-driven solutions.',
    siteName: 'Kunal Kavathekar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kunal Kavathekar — Software Developer',
    description:
      'Software Developer with industry experience in scalable web applications and AI-driven solutions.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
