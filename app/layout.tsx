import type { Metadata, Viewport } from "next";
import { brand } from "@/lib/brand";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

import { siteConfig } from "@/data/site";
import { CursorSparks } from "@/components/effects/CursorSparks";
import { Fireflies } from "@/components/effects/Fireflies";
import { GlowBackground } from "@/components/effects/GlowBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const title = `${siteConfig.name} • ${siteConfig.author}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description: siteConfig.description,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: brand.dark.background },
    { media: "(prefers-color-scheme: light)", color: brand.light.background },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
        >
          <GlowBackground />
          <Fireflies />
          <CursorSparks />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
