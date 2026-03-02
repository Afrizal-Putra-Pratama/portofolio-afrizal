"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../LanguageProvider";

export default function Experience() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"org" | "academic">("org");
  const currentData = activeTab === "org" ? t.experience.organization : t.experience.academic;

  // Referensi untuk mendeteksi scroll pada area timeline
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mengambil progres scroll relatif terhadap container timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"] // Animasi jalan saat atas container ada di tengah layar, selesai saat bawah container di tengah layar
  });

  // Mengubah progres (0 hingga 1) menjadi persentase tinggi garis (0% hingga 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 px-6 bg-white dark:bg-zinc-950 transition-colors duration-300" id="experience">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Minimalis */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase">
            {t.experience.title}
          </h2>
          <div className="w-12 h-1 bg-blue-600 mt-2 mb-4 rounded-full" />
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-xl">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* CTA Tabs (Switcher) */}
        <div className="flex gap-6 mb-12 border-b border-zinc-200 dark:border-zinc-800 relative z-20">
          <button 
            onClick={() => setActiveTab("org")}
            className={`pb-4 text-xs md:text-sm font-bold uppercase tracking-widest relative transition-colors ${
              activeTab === "org" 
                ? "text-blue-600 dark:text-blue-400" 
                : "text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
            }`}
          >
            {t.experience.tabs.org}
            {activeTab === "org" && (
              <motion.div 
                layoutId="activeTabUnderline" 
                className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-blue-600 dark:bg-blue-400" 
              />
            )}
          </button>

          <button 
            onClick={() => setActiveTab("academic")}
            className={`pb-4 text-xs md:text-sm font-bold uppercase tracking-widest relative transition-colors ${
              activeTab === "academic" 
                ? "text-blue-600 dark:text-blue-400" 
                : "text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
            }`}
          >
            {t.experience.tabs.academic}
            {activeTab === "academic" && (
              <motion.div 
                layoutId="activeTabUnderline" 
                className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-blue-600 dark:bg-blue-400" 
              />
            )}
          </button>
        </div>

        {/* Timeline Area (Tempat Animasi Scroll Berjalan) */}
        <div className="relative min-h-[400px]" ref={containerRef}>
          
          {/* 1. Static Background Line (Garis Abu-abu Pudar) */}
          <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800 rounded-full" />

          {/* 2. Animated Scroll Line (Garis Biru yang Mengisi saat di-scroll) */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[7px] top-2 w-[2px] bg-blue-600 origin-top z-10 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)] dark:shadow-[0_0_15px_rgba(96,165,250,0.6)]"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative z-20"
            >
              {currentData.map((exp, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-12 pl-10 relative group"
                >
                  
                  {/* Titik Animatif (Muncul membesar, lalu bisa di-hover) */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 + 0.2 }}
                    className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-zinc-950 border-2 border-zinc-300 dark:border-zinc-700 group-hover:border-blue-600 group-hover:bg-blue-600 z-20 transition-all duration-300 shadow-sm"
                  />
                  
                  {/* Konten Teks (Efek Nudge/Geser saat di-hover) */}
                  <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
                      <h3 className="text-lg md:text-xl font-bold text-zinc-900 dark:text-white group-hover:text-blue-600 transition-colors">
                        {exp.title}
                      </h3>
                      <span className="text-[10px] md:text-xs font-black text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded uppercase tracking-widest w-fit shrink-0 mt-1 md:mt-0">
                        {exp.period}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-zinc-500 dark:text-zinc-500 mb-3 uppercase tracking-wider">
                      {exp.organization}
                    </h4>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
                      {exp.description}
                    </p>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
}