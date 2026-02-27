import Navbar from "../src/components/sections/Navbar";
import Hero from "../src/components/sections/Hero";
import Experience from "../src/components/sections/Experience";
import Projects from "../src/components/sections/Projects";
import TechStack from "../src/components/sections/TechStack";
import Archive from "../src/components/sections/Archive";
import Footer from "../src/components/sections/Footer";
import Accessibility from "../src/components/sections/Accessibility";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] dark:bg-black text-zinc-900 dark:text-white selection:bg-blue-100 dark:selection:bg-zinc-800 font-sans relative transition-colors duration-500">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <TechStack />
      <Archive />
      <Footer />
      <Accessibility />
    </main>
  );
}