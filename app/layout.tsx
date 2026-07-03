import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'


export const metadata: Metadata = {
  metadataBase: new URL("https://aiwhatsapp.axorawebsolutions.com"),

  title: {
    default: "WhatsApp Automation Software | Bulk WhatsApp Sender for Windows & Linux",
    template: "%s | WhatsApp Automation",
  },

  description:
    "WhatsApp Automation Software for Windows and Linux. Send bulk WhatsApp messages, import contacts from Excel and CSV, share images, videos and documents, track campaigns and manage WhatsApp communication with an easy-to-use desktop application.",

  applicationName: "WhatsApp Automation",

  keywords: [
    "WhatsApp Automation",
    "WhatsApp Automation Software",
    "WhatsApp Bulk Sender",
    "Bulk WhatsApp Sender",
    "WhatsApp Bulk Messaging",
    "WhatsApp Marketing Software",
    "WhatsApp Desktop Software",
    "WhatsApp Business Automation",
    "WhatsApp Campaign Software",
    "Bulk Message Software",
    "WhatsApp Contact Manager",
    "Excel to WhatsApp",
    "CSV WhatsApp Sender",
    "WhatsApp Message Automation",
    "WhatsApp Sender Windows",
    "WhatsApp Sender Linux",
  ],

  authors: [
    {
      name: "AxoraWeb Solutions",
      url: "https://axorawebsolutions.com",
    },
  ],

  creator: "AxoraWeb Solutions",
  publisher: "AxoraWeb Solutions",
  category: "Business Software",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aiwhatsapp.axorawebsolutions.com",
    siteName: "WhatsApp Automation",
    title: "WhatsApp Automation Software | Bulk WhatsApp Sender",
    description:
      "Professional WhatsApp Automation Software for Windows and Linux. Send bulk messages, manage contacts, import Excel and CSV files and automate WhatsApp communication.",

    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "WhatsApp Automation Software Dashboard",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WhatsApp Automation Software",
    description:
      "Professional desktop software for WhatsApp automation, bulk messaging and contact management.",
    images: ["/hero.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})



export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [{ color: '#25D366' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "WhatsApp Automation",
      operatingSystem: "Windows, Linux",
      applicationCategory: "BusinessApplication",
      url: "https://aiwhatsapp.axorawebsolutions.com",
      image: "https://aiwhatsapp.axorawebsolutions.com/preview.png",
      description:
        "Professional WhatsApp Automation Software for bulk messaging contact management and campaign tracking.",
      publisher: {
        "@type": "Organization",
        name: "AxoraWeb Solutions",
      },
    }),
  }}
/>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
