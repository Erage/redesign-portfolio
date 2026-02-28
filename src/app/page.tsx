"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-[#1a1a1a] min-h-screen text-white px-6 pt-32 pb-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Availability Badge */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/5 px-4 py-2 rounded-full mb-12"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-emerald-500 uppercase tracking-widest">
            Available for Projects
          </span>
        </motion.div>

        {/* Hero Header */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6">
            Hi, I&apos;m <span className="text-[#f0a25e]">Your Name</span>
          </h1>
          
          <p className="font-mono text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed mb-12">
            Platform Architect <span className="text-gray-600">|</span> 10+ Years DevOps Excellence <span className="text-gray-600">|</span> Specializing in <span className="text-white">AI Agents & Cloud</span>
          </p>

          {/* Corrected Buttons with valid string constants */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#f0a25e] hover:bg-[#e0924e] text-black font-mono font-bold px-8 py-4 rounded-xl flex items-center gap-2 transition-all">
              View Projects <span>→</span>
            </button>
            <button className="border border-blue-500/50 text-blue-400 font-mono font-bold px-8 py-4 rounded-xl hover:bg-blue-500/10 transition-all">
              Contact Me
            </button>
            <button className="border border-gray-700 text-gray-300 font-mono font-bold px-8 py-4 rounded-xl hover:bg-gray-800 transition-all flex items-center gap-2">
              <span>↓</span> Resume
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-gray-500 font-mono text-sm">
            <span>📍</span> Delhi, India
          </div>
        </motion.section>
      </div>
    </main>
  );
}