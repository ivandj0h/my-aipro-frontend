import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AIProject Management',
  description: 'AIProject Management Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`h-full scroll-smooth antialiasing`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
