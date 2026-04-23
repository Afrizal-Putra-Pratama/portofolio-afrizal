import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Ini sudah pasti benar sesuai foto Anda

import { ThemeProvider } from "../src/components/ThemeProvider";
import { LanguageProvider } from "../src/components/LanguageProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afrizal | UI/UX Designer & Frontend Enthusiast",
  description: "Portofolio profesional Afrizal 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden bg-[#F8F9FA] dark:bg-black text-zinc-900 dark:text-zinc-50`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>  
            {children}
          </LanguageProvider> 
        </ThemeProvider>
      </body>
    </html>
  );
}