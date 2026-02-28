import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Platform Architect | Portfolio",
  description: "10+ years of DevOps and AI Infrastructure excellence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} selection:bg-slate-100`}>
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md px-8 py-8 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
          <div className="font-black text-2xl tracking-tighter">NAME.</div>
          <div className="flex space-x-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <a href="#work" className="hover:text-black transition-colors">Work</a>
            <a href="#about" className="hover:text-black transition-colors">About</a>
            <a href="mailto:your@email.com" className="hover:text-black transition-colors">Contact</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

