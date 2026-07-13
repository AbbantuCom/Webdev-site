import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
// Ignore missing type declarations for CSS modules/global CSS imports
// @ts-ignore: CSS module declarations (*.css) may be missing in the project
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Webdev — Websites, Tailored to Your Brand',
  description:
    'Interactive websites, powerful platforms, and digital experiences , creativity, and innovation.. World-class quality.',
  openGraph: {
    title: 'Webdev — Websites, Tailored to Your Brand',
    description:
      'Crafting digital experiences rooted in African creativity.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
