"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Globe, Briefcase, LayoutGrid, Code2, Box } from "lucide-react"; 
import { useLanguage } from "../LanguageProvider";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const { theme, setTheme } = useTheme();
  const { t, language, toggleLanguage } = useLanguage();

  // Daftar Navigasi dilengkapi Icon untuk Mobile Dock
  const navLinks = [
    { id: "experience", name: t.navbar.experience, href: "#experience", icon: Briefcase },
    { id: "projects", name: t.navbar.projects, href: "#projects", icon: LayoutGrid },
    { id: "tech", name: t.navbar.tech, href: "#tech", icon: Code2 },
    { id: "archive", name: t.navbar.archive, href: "#archive", icon: Box },
  ];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Efek Scroll & Observer Section Aktif
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["experience", "projects", "tech", "archive"];
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Logika offset untuk menentukan section mana yang sedang dibaca
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* =========================================
          TOP HEADER (Berlaku untuk Mobile & Desktop)
          ========================================= */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled 
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 py-3 md:py-4 shadow-sm" 
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex justify-between items-center">
          
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} 
            className="flex items-center gap-2.5 group relative z-50"
          >
          
            {/* Teks Logo */}
            <span className="font-black text-zinc-900 dark:text-white text-lg md:text-xl tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              Afrizal.
            </span>
          </a>

          {/* =========================================
              NAVIGASI DESKTOP (Tersembunyi di Mobile)
              ========================================= */}
          <nav className="hidden md:flex gap-1 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                    isActive 
                      ? "text-black dark:text-white" 
                      : "text-zinc-500 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navIndicatorDesktop"
                      className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-full shadow-sm border border-zinc-200 dark:border-zinc-700"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* =========================================
              AKSI HEADER (Tema, Bahasa, Kontak)
              Berlaku untuk Desktop & Mobile (Diperkecil)
              ========================================= */}
          <div className="flex items-center gap-2 md:gap-3 relative z-50">
            {mounted && (
              <div className="flex items-center gap-1.5 md:gap-2">
                {/* Tombol Bahasa (Kecil di Mobile) */}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-1 px-2 py-1.5 md:px-3 md:py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] md:text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                  aria-label="Toggle Language"
                >
                  <Globe className="w-3 h-3 md:w-3.5 md:h-3.5" />
                  {language.toUpperCase()}
                </button>

                {/* Tombol Tema (Kecil di Mobile) */}
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-1.5 md:p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? <Sun className="w-3.5 h-3.5 md:w-4 md:h-4" /> : <Moon className="w-3.5 h-3.5 md:w-4 md:h-4" />}
                </button>
              </div>
            )}

            {/* Tombol Kontak (Tetap Muncul di Mobile, Tapi Lebih Kecil) */}
            <a 
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="px-3 py-1.5 md:px-6 md:py-2.5 bg-black dark:bg-white text-white dark:text-black text-[10px] md:text-sm font-bold rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
            >
              {t.navbar.contact}
            </a>
          </div>
        </div>
      </motion.header>

      {/* =========================================
          FLOATING BOTTOM DOCK (Khusus Mobile)
          Sangat Unik & Nyaman untuk Jempol
          ========================================= */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-max pointer-events-none">
        {/* Kontainer Blur */}
        <div className="pointer-events-auto flex items-center gap-1 p-1.5 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`relative flex items-center justify-center gap-2 px-3 py-2.5 rounded-full transition-all duration-300 ${
                  isActive 
                    ? "text-blue-600 dark:text-white" 
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"
                }`}
              >
                {/* Latar Belakang Aktif */}
                {isActive && (
                  <motion.div
                    layoutId="navIndicatorMobile"
                    className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-full shadow-sm border border-zinc-200 dark:border-zinc-700"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                
                {/* Ikon Menu */}
                <link.icon className={`w-4 h-4 transition-transform ${isActive ? "scale-110" : ""}`} />
                
                {/* Teks Menu (Hanya Muncul Jika Aktif - Efek Fluid Tab) */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "auto", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      className="text-[10px] font-bold whitespace-nowrap overflow-hidden tracking-wide"
                    >
                      {link.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}