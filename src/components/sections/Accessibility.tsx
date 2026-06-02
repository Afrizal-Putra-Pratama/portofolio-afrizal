"use client";

import React, { useState, useEffect } from "react";
import { Accessibility as AccessibilityIcon, X, Contrast, ImageOff, Link, RefreshCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Accessibility() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  
  // State baru untuk mendeteksi apakah layar sedang diam (idle)
  const [isVisible, setIsVisible] = useState(true);

  // Efek untuk memantau scroll
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      // Saat pengguna mulai scroll, sembunyikan tombol dan tutup menu jika sedang terbuka
      setIsVisible(false);
      if (isOpen) setIsOpen(false);

      // Reset timer setiap kali ada pergerakan scroll
      clearTimeout(timeoutId);

      // Jika tidak ada pergerakan scroll selama 400ms, anggap layar diam (idle) lalu munculkan lagi
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 400); 
    };

    window.addEventListener("scroll", handleScroll);

    // Bersihkan event listener saat komponen dilepas
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isOpen]);

  const toggleFeature = (feature: string) => {
    if (activeFeature === feature) {
      setActiveFeature(null); 
    } else {
      setActiveFeature(feature); 
    }
  };

  const resetAll = () => {
    setActiveFeature(null);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          ${activeFeature === 'invert' ? `
            html { filter: invert(100%) hue-rotate(180deg); background-color: white; }
            img, video { filter: invert(100%) hue-rotate(180deg); } 
          ` : ''}
          
          ${activeFeature === 'grayscale' ? `
            html { filter: grayscale(100%); }
          ` : ''}
          
          ${activeFeature === 'highlight' ? `
            a, button, [role="button"] {
              background-color: #ea580c !important; 
              color: #FFFFFF !important;
              outline: 3px solid #111827 !important; 
              outline-offset: 2px !important;
              transition: none !important;
            }
          ` : ''}
        `
      }} />

      {/* 
        Pembungkus utama sekarang menggunakan motion.div untuk animasi masuk/keluar
        Berdasarkan state isVisible 
      */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-28 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end font-mono"
          >
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-[4.5rem] md:bottom-[5rem] right-0 w-[280px] md:w-[320px] bg-[#FFFFFF] dark:bg-[#111827] border-[3px] border-[#111827] dark:border-[#FFFFFF] rounded-[8px] shadow-[6px_6px_0px_0px_#ea580c] p-5 mb-2"
                >
                  <div className="flex justify-between items-center mb-5 border-b-[3px] border-[#111827] dark:border-[#FFFFFF] pb-3">
                    <h3 className="text-[#111827] dark:text-[#FFFFFF] font-black text-[14px] md:text-[16px] uppercase tracking-widest flex items-center gap-2">
                      <AccessibilityIcon className="w-5 h-5 text-[#ea580c]" /> AKSESIBILITAS
                    </h3>
                    <button 
                      onClick={() => setIsOpen(false)} 
                      className="w-8 h-8 flex items-center justify-center bg-[#F4F4F5] dark:bg-[#000000] border-[2px] border-[#111827] dark:border-[#FFFFFF] rounded-[4px] text-[#111827] dark:text-[#FFFFFF] hover:bg-[#ea580c] hover:text-[#FFFFFF] transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    <button 
                      onClick={() => toggleFeature('invert')}
                      className={`w-full flex items-center justify-between p-3 border-[2px] rounded-[6px] text-[12px] md:text-[14px] font-bold uppercase tracking-wide transition-all ${
                        activeFeature === 'invert' 
                          ? 'bg-[#ea580c] border-[#111827] dark:border-[#FFFFFF] text-[#FFFFFF] shadow-[3px_3px_0px_0px_#111827] dark:shadow-[3px_3px_0px_0px_#FFFFFF] translate-y-[-2px]' 
                          : 'bg-[#F4F4F5] dark:bg-[#000000] border-[#111827]/20 dark:border-[#FFFFFF]/20 text-[#111827] dark:text-[#FFFFFF] hover:border-[#111827] dark:hover:border-[#FFFFFF]'
                      }`}
                    >
                      <span className="flex items-center gap-3"><Contrast className="w-4 h-4" /> BALIKKAN WARNA</span>
                      {activeFeature === 'invert' && <span className="text-[10px] bg-[#111827] text-[#FFFFFF] px-2 py-1 rounded-[4px]">AKTIF</span>}
                    </button>

                    <button 
                      onClick={() => toggleFeature('grayscale')}
                      className={`w-full flex items-center justify-between p-3 border-[2px] rounded-[6px] text-[12px] md:text-[14px] font-bold uppercase tracking-wide transition-all ${
                        activeFeature === 'grayscale' 
                          ? 'bg-[#ea580c] border-[#111827] dark:border-[#FFFFFF] text-[#FFFFFF] shadow-[3px_3px_0px_0px_#111827] dark:shadow-[3px_3px_0px_0px_#FFFFFF] translate-y-[-2px]' 
                          : 'bg-[#F4F4F5] dark:bg-[#000000] border-[#111827]/20 dark:border-[#FFFFFF]/20 text-[#111827] dark:text-[#FFFFFF] hover:border-[#111827] dark:hover:border-[#FFFFFF]'
                      }`}
                    >
                      <span className="flex items-center gap-3"><ImageOff className="w-4 h-4" /> MODE ABU-ABU</span>
                      {activeFeature === 'grayscale' && <span className="text-[10px] bg-[#111827] text-[#FFFFFF] px-2 py-1 rounded-[4px]">AKTIF</span>}
                    </button>

                    <button 
                      onClick={() => toggleFeature('highlight')}
                      className={`w-full flex items-center justify-between p-3 border-[2px] rounded-[6px] text-[12px] md:text-[14px] font-bold uppercase tracking-wide transition-all ${
                        activeFeature === 'highlight' 
                          ? 'bg-[#ea580c] border-[#111827] dark:border-[#FFFFFF] text-[#FFFFFF] shadow-[3px_3px_0px_0px_#111827] dark:shadow-[3px_3px_0px_0px_#FFFFFF] translate-y-[-2px]' 
                          : 'bg-[#F4F4F5] dark:bg-[#000000] border-[#111827]/20 dark:border-[#FFFFFF]/20 text-[#111827] dark:text-[#FFFFFF] hover:border-[#111827] dark:hover:border-[#FFFFFF]'
                      }`}
                    >
                      <span className="flex items-center gap-3"><Link className="w-4 h-4" /> SOROT TAUTAN</span>
                      {activeFeature === 'highlight' && <span className="text-[10px] bg-[#111827] text-[#FFFFFF] px-2 py-1 rounded-[4px]">AKTIF</span>}
                    </button>
                  </div>

                  <button 
                    onClick={resetAll}
                    disabled={activeFeature === null}
                    className={`w-full mt-5 flex items-center justify-center gap-2 p-3 border-[2px] rounded-[6px] text-[12px] font-black uppercase tracking-widest transition-all ${
                      activeFeature === null 
                        ? 'border-[#111827]/10 dark:border-[#FFFFFF]/10 text-[#111827]/30 dark:text-[#FFFFFF]/30 cursor-not-allowed' 
                        : 'border-[#111827] dark:border-[#FFFFFF] bg-[#FFFFFF] dark:bg-[#111827] text-[#111827] dark:text-[#FFFFFF] hover:bg-[#ef4444] hover:text-[#FFFFFF] hover:border-[#ef4444] shadow-[3px_3px_0px_0px_#111827] dark:shadow-[3px_3px_0px_0px_#FFFFFF] translate-y-[-2px]'
                    }`}
                  >
                    <RefreshCcw className="w-4 h-4" /> RESET PENGATURAN
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-12 h-12 md:w-14 md:h-14 bg-[#ea580c] text-[#FFFFFF] border-[3px] border-[#111827] dark:border-[#FFFFFF] rounded-[8px] flex items-center justify-center shadow-[4px_4px_0px_0px_#111827] dark:shadow-[4px_4px_0px_0px_#FFFFFF] hover:translate-y-[-4px] hover:shadow-[6px_6px_0px_0px_#111827] dark:hover:shadow-[6px_6px_0px_0px_#FFFFFF] transition-all active:translate-y-[2px] active:shadow-none ${isOpen ? 'translate-y-[-2px] shadow-[6px_6px_0px_0px_#111827] dark:shadow-[6px_6px_0px_0px_#FFFFFF]' : ''}`}
              aria-label="Menu Aksesibilitas"
            >
              <AccessibilityIcon className="w-6 h-6 md:w-7 md:h-7" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}