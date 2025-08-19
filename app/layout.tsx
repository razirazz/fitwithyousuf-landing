import type { Metadata, Viewport } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./src/provider/themeprovider";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const urbanistFont = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitWithYousuf",
  description: "Transform Your Body, Transform Your Life with Yousuf Ali. Welcome to official website of Yousuf Ali, a Level 4 Certified Personal Trainer with over 8 years of experience",
  authors: [{
    name: "Muhammed Yousuf Ali"
  }],
  creator: "Razeena CP",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  }
};

export const viewport: Viewport = {
  themeColor: [
      { media: '(prefers-color-scheme: dark)', color: 'var(--background)'},
      { media: '(prefers-color-scheme: light)', color: 'var(--background)'},
  ],
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  colorScheme: 'light dark',  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth prefers-color-scheme: dark">
      <body
        className={`${interFont.variable} ${urbanistFont.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
