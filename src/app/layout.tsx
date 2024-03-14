import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import QueryProvider from "./QueryProvider";
import Header from "@/components/Header";
import Image from "next/image";
import bookImage from "@/assets/bookImage.jpg";
import MousePointer from "@/components/MousePointer";

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
        <MousePointer>
          {" "}
          <div className="flex justify-between min-w-max">
            <Header />
            <Navigation />
          </div>
          <QueryProvider>{children}</QueryProvider>
        </MousePointer>
      </body>
    </html>
  );
}
