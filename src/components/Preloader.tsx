"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello",
  "Bonjour",
  "こんにちは",
  "Ciao",
  "Hola",
  "Halo",
  "Welcome!" 
];

export default function Preloader() {
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Kunci scroll hanya saat animasi masih berjalan
  useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [phase]);

  // ==========================================
  // LOGIKA 1: PENGECEKAN RENTANG WAKTU (30 MENIT)
  // ==========================================
  useEffect(() => {
    const expiry = localStorage.getItem("preloader_expiry");
    const now = new Date().getTime();
    
    // Jika waktu saat ini masih KURANG DARI waktu kedaluwarsa, SKIP preloader
    if (expiry && now < parseInt(expiry)) {
      setPhase("done");
      setTimeout(() => window.dispatchEvent(new Event("preloaderDone")), 100);
      return;
    }

    if (phase === "loading") {
      if (currentIndex < greetings.length - 1) {
        const timer = setTimeout(() => {
          setCurrentIndex((prev) => prev + 1);
        }, 730); 
        return () => clearTimeout(timer);
      } else {
        const holdTimer = setTimeout(() => {
          setPhase("exiting");
        }, 1200);
        return () => clearTimeout(holdTimer);
      }
    }
  }, [currentIndex, phase]);

  // ==========================================
  // LOGIKA 2: SETTING WAKTU KEDALUWARSA & EXIT
  // ==========================================
  useEffect(() => {
    if (phase === "exiting") {
      // Aba-aba ke komponen lain (seperti Hero GSAP)
      window.dispatchEvent(new Event("preloaderDone"));

      const splitTimer = setTimeout(() => {
        setPhase("done");
        
        // Set waktu 30 menit ke depan (30 menit * 60 detik * 1000 milidetik)
        const expiryTime = new Date().getTime() + 30 * 60 * 1000;
        localStorage.setItem("preloader_expiry", expiryTime.toString());
        
        // Refresh ScrollTrigger agar animasi posisi tidak berantakan
        window.dispatchEvent(new Event("resize")); 
      }, 1000); 
      return () => clearTimeout(splitTimer);
    }
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div className={`fixed inset-0 z-[99999] flex ${phase === "loading" ? "pointer-events-auto" : "pointer-events-none"}`}>
      
      {/* PANEL 1: Atas (Mobile) / Kiri (Desktop) */}
      <div 
        className={`absolute top-0 left-0 w-full h-1/2 md:w-1/2 md:h-full bg-[#000000] transition-all duration-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)] overflow-hidden ${
          phase === "exiting" 
            ? "-translate-y-full md:translate-y-0 md:-translate-x-full blur-[12px] opacity-0" 
            : "translate-y-0 translate-x-0 blur-0 opacity-100"
        }`}
      >
        <div 
          className="absolute inset-0 opacity-[0.07]" 
          style={{ 
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}
        />
      </div>

      {/* PANEL 2: Bawah (Mobile) / Kanan (Desktop) */}
      <div 
        className={`absolute bottom-0 right-0 w-full h-1/2 md:w-1/2 md:h-full bg-[#000000] transition-all duration-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)] overflow-hidden ${
          phase === "exiting" 
            ? "translate-y-full md:translate-y-0 md:translate-x-full blur-[12px] opacity-0" 
            : "translate-y-0 translate-x-0 blur-0 opacity-100"
        }`}
      >
        <div 
          className="absolute inset-0 opacity-[0.07]" 
          style={{ 
            backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
          }}
        />
      </div>

      {/* WADAH TEKS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <AnimatePresence mode="wait">
          {phase === "loading" && (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(12px)" }} 
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`text-[40px] md:text-[64px] lg:text-[80px] font-black tracking-tighter text-center px-4 ${
                currentIndex === greetings.length - 1 
                  ? "text-[#ea580c] tracking-widest drop-shadow-md" 
                  : "text-[#FFFFFF]" 
              }`}
            >
              {greetings[currentIndex]}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}