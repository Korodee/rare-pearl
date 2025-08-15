import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RoyaltyPerleRare - Waist Beads & Cultural Heritage',
  description: 'Affirmez votre valeur en portant les perles qui relient au passé. Célébrez la culture africaine avec nos bijoux traditionnels.',
  keywords: 'waist beads, perles de hanches, culture africaine, bijoux traditionnels, RoyaltyPerleRare',
  authors: [{ name: 'RoyaltyPerleRare' }],
  openGraph: {
    title: 'RoyaltyPerleRare - Waist Beads & Cultural Heritage',
    description: 'Affirmez votre valeur en portant les perles qui relient au passé. Célébrez la culture africaine avec nos bijoux traditionnels.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
