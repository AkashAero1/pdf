import { type Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'PDF Merger - Merge PDFs with Ease',
  description: 'Fast, secure, and free PDF merging tool. No watermarks, no registration required.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className="scroll-smooth">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-900`}>
          <Navigation />
          <main className="relative pt-24 md:pt-16">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}