import { getBaseURL } from "@/lib/util/env"
import { Toaster } from "@medusajs/ui"
import { Analytics } from "@vercel/analytics/next"
import { GeistSans } from "geist/font/sans"
import localFont from "next/font/local"
import { Metadata } from "next"
import "@/styles/globals.css"

const proximaNova = localFont({
  src: [
    {
      path: "../../public/fonts/ProximaNova-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Proxima Nova Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Proxima Nova Thin.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-proxima-nova",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${proximaNova.variable} ${GeistSans.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
