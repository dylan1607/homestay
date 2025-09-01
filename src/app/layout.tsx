import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { LocaleProvider } from "@/contexts/LocaleContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const myFont = localFont({
  src: "../../public/fonts/Airbnb-Cereal-App-Medium.ttf",
});

export const metadata: Metadata = {
  title: "Landing Page",
  description:
    "Professional landing page with modern design and responsive layout",
  keywords: "landing page, web design, responsive, modern, professional",
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "Your Company",
  metadataBase: new URL("https://yourlandingpage.com"),
  openGraph: {
    title: "Landing Page",
    description:
      "Professional landing page with modern design and responsive layout",
    url: "https://yourlandingpage.com",
    siteName: "Landing Page",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page",
    description:
      "Professional landing page with modern design and responsive layout",
    creator: "@yourusername",
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
    <html lang="en">
      <body
        className={`${myFont.className} ${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
