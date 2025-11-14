import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NextJS -2025 (main)',
  description: 'Pixel-perfect website from Figma',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
