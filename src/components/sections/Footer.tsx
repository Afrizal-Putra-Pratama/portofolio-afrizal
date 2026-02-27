"use client"; // Diperlukan karena kita memanggil useLanguage (Client Component)

import React from "react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { useLanguage } from "../LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-4 border-t border-zinc-200 dark:border-zinc-900 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white tracking-tighter mb-2">Afrizal.</h2>
          <p className="text-sm text-zinc-500">{t.footer.description}</p>
        </div>
        
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-black hover:border-zinc-300 dark:hover:text-white dark:hover:border-zinc-600 transition-all">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-black hover:border-zinc-300 dark:hover:text-white dark:hover:border-zinc-600 transition-all">
            <Github className="w-4 h-4" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-black hover:border-zinc-300 dark:hover:text-white dark:hover:border-zinc-600 transition-all">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="mailto:afrizal@vps" className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-black hover:border-zinc-300 dark:hover:text-white dark:hover:border-zinc-600 transition-all">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-900/50 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 dark:text-zinc-600">
        <p>&copy; {new Date().getFullYear()} Afrizal. {t.footer.copyright}</p>
        <p className="mt-2 md:mt-0">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}