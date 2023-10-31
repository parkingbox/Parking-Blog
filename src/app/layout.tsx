import "./globals.css";
import type { Metadata } from "next";
import Providers from "../components/Providers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AnalyticsWrap } from "../components/Analytics";

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
          <Header />
          <main className="h-full mx-auto mt-14 w-full max-w-3xl px-4  ">
            {children}
          </main>
          <Footer />
        </Providers>
        <AnalyticsWrap/>
      </body>
    </html>
  );
}
