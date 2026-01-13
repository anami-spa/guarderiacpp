import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Nunito } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Aguu Guardería y After School | Concepción, Chile",
  description:
    "Guardería y After School en el centro de Concepción. Cuidado seguro, atención personalizada y registro diario completo para familias que trabajan. Horario flexible 8:00-19:00 hrs.",
  keywords: [
    "guardería Concepción",
    "after school Concepción",
    "cuidado infantil",
    "jardín infantil",
    "guardería centro Concepción",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Aguu Guardería y After School | Concepción",
    description:
      "Cuidado seguro y atención personalizada para tu hijo en el centro de Concepción. Horario flexible de 8:00 a 19:00 hrs.",
    type: "website",
    locale: "es_CL",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#4FB7AD",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable} ${nunito.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
