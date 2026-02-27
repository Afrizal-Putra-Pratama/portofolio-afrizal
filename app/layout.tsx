import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../src/components/ThemeProvider";
import { LanguageProvider } from "../src/components/LanguageProvider"; // Tambahan baru

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afrizal | UI/UX Designer & Frontend Developer",
  description: "Portofolio profesional Afrizal. Merancang antarmuka digital yang intuitif dan mengembangkannya menjadi produk fungsional dengan performa tinggi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>  {/* Tambahan baru */}
            {children}
          </LanguageProvider> {/* Tambahan baru */}
        </ThemeProvider>
      </body>
    </html>
  );
}