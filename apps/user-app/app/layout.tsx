import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@repo/ui/globals.css";
import { Toaster } from "@repo/ui/components/ui/toaster";
import { Providers } from "../provider";
import { AppbarClient } from "../components/AppbarClient";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Wallet",
  description: "Simple Wallet app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <main>
            <div className="min-w-screen min-h-screen bg-[#ebe6e6]">
              <AppbarClient />
              {children}
            </div>
          </main>
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
