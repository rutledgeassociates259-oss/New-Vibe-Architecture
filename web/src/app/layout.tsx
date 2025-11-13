import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const techno = Orbitron({
  variable: "--font-techno",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vibe Architects — Take Control Of Your AI Builds",
  description:
    "Blueprint-driven framework and process to make AI apps reproducible and resilient.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/cabinet-grotesk" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${techno.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
