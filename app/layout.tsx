import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pepvori — Physician-Guided Peptide Therapy',
  description: 'Personalized peptide therapy protocols guided by licensed physicians. Complete your intake online and receive your protocol within 24 hours.',
  metadataBase: new URL('https://pepvori.com'),
  openGraph: {
    title: 'Pepvori — Physician-Guided Peptide Therapy',
    description: 'Personalized peptide therapy protocols guided by licensed physicians.',
    url: 'https://pepvori.com',
    siteName: 'Pepvori',
    locale: 'en_US',
    type: 'website',
  },
}

const hasClerkKeys = !!(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  process.env.CLERK_SECRET_KEY
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const inner = (
    <html lang="en">
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )

  if (!hasClerkKeys) return inner

  return (
    <ClerkProvider
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
    >
      {inner}
    </ClerkProvider>
  )
}
