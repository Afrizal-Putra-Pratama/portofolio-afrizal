"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowUpRight, MapPin } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="pt-10 pb-20 md:pt-16 md:pb-8 px-4 sm:px-6 lg:px-12 bg-[#F8F9FA] dark:bg-black transition-colors duration-300" id="contact">
      {/* Catatan: Padding bawah (pb-20) diatur lebih besar di mobile agar 
          konten footer tidak tertutup oleh Floating Bottom Dock Navigasi */}
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:gap-8">
        
        {/* =========================================
            BAGIAN 1: MASSIVE CTA CARD
            ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full rounded-[2rem] md:rounded-[3rem] bg-zinc-950 dark:bg-zinc-900 overflow-hidden flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 shadow-2xl z-10"
        >
          {/* Efek Lingkaran Cahaya (Glow) di latar belakang kartu */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-64 bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" />

          {/* Lencana Status "Available" */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-300 text-xs font-bold uppercase tracking-wider">
              {language === "id" ? "Siap untuk peluang baru" : "Available for new opportunities"}
            </span>
          </div>

          {/* Tipografi Raksasa */}
          <h2 className="text-5xl sm:text-7xl md:text-[8vw] font-black text-white leading-[0.9] tracking-tighter mb-6">
            {language === "id" ? "MARI BIKIN" : "LET'S BUILD"} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              {language === "id" ? "SESUATU." : "SOMETHING."}
            </span>
          </h2>

          <p className="text-zinc-400 text-sm md:text-lg max-w-xl mb-10">
            {t.footer.description}
          </p>

          {/* Tombol Email (Pill Besar) */}
          <a 
            href="mailto:afrizalputtra@gmail.com"
            className="group flex items-center gap-3 px-6 py-4 md:px-8 md:py-5 bg-blue-600 text-white rounded-full font-black text-sm md:text-base hover:bg-blue-500 transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.7)] hover:-translate-y-1"
          >
            afrizalputtra@gmail.com 
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-blue-600 transition-colors">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </a>
        </motion.div>

        {/* =========================================
            BAGIAN 2: MINIMALIST BASE
            Sosial Media, Lokasi, dan Signature Personal
            ========================================= */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-4 md:mt-6 px-4 md:px-8">
          
          {/* Kiri: Lokasi & Personal Signature (Pengganti Copyright) */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-zinc-500 dark:text-zinc-400 text-xs md:text-sm font-bold">
              <MapPin className="w-3.5 h-3.5" /> Surakarta, Indonesia
            </div>
            <p className="text-zinc-400 dark:text-zinc-500 text-[10px] md:text-xs font-medium">
              &copy; {new Date().getFullYear()} Afrizal. {language === "id" ? "Dirancang & dibangun dengan passion." : "Designed & built with passion."}
            </p>
          </div>

          {/* Kanan: Social Links (Elegan & Tipis) */}
          <div className="flex gap-2 md:gap-3">
            {[
              { icon: Linkedin, link: "#" },
              { icon: Github, link: "#" },
              { icon: Instagram, link: "#" },
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-blue-600 hover:border-blue-200 dark:hover:border-zinc-600 dark:hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <social.icon className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
}