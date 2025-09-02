import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { LocaleProvider } from "@/contexts/LocaleContext";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const myFont = localFont({
  src: "../../public/fonts/Helvetica.ttf",
});

export const metadata: Metadata = {
  title: "Cozy Homestay",
  description: "A cozy homestay experience",
  keywords: "homestay, cozy, comfortable, relaxing",
  authors: [{ name: "Dylan Tran" }],
  creator: "Cozy",
  publisher: "Cozy",
  metadataBase: new URL("https://cozy.io.vn"),
  openGraph: {
    title: "Cozy Homestay",
    description: "A cozy homestay experience",
    url: "https://cozy.io.vn",
    siteName: "Cozy Homestay",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cozy Homestay",
    description: "A cozy homestay experience",
    creator: "@dylantran",
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
      <Script id="clarityTracking">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "t4bckq3kbm");
        `}
      </Script>
      <Script id="gtmTracking">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KM2MWHNP');  
        `}
      </Script>
      <body
        className={`${myFont.className} ${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KM2MWHNP"
            height="0"
            width="0"
            className="hidden invisible"
          ></iframe>
        </noscript>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
