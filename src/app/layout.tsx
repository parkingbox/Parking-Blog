import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "../components/Providers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DarkModeBtn from "../components/DarkModeBtn";

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
      <body>
        <Providers>
          <Header />
          <main className="h-screen mx-auto mt-14 w-full max-w-3xl px-4">
            {children}
          </main>
          <Footer />
          <DarkModeBtn />
        </Providers>
      </body>
    </html>
  );
}
