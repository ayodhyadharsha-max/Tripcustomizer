import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UP Tour Customizer | Custom Uttar Pradesh Pilgrimage & Heritage Tour Planner",
  description:
    "Design your custom Uttar Pradesh (UP) tour package using our interactive trip planner. Cover Ayodhya, Varanasi, Prayagraj, Agra, Vrindavan, Mathura, Lucknow, Chitrakoot, Bodhgaya, and more. Choose your own hotels, AC transport, and routes. Perfect for families, devotees, and senior citizens.",
  keywords: [
    "UP tour customizer",
    "custom Uttar Pradesh tour package",
    "UP tour planner",
    "Ayodhya Varanasi Prayagraj custom tour",
    "Mathura Vrindavan Agra tour package",
    "Lucknow Ayodhya Naimisharanya tour",
    "Chitrakoot tour package",
    "Bodhgaya pilgrimage tour",
    "Uttar Pradesh tour builder",
    "customized UP travel package",
    "UP pilgrimage tour planner",
    "Varanasi local tour guide package",
    "family tour package UP",
    "elderly friendly UP tour",
  ].join(", "),
  applicationName: "UP Tours Customizer",
  authors: [{ name: "UP Tours Customizer" }],
  creator: "UP Tours Customizer",
  publisher: "UP Tours Customizer",
  category: "Travel & Tourism",
  classification: "Custom Pilgrimage & Heritage Tours",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    title: "UP Tour Customizer — Create Your Custom Uttar Pradesh Itinerary",
    description:
      "Select your cities (Varanasi, Ayodhya, Prayagraj, Mathura, Vrindavan, Agra, and more), choose hotel categories, pick your vehicle, and get a tailored quote instantly.",
    type: "website",
    locale: "en_IN",
    siteName: "UP Tours Customizer",
  },
  twitter: {
    card: "summary_large_image",
    title: "UP Tour Customizer — Custom Uttar Pradesh Tour Packages",
    description:
      "Design your spiritual and heritage tour across Varanasi, Ayodhya, Prayagraj, Mathura, Vrindavan, Agra, and more. Instant quotes and custom vehicle choices.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://tripcustomizer.vercel.app",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "96x96", type: "image/png" },
      { url: "/logo.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#FF6B00" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Ayodhya" />
        <meta name="geo.position" content="26.7922;82.1998" />
        <meta name="ICBM" content="26.7922, 82.1998" />
      </head>
      <body className="font-inter bg-sacred-cream overflow-x-hidden">
        {/* GTM noscript fallback — first element in <body> per Google specification */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5PVR84PC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}

        {/* GTM head script — afterInteractive loads post-hydration, preserving LCP & FID */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5PVR84PC');`,
          }}
        />
      </body>
    </html>
  );
}
