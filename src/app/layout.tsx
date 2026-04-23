import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import JsonLd from "@/components/seo/JsonLd";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SidebarNav } from "@/components/sidebar-nav";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chalapathipharmacy.in"),
  title: {
    default: "Best Pharmacy College in AP | Chalapathi Institute of Pharmaceutical Sciences (CLPT)",
    template: "%s | CLPT Autonomous",
  },
  description:
    "Accredited NAAC A+ & NBA, Chalapathi Institute of Pharmaceutical Sciences is the best pharmacy college in AP and India, offering premium B.Pharm, M.Pharm, Pharm.D and PhD programs with excellent placements.",
  keywords: [
    "best pharmacy college in AP",
    "best pharmacy colleges in India",
    "top pharmacy colleges in Andhra Pradesh",
    "pharmacy admissions Guntur",
    "CLPT Autonomous",
    "B.Pharm college Guntur",
    "M.Pharm specialization colleges",
    "best research pharmacy college AP",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Best Pharmacy College in AP | CLPT Autonomous",
    description: "Leading pharmaceutical education and research excellence in Guntur, Andhra Pradesh.",
    url: "https://chalapathipharmacy.in",
    siteName: "CLPT Autonomous",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CLPT Campus and Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pharmacy College in AP | CLPT Autonomous",
    description: "Leading pharmaceutical education and research excellence in Guntur, Andhra Pradesh.",
    images: ["/images/og-image.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} h-full antialiased font-roboto`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/images/favicon.png" />
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ClerkProvider>
          <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            <main className="flex-1 relative">
              <SidebarNav />
              {children}
            </main>
            <Footer />
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
