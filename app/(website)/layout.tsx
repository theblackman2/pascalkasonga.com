import Footer from "@/components/core/footer";
import Header from "@/components/core/header";
import { ReactNode } from "react";

export default function WebsiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col text-text">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
} 