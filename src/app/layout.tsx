import "./globals.css";
import type { Metadata } from "next";
import Providers from "../components/Providers";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
          <main className="h-screen max-h-[1080px] mx-auto mt-14 w-full max-w-3xl px-4">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
