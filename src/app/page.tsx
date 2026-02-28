"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="px-8 pt-48 pb-20 max-w-7xl mx-auto">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="heading-hero">
          Architecting <br />
          <span className="text-slate-200">The Future.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-medium leading-relaxed">
          Specializing in AI Agent orchestration and 10+ years of secure 
          cloud infrastructure. Bridging DevOps with autonomous systems.
        </p>
      </motion.section>

      {/* Empty Work Section Placeholder */}
      <section id="work" className="mt-40 pt-20 border-t border-slate-100">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-300">
            Selected Projects
          </h2>
          <p className="text-sm text-slate-400 italic">Coming Soon</p>
        </div>
        
        {/* This grid will hold your ProjectCard components later */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-[16/10] bg-slate-50 rounded-[40px] animate-pulse" />
          <div className="aspect-[16/10] bg-slate-50 rounded-[40px] animate-pulse" />
        </div>
      </section>
    </main>
  );
}