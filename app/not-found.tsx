"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { useLanguage } from "../src/components/LanguageProvider";

export default function NotFound() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const textDx = useSpring(mouseX, { stiffness: 200 });
  const textDy = useSpring(mouseY, { stiffness: 200 });

  // Random dibuat sekali
  const particles = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      // eslint-disable-next-line react-hooks/purity
      x: Math.random() * 100 + "%",
      // eslint-disable-next-line react-hooks/purity
      y: Math.random() * 100 + "%",
      // eslint-disable-next-line react-hooks/purity
      opacity: Math.random(),
      // eslint-disable-next-line react-hooks/purity
      duration: Math.random() * 10 + 10,
      // eslint-disable-next-line react-hooks/purity
      delay: Math.random() * 5,
    }));
  }, []);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 25;
      const y = (e.clientY - window.innerHeight / 2) / 25;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-black overflow-hidden flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-16">

      {/* Latar Belakang Partikel */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full"
            initial={{ x: p.x, y: p.y, opacity: p.opacity }}
            animate={{ y: ["-10%", "110%"], opacity: [0, 1, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-[90vw] sm:max-w-xl">

        {/* 404 */}
        <motion.div style={{ x: dx, y: dy }} className="relative">
          <h1 className="text-[9rem] sm:text-[12rem] md:text-[20rem] font-black text-zinc-100 dark:text-zinc-900 leading-none select-none">
            404
          </h1>

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ x: textDx, y: textDy }}
          >
            <span className="text-xl sm:text-2xl md:text-4xl font-bold text-red-600 dark:text-red-500 tracking-tight">
              {language === "id" ? "Kamu Tersesat" : "You're Lost"}
            </span>
          </motion.div>
        </motion.div>

        {/* Deskripsi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 sm:mt-8 w-full"
        >
          <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base mb-8 sm:mb-10 leading-relaxed">
            {language === "id"
              ? "Halaman yang kamu cari mungkin telah dihapus, berganti nama, atau sedang bersembunyi di dimensi lain."
              : "The page you're looking for might have been removed, had its name changed, or is hiding in another dimension."}
          </p>

          {/* Navigasi */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full">
            <Link
              href="/"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-xl shadow-zinc-500/10"
            >
              <Home className="w-4 h-4" />
              {language === "id" ? "Kembali ke Beranda" : "Back to Home"}
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-4 bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full font-bold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === "id" ? "Sebelumnya" : "Go Back"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}