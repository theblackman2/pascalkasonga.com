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
  description: "Pascal Kasonga est un ingénieur logiciel spécialisé dans le développement web, passionné par la création d'applications performantes et évolutives. Maîtrisant JavaScript, React, Flutter et Node.js, il a fait ses preuves dans la réalisation de solutions logicielles de haute qualité. Soucieux de se former en continu et de rester à la pointe des dernières tendances du secteur, il propose des solutions innovantes à ses clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
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
