import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair'
});

export const metadata: Metadata = {
  title: 'Shamwa Engineering & Investments Ltd | Best Quality for Best Results',
  description: 'Shamwa Engineering and Investments Ltd - Your trusted partner for engineering, construction, and plumbing services. Located along Temple Road, near URA offices.',
  keywords: ['engineering', 'construction', 'plumbing', 'building materials', 'Uganda', 'Shamwa Engineering', 'Road Works', 'Architectural Design'],
  authors: [{ name: 'Shamwa Engineering' }],
  creator: 'Shamwa Engineering',
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    url: 'https://shamwaengineering.com',
    title: 'Shamwa Engineering & Investments Ltd',
    description: 'Your trusted partner for comprehensive engineering, construction, and plumbing services.',
    siteName: 'Shamwa Engineering & Investments Ltd',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shamwa Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shamwa Engineering & Investments Ltd',
    description: 'Best Quality for Best Results in engineering and construction.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
