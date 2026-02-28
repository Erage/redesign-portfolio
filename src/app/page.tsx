"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="px-8 pt-48 pb-20 max-w-7xl mx-auto">
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="heading-display">
          Building <br /> 
          <span className="text-slate-200">Autonomous</span> <br />
          Systems.
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 max-w-xl font-medium leading-relaxed">
          Platform Architect with 10+ years of DevOps excellence. Currently 
          securing the future of Agentic Infrastructure.
        </p>
      </motion.section>
    </main>
  );
}