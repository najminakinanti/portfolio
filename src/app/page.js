"use client";
import PillNav from "../components/PillNav/PillNav";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ToolsSection from "@/components/ToolsSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const sections = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Tools", href: "#tools" },
    { label: "Project", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth text-[--color-black] font-rubik">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-[--color-background] z-20">
        <div className="container mx-auto flex justify-center">
          <PillNav
            items={sections}
            activeHref="#home"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="var(--color-background)"
            pillColor="var(--color-accent)"
            hoveredPillTextColor="var(--color-accent)"
            pillTextColor="var(--color-white)"
          />
        </div>
      </header>

      {/* Sections */}
      <main className="container mx-auto">
        <HomeSection />
        <AboutSection />
        <ToolsSection />
        <ProjectSection />
        <ContactSection />
      </main>
    </div>
  );
}
