import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "PD | AI Software Engineer", // Mimicking Palak's title style
  description: "Building Intelligent Systems with GenAI & Cloud",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${mono.variable}`}>
      {/* Dark background (bg-[#1a1a1a]) and white text (text-white) 
        are essential to match the screenshot 
      */}
      <body className="bg-[#1a1a1a] text-white font-sans antialiased selection:bg-[#f0a25e]/30">
        <nav className="fixed top-0 w-full z-50 bg-[#1a1a1a]/80 backdrop-blur-md px-8 py-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo: PD Style */}
            <div className="font-mono font-bold text-[#f0a25e] text-xl">PD</div>
            
            {/* Nav Links: Mono font, lowercase like Palak's site */}
            <div className="hidden md:flex space-x-8 font-mono text-sm text-gray-300">
              <a href="#home" className="hover:text-[#f0a25e] transition-colors">Home</a>
              <a href="#projects" className="hover:text-[#f0a25e] transition-colors">Projects</a>
              <a href="#services" className="hover:text-[#f0a25e] transition-colors">Services</a>
              <a href="#contact" className="hover:text-[#f0a25e] transition-colors">Contact</a>
            </div>

            {/* Resume Button: The orange/gold accent */}
            <a 
              href="/resume.pdf" 
              className="bg-[#f0a25e] text-black px-5 py-2 rounded-lg font-mono text-sm font-bold flex items-center gap-2 hover:bg-[#e0924e] transition-all"
            >
              <span>↓</span> Resume
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}