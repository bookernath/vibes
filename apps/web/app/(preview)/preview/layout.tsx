import '@/style/globals.css'

export const metadata = {
  title: 'Vibes preview',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-background font-body text-foreground">
      <body>{children}</body>
    </html>
  )
}
