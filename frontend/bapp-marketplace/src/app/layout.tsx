import "styles/global.css";

import { Inter } from "next/font/google";

import * as React from "react";

import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata = {
  title: "Wall3 bApps",
  description: "marketplace for Wall3 bApps",
  creator: "Piotr Kram",
  publisher: "Piotr Kram",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Wall3",
    description: "Home of web3",
    images: [
      {
        url: `/wall3.jpg`,
        width: 1200,
        height: 630,
        alt: "Wall3",
      },
    ],
    locale: "en_UK",
    type: "website",
  },
  generator: "Next.js",
  applicationName: "Wall3",
  keywords: ["web3", "blockchain", "walle"],
  manifest: `./manifest.json`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} relative`}>
            <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
