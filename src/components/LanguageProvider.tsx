"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionary, Language } from "../lib/dictionary";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: typeof dictionary.id; // Mengambil tipe dari bahasa Indonesia sebagai acuan
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");

  // Hanya mengambil preferensi bahasa dari peramban setelah komponen dimuat di klien
  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-lang") as Language;
    if (savedLang && (savedLang === "id" || savedLang === "en")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "id" ? "en" : "id";
    setLanguage(newLang);
    localStorage.setItem("portfolio-lang", newLang);
  };

  // Kunci Perbaikan: Provider kini SELALU membungkus children dalam kondisi apapun,
  // sehingga error "must be used within a LanguageProvider" tidak akan pernah terjadi.
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: dictionary[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook kustom untuk memanggil bahasa di komponen lain
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};