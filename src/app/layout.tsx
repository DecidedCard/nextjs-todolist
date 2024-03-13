import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import QueryProvider from "./QueryProvider";
import Header from "@/components/Header";
import Image from "next/image";
import bookImage from "@/assets/bookImage.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js-TodoList",
  description: "Next TodoList",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between">
          <Header />
          <Navigation />
        </div>
        <Image
          src={bookImage}
          alt="책 이미지 입니다."
          className="absolute top-0 bottom-16 -z-10 opacity-80"
        />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
