import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pascal Kasonga - Software Engineer",
  description: "Pascal Kasonga is a software engineer specializing in web development, passionate about creating high-performance and scalable applications. Proficient in JavaScript, React, Flutter, and Node.js, he has a proven track record in delivering high-quality software solutions. Committed to continuous learning and staying abreast of the latest industry trends, he offers innovative solutions to his clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense fallback={
          <div className="w-full min-h-screen bg-primary text-white flex items-center justify-center">
            ...Loading...
          </div>
        }>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
