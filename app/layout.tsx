import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ClientProviders from './client-providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Iraqi Property & Professional Services',
  description: 'Find top-rated Iraqi property and professional services with just one click',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>
          {children}
          <Toaster />
        </ClientProviders>
      </body>
    </html>
  )
}