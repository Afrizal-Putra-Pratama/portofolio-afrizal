"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Globe, Briefcase, LayoutGrid, Code2, Box, Menu, X } from "lucide-react"; 
import { useLanguage } from "../LanguageProvider";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false); // State baru untuk mendeteksi apakah sudah melewati Hero
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { theme, setTheme } = useTheme();
  const { t, language, toggleLanguage } = useLanguage();

  // Urutan navigasi: Studi Kasus, Pengalaman, Keahlian, Arsip
  const navLinks = [
    { id: "projects", name: t.navbar.projects, href: "#projects", icon: LayoutGrid },
    { id: "experience", name: t.navbar.experience, href: "#experience", icon: Briefcase },
    { id: "tech", name: t.navbar.tech, href: "#tech", icon: Code2 },
    { id: "archive", name: t.navbar.archive, href: "#archive", icon: Box },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      // 1. Deteksi scroll tipis untuk ubah header atas
      setIsScrolled(window.scrollY > 24);

      // 2. Deteksi apakah sudah melewati Hero (menggunakan 80% tinggi layar)
      // Ini membuat dock bawah muncul HANYA saat hero section mulai menghilang
      setIsPastHero(window.scrollY > window.innerHeight * 0.8);

      // 3. Deteksi Section Aktif
      const sections = ["projects", "experience", "tech", "archive"];
      let currentSection = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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

  // Mencegah scroll latar saat Hamburger terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* =========================================
          1. TOP HEADER (Desktop & Mobile)
          ========================================= */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 font-mono ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#F4F4F5]/90 dark:bg-[#111827]/90 backdrop-blur-md border-b-2 border-[#111827]/10 dark:border-[#FFFFFF]/10 py-3 md:py-4 shadow-sm" 
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          
                    {/* =========================================
              LOGO BRANDING 
              ========================================= */}
          <div className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300">
            
            {/* Gambar Logo */}
            <div className="relative w-8 h-8 md:w-10 md:h-10 border-[2px] border-[#111827] dark:border-[#FFFFFF] shadow-[2px_2px_0px_0px_#111827] dark:shadow-[2px_2px_0px_0px_#FFFFFF] overflow-hidden rounded-[4px]">
              <Image 
                src="/favicon.ico" // Sesuaikan dengan nama file Anda di folder public
                alt="Afrizal Logo" 
                fill
                sizes="(max-width: 768px) 32px, 40px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* DESKTOP NAV (Hidden di Mobile) */}
          <nav className="hidden md:flex gap-2 bg-[#FFFFFF]/50 dark:bg-[#111827]/50 backdrop-blur-md px-3 py-2 rounded-full border-2 border-[#111827]/10 dark:border-[#FFFFFF]/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`relative px-4 py-2 text-[14px] font-bold rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ea580c] uppercase tracking-wider ${
                    isActive 
                      ? "text-[#FFFFFF]" 
                      : "text-[#111827]/60 dark:text-[#FFFFFF]/60 hover:text-[#111827] dark:hover:text-[#FFFFFF] hover:bg-[#111827]/5 dark:hover:bg-[#FFFFFF]/10"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navIndicatorDesktop"
                      className="absolute inset-0 bg-[#ea580c] rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* DESKTOP ACTIONS (Hidden di Mobile) */}
          <div className="hidden md:flex items-center gap-3 z-50">
            {mounted && (
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 p-2.5 rounded-full bg-[#FFFFFF] dark:bg-[#111827] border-2 border-[#111827]/10 dark:border-[#FFFFFF]/10 text-[14px] font-bold hover:border-[#ea580c] dark:hover:border-[#ea580c] hover:text-[#ea580c] dark:hover:text-[#ea580c] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ea580c]"
                >
                  <Globe className="w-4 h-4" />
                  <span className="uppercase">{language}</span>
                </button>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2.5 rounded-full bg-[#FFFFFF] dark:bg-[#111827] border-2 border-[#111827]/10 dark:border-[#FFFFFF]/10 hover:border-[#ea580c] dark:hover:border-[#ea580c] hover:text-[#ea580c] dark:hover:text-[#ea580c] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ea580c]"
                >
                  {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>
            )}
            <a 
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="px-6 py-3 bg-[#ea580c] text-[#FFFFFF] text-[14px] font-bold rounded-full transition-all shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(17,24,39,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ea580c] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] uppercase tracking-widest"
            >
              {t.navbar.contact}
            </a>
          </div>

          {/* MOBILE HAMBURGER TOGGLE */}
          <button 
            className="md:hidden p-2 text-[#111827] dark:text-[#FFFFFF] z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ea580c] rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </motion.header>

      {/* =========================================
          2. MOBILE HAMBURGER MENU (Hanya Tema, Bahasa, CTA)
          ========================================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            // Dibuat height auto (tidak perlu full screen) karena isinya sedikit
            className="fixed top-0 left-0 right-0 z-[90] bg-[#F4F4F5] dark:bg-[#111827] pt-24 pb-8 px-6 flex flex-col md:hidden font-mono border-b-2 border-[#111827]/10 dark:border-[#FFFFFF]/10 shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {/* Bahasa & Tema */}
              <div className="flex gap-4">
                <button
                  onClick={toggleLanguage}
                  className="flex-1 flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#111827] border-2 border-[#111827]/10 dark:border-[#FFFFFF]/10 text-[14px] font-bold hover:border-[#ea580c] dark:hover:border-[#ea580c] transition-colors text-[#111827] dark:text-[#FFFFFF]"
                >
                  <Globe className="w-5 h-5" />
                  <span className="uppercase">{language === 'id' ? 'ID' : 'EN'}</span>
                </button>

                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex-1 flex items-center justify-center gap-2 p-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#111827] border-2 border-[#111827]/10 dark:border-[#FFFFFF]/10 hover:border-[#ea580c] dark:hover:border-[#ea580c] transition-colors text-[#111827] dark:text-[#FFFFFF]"
                >
                  {theme === "dark" ? (
                    <><Sun className="w-5 h-5" /><span className="font-bold text-[14px]">LIGHT</span></>
                  ) : (
                    <><Moon className="w-5 h-5" /><span className="font-bold text-[14px]">DARK</span></>
                  )}
                </button>
              </div>

              {/* CTA */}
              <a 
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="flex items-center justify-center w-full py-4 mt-2 bg-[#ea580c] text-[#FFFFFF] text-[16px] font-black rounded-full transition-all shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(17,24,39,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] uppercase tracking-widest"
              >
                {t.navbar.contact}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          3. MOBILE BOTTOM DOCK (Navigasi Utama)
          ========================================= */}
      <AnimatePresence>
        {/* Hanya render jika di Mobile (md:hidden) DAN user sudah scroll melewati Hero (isPastHero) */}
        {isPastHero && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-max pointer-events-none font-mono"
          >
            <div className="pointer-events-auto flex items-center gap-2 p-2 bg-[#F4F4F5]/90 dark:bg-[#111827]/90 backdrop-blur-xl border-2 border-[#111827]/10 dark:border-[#FFFFFF]/10 rounded-full shadow-lg">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`relative flex items-center justify-center gap-2 p-3 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ea580c] ${
                      isActive 
                        ? "text-[#FFFFFF]" 
                        : "text-[#111827]/60 dark:text-[#FFFFFF]/60 hover:text-[#ea580c] dark:hover:text-[#ea580c]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navIndicatorMobile"
                        className="absolute inset-0 bg-[#ea580c] rounded-full shadow-sm"
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        style={{ zIndex: -1 }}
                      />
                    )}
                    <link.icon className={`w-5 h-5 relative z-10 transition-transform ${isActive ? "scale-110" : ""}`} />
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: "auto", opacity: 1 }}
                          exit={{ width: 0, opacity: 0 }}
                          className="text-[12px] font-bold whitespace-nowrap overflow-hidden relative z-10 uppercase tracking-widest"
                        >
                          {link.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}