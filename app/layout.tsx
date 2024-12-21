import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Header from "./components/header";
import "./globals.css";

const robotoMono = Roboto_Mono({});

export const metadata: Metadata = {
  title: "Quiz App | Home",
  description: "Created by Sadia Iffat Jahan",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
