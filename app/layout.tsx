import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = Inter({ 
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { SmoothScroll } from '@/components/smooth-scroll'

export const metadata: Metadata = {
  title: 'Open Thought Research — Building the Future of Thought',
  description: 'An independent research institute dedicated to foundational inquiries into thought, reasoning, systems, and the development of Objective Ontology.',
  keywords: ['Objective Ontology', 'foundational research', 'philosophy of objectives', 'computational reasoning', 'mathematics', 'cognitive science', 'artificial intelligence', 'systems research'],
  authors: [{ name: 'Open Thought Research' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://openthought.research',
    siteName: 'Open Thought Research',
    title: 'Open Thought Research — Building the Future of Thought',
    description: 'An independent research institute dedicated to foundational inquiries into thought, reasoning, systems, and Objective Ontology.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Open Thought Research',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open Thought Research — Building the Future of Thought',
    description: 'An independent AI research institute dedicated to advancing intelligence.',
    images: ['/og-image.png'],
  },
  manifest: '/manifest.json',
  metadataBase: new URL('https://openthought.research'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScroll />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
