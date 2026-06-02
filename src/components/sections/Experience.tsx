"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../LanguageProvider";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const { t } = useLanguage();
  
  // Mempertahankan state activeTab untuk switcher
  const [activeTab, setActiveTab] = useState<"org" | "academic">("org");
  const currentData = activeTab === "org" ? t.experience.organization : t.experience.academic;

  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mempertahankan deteksi scroll timeline dengan Framer Motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"] 
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // GSAP untuk animasi masuk (Reveal) teks header
  useGSAP(() => {
    gsap.fromTo(
      ".gsap-exp-reveal",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section 
      id="experience"
      // Latar belakang polos agar bersih dan fokus ke konten
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-12 bg-[#F4F4F5] dark:bg-[#111827] font-mono transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full relative z-10" ref={containerRef}>
        
        {/* =========================================
            HEADER SECTION (Giant Typography)
            ========================================= */}
        <div className="gsap-exp-reveal mb-12 flex flex-col items-start text-left">
          <h2 className="text-[40px] md:text-[64px] lg:text-[80px] font-black text-[#111827] dark:text-[#FFFFFF] tracking-tighter uppercase leading-[0.9]">
            {t.experience.title}
          </h2>
          <p className="mt-4 md:mt-6 text-[#111827]/70 dark:text-[#FFFFFF]/70 text-[14px] md:text-[18px] max-w-xl font-medium">
            {t.experience.subtitle}
          </p>
        </div>

        {/* =========================================
            CTA TABS (Neo-Brutalist Buttons)
            ========================================= */}
        <div className="gsap-exp-reveal flex flex-wrap gap-4 mb-16 relative z-20">
          <button 
            onClick={() => setActiveTab("org")}
            className={`px-6 py-3 border-[3px] border-[#111827] dark:border-[#FFFFFF] rounded-[8px] text-[12px] md:text-[14px] font-black uppercase tracking-widest transition-all ${
              activeTab === "org" 
                ? "bg-[#ea580c] text-[#FFFFFF] shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#FFFFFF] translate-y-[-2px] border-transparent dark:border-transparent" 
                : "bg-[#FFFFFF] dark:bg-[#111827] text-[#111827] dark:text-[#FFFFFF] hover:bg-[#ea580c] hover:text-[#FFFFFF] shadow-none"
            }`}
          >
            {t.experience.tabs.org}
          </button>

          <button 
            onClick={() => setActiveTab("academic")}
            className={`px-6 py-3 border-[3px] border-[#111827] dark:border-[#FFFFFF] rounded-[8px] text-[12px] md:text-[14px] font-black uppercase tracking-widest transition-all ${
              activeTab === "academic" 
                ? "bg-[#ea580c] text-[#FFFFFF] shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#FFFFFF] translate-y-[-2px] border-transparent dark:border-transparent" 
                : "bg-[#FFFFFF] dark:bg-[#111827] text-[#111827] dark:text-[#FFFFFF] hover:bg-[#ea580c] hover:text-[#FFFFFF] shadow-none"
            }`}
          >
            {t.experience.tabs.academic}
          </button>
        </div>

        {/* =========================================
            TIMELINE AREA
            ========================================= */}
        <div className="relative min-h-[400px] pb-10">
          
          {/* Garis Dasar Timeline (Ditebalkan menjadi 4px) */}
          <div className="absolute left-[9px] top-4 bottom-0 w-[4px] bg-[#111827]/10 dark:bg-[#FFFFFF]/10 rounded-full" />

          {/* Garis Scroll Animasi (Warna Oranye) */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[9px] top-4 w-[4px] bg-[#ea580c] origin-top z-10 rounded-full shadow-[0_0_15px_rgba(234,88,12,0.5)]"
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="relative z-20 pt-2"
            >
              {currentData.map((exp, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="mb-8 md:mb-10 pl-10 md:pl-16 relative group"
                >
                  
                  {/* Titik Animatif (Berubah jadi kotak membulat Brutalist) */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 + 0.2 }}
                    className="absolute left-[2px] top-[18px] md:top-[22px] w-[18px] h-[18px] bg-[#F4F4F5] dark:bg-[#111827] border-[3px] border-[#111827] dark:border-[#FFFFFF] rounded-[4px] group-hover:bg-[#ea580c] z-20 transition-colors duration-300"
                  />
                  
                  {/* Kartu Konten Pengalaman (Neo-Brutalist Card) */}
                  <div className="bg-[#FFFFFF] dark:bg-[#111827] border-[3px] border-[#111827] dark:border-[#FFFFFF] rounded-[8px] p-5 md:p-6 shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#FFFFFF] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0px_0px_#ea580c] dark:group-hover:shadow-[6px_6px_0px_0px_#ea580c]">
                    
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2 mb-3">
                      <h3 className="text-[18px] md:text-[22px] font-black text-[#111827] dark:text-[#FFFFFF] uppercase tracking-tight leading-none group-hover:text-[#ea580c] transition-colors">
                        {exp.title}
                      </h3>
                      {/* Badge Waktu */}
                      <span className="inline-block bg-[#ea580c] border-[2px] border-[#111827] dark:border-transparent text-[#FFFFFF] px-3 py-1 rounded-[6px] text-[10px] md:text-[12px] font-black uppercase tracking-widest w-fit shrink-0 shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#FFFFFF]">
                        {exp.period}
                      </span>
                    </div>

                    <h4 className="text-[12px] md:text-[14px] font-black text-[#111827]/60 dark:text-[#FFFFFF]/60 mb-4 uppercase tracking-widest">
                      {exp.organization}
                    </h4>

                    <p className="text-[14px] text-[#111827]/80 dark:text-[#FFFFFF]/80 leading-relaxed font-medium max-w-3xl">
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