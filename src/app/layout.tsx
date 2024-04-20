import "./globals.css";
import type { Metadata } from "next";
import Providers from "../components/Providers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AnalyticsWrap } from "../components/Analytics";
import DarkModeBtn from "../components/DarkModeBtn";

export const metadata = {
  title: {
    default: "Parkseungwoo blog",
    template: "parkseungwoo blog | %s",
  },
  description: "FrontEnd Developer Parkseungwoo nextjs blog",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-neutral-800 bg-neutral-100">
        <Providers>
          <main className="h-full mt-28 mx-auto w-full max-w-3xl px-4">
            <Header />
            {children}
            <Footer />
          </main>
          <DarkModeBtn />
        </Providers>

        <AnalyticsWrap />
      </body>
    </html>
  );
}
