"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="bg-[#1a1a1a] min-h-screen text-white px-6 pt-32 pb-20 selection:bg-[#f0a25e]/30 overflow-x-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isMounted ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          role="status"
          aria-label="Available for new projects"
          className="flex items-center gap-3 border border-emerald-500/20 bg-emerald-950/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-12"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>

          <span className="text-[10px] font-mono font-medium text-emerald-400 uppercase tracking-[0.2em]">
            Available for Projects
          </span>
        </motion.div>

        {/* Hero Header */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8">
            Hi, I&apos;m <span className="text-[#f0a25e]">Your Name</span>
          </h1>
          
          <p className="font-mono text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed mb-12">
            Platform Architect <span className="text-gray-700">|</span> 10+ Years DevOps <span className="text-gray-700">|</span> 
            <span className="block mt-2">Specializing in <span className="text-white border-b border-[#f0a25e]/30">AI Agents & Cloud</span></span>
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="#projects" 
              className="bg-[#f0a25e] hover:bg-[#e0924e] text-black font-mono font-bold px-8 py-4 rounded-xl flex items-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95"
            >
              View Projects <span>→</span>
            </Link>
            
            <Link 
              href="mailto:hello@example.com" 
              className="border border-blue-500/30 text-blue-400 font-mono font-bold px-8 py-4 rounded-xl hover:bg-blue-500/10 transition-all active:scale-95"
            >
              Contact Me
            </Link>
            
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border border-gray-700 text-gray-300 font-mono font-bold px-8 py-4 rounded-xl hover:bg-gray-800 transition-all flex items-center gap-2 active:scale-95"
            >
              <span>↓</span> Resume
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 font-mono text-xs uppercase tracking-widest">
            <span aria-hidden="true">📍</span> Delhi, India
          </div>
        </motion.section>
      </div>
    </main>
  );
}