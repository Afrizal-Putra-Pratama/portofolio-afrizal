"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Download, X, ExternalLink } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  
  const roles = [t.hero.role1, t.hero.role2];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(roleInterval);
  }, [t.hero.role1, t.hero.role2]);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden bg-[#F8F9FA] dark:bg-black transition-colors duration-500">
      
      {/* 1. Background Animatif: Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100/30 dark:bg-blue-900/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 100, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-indigo-100/20 dark:bg-zinc-800/20 blur-[100px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 pt-20 md:pt-0">
        
        {/* 2. Kolom Kiri: Branding & Teks */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-blue-600 text-xs font-bold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            {t.hero.status}
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-blue-600 to-zinc-900 dark:from-white dark:via-blue-400 dark:to-white bg-[length:200%_auto]"
            animate={{ backgroundPosition: ["0% center", "200% center"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            Afrizal Putra Pratama
          </motion.h1>
          
          <div className="h-12 mb-6 flex items-center justify-center md:justify-start">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400"
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-lg text-slate-600 dark:text-zinc-400 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            {t.hero.description}
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Tombol diarahkan ke section projects */}
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-center font-bold rounded-2xl hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95"
            >
              {t.hero.btnPrimary}
            </a>
            
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-zinc-900 border-2 border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 hover:border-blue-500 hover:text-blue-600 shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              {t.hero.btnSecondary}
            </motion.button>
          </div>
        </div>

        {/* 3. Kolom Kanan: Draggable ID Card */}
        <div className="order-1 md:order-2 flex justify-center items-center relative h-[450px] md:h-[600px] w-full">
          <div className="relative w-full h-full flex items-center justify-center">
            <motion.div
              drag
              dragConstraints={{ left: -150, right: 150, top: -100, bottom: 100 }}
              whileDrag={{ scale: 1.05, rotate: 2, cursor: "grabbing" }}
              className="relative w-[290px] md:w-[340px] bg-white dark:bg-zinc-900 p-4 rounded-[2.5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-none border border-zinc-200 dark:border-zinc-800 cursor-grab z-20 group"
            >
              <div className="relative w-full aspect-[4/5] rounded-[1.8rem] overflow-hidden bg-zinc-100 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-800">
                <Image 
                  src="/images/profile-transparent.png" 
                  alt="Afrizal"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>

              <div className="mt-6 px-2 pb-2">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div>
                    <p className="text-zinc-900 dark:text-white font-black text-xl leading-none uppercase tracking-tighter">Afrizal P.P.</p>
                    <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-widest mt-2">Indonesia • 2026-AFZ</p>
                  </div>
                  
                  {/* Barcode Random */}
                  <div className="w-full h-8 flex gap-[2px] items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
                    {[...Array(30)].map((_, i) => (
                      <div key={i} className="bg-black dark:bg-white h-full" style={{ width: `${(i % 3 === 0) ? 3 : 1}px` }} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-3 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* 4. MODAL RESUME */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 30 }} className="relative w-full max-w-5xl h-[85vh] bg-white dark:bg-zinc-950 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col border border-zinc-200 dark:border-zinc-800">
              <div className="p-6 md:px-10 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center bg-white dark:bg-zinc-900">
                <div className="flex flex-col">
                  <h3 className="font-black text-xl text-zinc-900 dark:text-white uppercase tracking-tighter">Curriculum Vitae</h3>
                  <span className="text-xs text-zinc-500 font-medium">Afrizal Putra Pratama</span>
                </div>
                <div className="flex items-center gap-3">
                  <a href="/resume.pdf" download className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all">
                    <Download className="w-4 h-4" /> Download PDF
                  </a>
                  <button onClick={() => setIsModalOpen(false)} className="p-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-2xl transition-colors">
                    <X className="w-6 h-6 text-zinc-500" />
                  </button>
                </div>
              </div>
              <div className="flex-1 bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
                <iframe src="/resume.pdf" className="w-full h-full border-none" title="Resume" />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}