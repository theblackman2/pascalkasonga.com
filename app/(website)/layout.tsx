import Footer from "@/components/core/footer";
import { ReactNode } from "react";

export default function WebsiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex flex-col">
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
} 