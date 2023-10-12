import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ParkSeungwoo",
  description: "parkseungwoo nextjs blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="h-screen mx-auto mt-14 w-full max-w-3xl px-4">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
