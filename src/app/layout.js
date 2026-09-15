import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Sound } from "@/components/sound";
import { basePath, siteDescription, siteTitle, siteUrl } from "./data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const ogImage = `${basePath}/background/background-2.png`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Ilija Košanin",
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: `${basePath}/`,
    siteName: "Ilija Košanin",
    images: [
      {
        url: ogImage,
        width: 1024,
        height: 576,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
};

export const viewport = {
  themeColor: "#1b1b1b",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background text-foreground")}>
        <Sound />
        {children}
        <div id="my-modal" />
      </body>
    </html>
  );
}
