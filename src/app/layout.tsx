import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Foodresh - 신선한 농수산물 쇼핑몰",
  description: "산지에서 직접 배송되는 신선한 농수산물을 만나보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
