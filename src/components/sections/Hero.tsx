"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Download, X, ExternalLink } from "lucide-react";
import { useLanguage } from "../LanguageProvider";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { t, language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0); 
  
  const roles = ["UI/UX DESIGNER", "WEB DEV ENTHUSIAST"];

  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(roleInterval);
  }, []); 

  // ==========================================
  // PEROMBAKAN GSAP: MENUNGGU ABA-ABA PRELOADER
  // ==========================================
  useGSAP(() => {
    // 1. Set semua elemen animasi agar bersembunyi (transparan & turun ke bawah) sejak awal
    gsap.set(".gsap-reveal", { y: 40, opacity: 0 });

    // 2. Fungsi untuk menjalankan animasi masuk
    const playRevealAnimation = () => {
      gsap.to(".gsap-reveal", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2, // Sedikit jeda agar sinkron dengan pintunya terbuka
      });
    };

    // 3. Logika pengecekan Session
    const hasLoaded = sessionStorage.getItem("preloader_shown");

    if (hasLoaded) {
      // Jika user merefresh web (preloader tidak muncul), langsung jalankan animasi
      playRevealAnimation();
    } else {
      // Jika pertama kali buka, TUNGGU aba-aba "preloaderDone"
      const handlePreloaderDone = () => {
        playRevealAnimation();
      };

      window.addEventListener("preloaderDone", handlePreloaderDone);

      // Bersihkan event listener saat komponen dilepas
      return () => {
        window.removeEventListener("preloaderDone", handlePreloaderDone);
      };
    }

    // 4. Parallax Background (Tetap berjalan sesuai scroll, tidak terpengaruh preloader)
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.to(bgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(textRef.current, {
        yPercent: -20,
        opacity: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, { scope: containerRef });

  const SkillItem = ({ name }: { name: string }) => (
    <div className="flex items-center px-4 md:px-6">
      <span className="text-[14px] md:text-[18px] font-black uppercase tracking-widest whitespace-nowrap">{name}</span>
      <span className="text-[#a7a7a7] font-black text-[14px] md:text-[18px] ml-4 md:ml-6">•</span>
    </div>
  );

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100svh] flex flex-col items-center justify-center px-4 md:px-6 pt-32 pb-24 md:pt-40 md:pb-28 overflow-hidden bg-[#F4F4F5] dark:bg-[#111827] font-mono transition-colors duration-500"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 60s linear infinite;
        }
      `}} />

      {/* 1. BACKGROUND GRID */}
      <div 
        ref={bgRef}
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#11182715_1px,transparent_1px),linear-gradient(to_bottom,#11182715_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:40px_40px] will-change-transform" 
      />

      {/* 2. KONTEN UTAMA */}
      <div ref={textRef} className="relative z-20 w-full max-w-[90vw] flex flex-col items-center text-center will-change-transform">
        
        {/* FOTO ID CARD (HANYA MUNCUL DI MOBILE / md:hidden) */}
        <div className="gsap-reveal flex md:hidden justify-center items-center mb-8 w-full mt-4">
          <div className="relative w-[150px] bg-[#FFFFFF] dark:bg-[#111827] p-2.5 rounded-[20px] border-[3px] border-[#111827] dark:border-[#FFFFFF] shadow-[6px_6px_0px_0px_#ea580c] rotate-[-5deg]">
            <div className="relative w-full aspect-[4/5] rounded-[12px] overflow-hidden border-[3px] border-[#111827] dark:border-[#FFFFFF] bg-[#F4F4F5] dark:bg-[#000000]">
              <Image 
                src="/images/afrizal.png" 
                alt="Afrizal" 
                fill 
                sizes="150px"
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" 
                priority 
              />
            </div>
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-10 h-3.5 bg-[#FFFFFF] dark:bg-[#111827] rounded-full border-[3px] border-[#111827] dark:border-[#FFFFFF]" />
            <div className="absolute -bottom-3 -right-3 bg-[#ea580c] text-[#FFFFFF] text-[10px] font-black px-3 py-1 rounded-full border-[2px] border-[#111827] dark:border-[#FFFFFF] rotate-[12deg] shadow-[2px_2px_0px_0px_rgba(17,24,39,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
              HELLO!
            </div>
          </div>
        </div>

        {/* NAMA - 1 Baris */}
        <h1 className="gsap-reveal text-[28px] sm:text-[40px] md:text-[5vw] lg:text-[76px] font-black tracking-tighter leading-none text-[#111827] dark:text-[#FFFFFF] mb-2 md:mb-4 uppercase whitespace-nowrap">
          AFRIZAL PUTRA PRATAMA
        </h1>

        {/* ROLE ANIMASI */}
        <div className="gsap-reveal h-6 md:h-8 mb-6 md:mb-8 overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="text-[14px] md:text-[20px] font-bold text-[#ea580c] tracking-widest uppercase"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* DESKRIPSI */}
        <p className="gsap-reveal text-[14px] md:text-[18px] text-[#111827]/70 dark:text-[#FFFFFF]/70 leading-relaxed max-w-2xl font-medium mb-10 md:mb-12">
          {t.hero.description}
        </p>

        {/* TOMBOL AKSI */}
        <div className="gsap-reveal flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a 
            href="#projects" 
            className="w-full sm:w-auto px-8 py-4 bg-[#ea580c] text-[#FFFFFF] text-center text-[16px] font-bold rounded-full transition-all shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(17,24,39,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ea580c] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] uppercase tracking-wider"
          >
            {t.hero.btnPrimary}
          </a>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full sm:w-auto px-8 py-4 bg-[#FFFFFF] dark:bg-[#111827] border-2 border-[#111827]/20 dark:border-[#FFFFFF]/20 text-[#111827] dark:text-[#FFFFFF] text-[16px] font-bold rounded-full transition-colors flex items-center justify-center gap-2 hover:border-[#ea580c] hover:text-[#ea580c] dark:hover:border-[#ea580c] dark:hover:text-[#ea580c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ea580c] uppercase tracking-wider shadow-sm"
          >
            <ExternalLink className="w-4 h-4" />
            {t.hero.btnSecondary}
          </button>
        </div>
      </div>

      {/* 3. MARQUEE BANNER */}
      <div className="gsap-reveal absolute bottom-0 left-0 w-full z-10 shadow-2xl">
        <div className="w-full bg-[#111827] dark:bg-[#FFFFFF] text-[#FFFFFF] dark:text-[#111827] py-3 md:py-4 flex overflow-hidden border-t-[3px] border-[#ea580c]">
          <div className="flex w-max animate-marquee-fast">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((set) => (
              <div key={set} className="flex items-center">
                <SkillItem name="UI/UX Designer" />
                <SkillItem name="Web Dev Enthusiast" />
                <SkillItem name="AI Enthusiast" />
                <SkillItem name="Public Speaking" />
                <SkillItem name="Team Management" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. MODAL RESUME */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div 
            onClick={() => setIsModalOpen(false)} 
            className="absolute inset-0 bg-[#111827]/80 backdrop-blur-sm cursor-pointer animate-in fade-in duration-300" 
          />
          
          <div className="relative w-full max-w-4xl h-[90vh] bg-[#FFFFFF] dark:bg-[#111827] rounded-[24px] overflow-hidden shadow-[8px_8px_0px_0px_#ea580c] flex flex-col border-[3px] border-[#111827] dark:border-[#FFFFFF] animate-in zoom-in-95 duration-300">
            <div className="px-6 py-4 border-b-[3px] border-[#111827] dark:border-[#FFFFFF] flex justify-between items-center bg-[#FFFFFF] dark:bg-[#111827] shrink-0 z-20">
              <div className="flex flex-col">
                <h3 className="font-black text-[18px] md:text-[20px] text-[#111827] dark:text-[#FFFFFF] uppercase tracking-tighter line-clamp-1">
                  Curriculum Vitae
                </h3>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <a 
                  href="/CV-Afrizal Putra Pratama.pdf" 
                  download="CV-Afrizal Putra Pratama.pdf" 
                  className="flex items-center gap-2 px-5 py-2.5 bg-[#ea580c] text-[#FFFFFF] rounded-full font-bold text-[14px] uppercase tracking-wider transition-all shadow-[2px_2px_0px_0px_rgba(17,24,39,1)] hover:translate-y-[2px] hover:shadow-[0px_0px_0px_0px_rgba(17,24,39,1)] focus-visible:outline-none dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]"
                >
                  <Download className="w-4 h-4" /> 
                  <span className="hidden sm:inline">{language === "id" ? "Unduh" : "Download"}</span>
                </a>
                <button 
                  onClick={() => setIsModalOpen(false)} 
                  className="p-2 border-2 border-[#111827] dark:border-[#FFFFFF] rounded-full transition-colors hover:bg-[#111827] hover:text-[#FFFFFF] dark:hover:bg-[#FFFFFF] dark:hover:text-[#111827] text-[#111827] dark:text-[#FFFFFF]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="relative flex-1 w-full h-full bg-[#F4F4F5] dark:bg-[#111827] overflow-hidden">
              <iframe src="/CV-Afrizal Putra Pratama.pdf#view=FitH" className="w-full h-full border-none" title="Resume" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}