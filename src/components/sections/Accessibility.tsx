"use client";

import React, { useState } from "react";
import { Accessibility as AccessibilityIcon, X, Contrast, ImageOff, Link, RefreshCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Accessibility() {
  const [isOpen, setIsOpen] = useState(false);
  // State ini hanya menyimpan SATU fitur yang aktif. Jika null, berarti tidak ada yang aktif.
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  // Fungsi untuk mengganti fitur (hanya bisa 1 yang aktif)
  const toggleFeature = (feature: string) => {
    if (activeFeature === feature) {
      setActiveFeature(null); // Matikan jika diklik lagi
    } else {
      setActiveFeature(feature); // Aktifkan yang baru, matikan yang lama
    }
  };

  const resetAll = () => {
    setActiveFeature(null);
  };

  return (
    <>
      {/* INJEKSI CSS DINAMIS UNTUK AKSESIBILITAS */}
      <style dangerouslySetInnerHTML={{
        __html: `
          ${activeFeature === 'invert' ? `
            html { filter: invert(100%) hue-rotate(180deg); background-color: white; }
            img, video { filter: invert(100%) hue-rotate(180deg); } /* Kembalikan warna asli gambar */
          ` : ''}
          
          ${activeFeature === 'grayscale' ? `
            html { filter: grayscale(100%); }
          ` : ''}
          
          ${activeFeature === 'highlight' ? `
            a, button, [role="button"] {
              background-color: #fbbf24 !important; /* Kuning cerah */
              color: #000 !important;
              outline: 3px solid #b45309 !important; /* Border oranye gelap */
              outline-offset: 2px !important;
              transition: none !important;
            }
          ` : ''}
        `
      }} />

      <div className="fixed bottom-6 left-6 z-100">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-16 left-0 w-64 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl p-4 mb-2"
            >
              <div className="flex justify-between items-center mb-4 border-b border-zinc-800 pb-2">
                <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                  <AccessibilityIcon className="w-4 h-4" /> Aksesibilitas
                </h3>
                <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2">
                {/* Tombol Invert Color */}
                <button 
                  onClick={() => toggleFeature('invert')}
                  className={`w-full flex items-center justify-between p-2 rounded-lg text-sm transition-colors ${activeFeature === 'invert' ? 'bg-white text-black font-semibold' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}
                >
                  <span className="flex items-center gap-2"><Contrast className="w-4 h-4" /> Balikkan Warna</span>
                  {activeFeature === 'invert' && <span className="text-xs">Aktif</span>}
                </button>

                {/* Tombol Grayscale */}
                <button 
                  onClick={() => toggleFeature('grayscale')}
                  className={`w-full flex items-center justify-between p-2 rounded-lg text-sm transition-colors ${activeFeature === 'grayscale' ? 'bg-white text-black font-semibold' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}
                >
                  <span className="flex items-center gap-2"><ImageOff className="w-4 h-4" /> Mode Abu-abu</span>
                  {activeFeature === 'grayscale' && <span className="text-xs">Aktif</span>}
                </button>

                {/* Tombol Sorot Tautan */}
                <button 
                  onClick={() => toggleFeature('highlight')}
                  className={`w-full flex items-center justify-between p-2 rounded-lg text-sm transition-colors ${activeFeature === 'highlight' ? 'bg-white text-black font-semibold' : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}
                >
                  <span className="flex items-center gap-2"><Link className="w-4 h-4" /> Sorot Tautan</span>
                  {activeFeature === 'highlight' && <span className="text-xs">Aktif</span>}
                </button>
              </div>

              {/* Tombol Reset */}
              <button 
                onClick={resetAll}
                disabled={activeFeature === null}
                className={`w-full mt-4 flex items-center justify-center gap-2 p-2 rounded-lg text-xs transition-colors ${activeFeature === null ? 'text-zinc-600 cursor-not-allowed' : 'text-red-400 hover:bg-red-950/30'}`}
              >
                <RefreshCcw className="w-3 h-3" /> Reset Pengaturan
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tombol Trigger Utama */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          aria-label="Menu Aksesibilitas"
        >
          <AccessibilityIcon className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}