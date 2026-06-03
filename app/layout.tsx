import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css"; 
import Preloader from "@/src/components/Preloader";
import { ThemeProvider } from "../src/components/ThemeProvider";
import { LanguageProvider } from "../src/components/LanguageProvider";

const ibmPlexMono = IBM_Plex_Mono({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
});

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
      <body className={`${ibmPlexMono.className} overflow-x-hidden bg-[#FFFFFF] dark:bg-[#111827] text-[#111827] dark:text-[#FFFFFF]`}>
        <Preloader />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>  
            {/* Kembali menggunakan scroll bawaan browser yang natural */}
            {children}
          </LanguageProvider> 
        </ThemeProvider>
      </body>
    </html>
  );
}