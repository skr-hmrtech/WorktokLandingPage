
"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/queryClient"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import { LanguageProvider } from "@/hooks/useLanguage"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

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
        <QueryClientProvider client={queryClient}>
          <LanguageProvider>
            <TooltipProvider>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
                <ScrollToTop />
              </div>
              <Toaster />
            </TooltipProvider>
          </LanguageProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
