"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Globe } from "lucide-react";
import { useLanguage } from "../LanguageProvider"; // Memanggil sistem bahasa

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  // Mengambil fungsi translate (t), status bahasa saat ini, dan fungsi pengubahnya
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-black dark:text-white tracking-tighter">
          Afrizal.
        </a>

        {/* Menu Navigasi Dinamis */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">{t.navbar.experience}</a>
          <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">{t.navbar.projects}</a>
          <a href="#tech-stack" className="hover:text-black dark:hover:text-white transition-colors">{t.navbar.tech}</a>
          <a href="#archive" className="hover:text-black dark:hover:text-white transition-colors">{t.navbar.archive}</a>
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          {mounted && (
            <>
              {/* Tombol Bahasa (ID / EN) */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Toggle Language"
              >
                <Globe className="w-3.5 h-3.5" />
                {language.toUpperCase()}
              </button>

              {/* Tombol Tema */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </>
          )}

          {/* Tombol Kontak Dinamis */}
          <a 
            href="mailto:afrizal@vps" 
            className="hidden sm:inline-block px-5 py-2 sm:px-6 sm:py-2.5 bg-black dark:bg-white text-white dark:text-black text-xs sm:text-sm font-semibold rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            {t.navbar.contact}
          </a>
        </div>
      </div>
    </motion.header>
  );
}