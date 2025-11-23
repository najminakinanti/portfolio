"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./Reveal";

export default function ProjectSection() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Website Portfolio",
      description:
        "A personal web portfolio showcasing profile, experience, and projects with a clean design, user-friendly interactions, and a fully responsive layout.",
      tags: ["Next.js", "Tailwind CSS"],
      github: "https://github.com/najminakinanti/portfolio.git",
      image: "/project/portfolio.svg",
    },
    {
      title: "PANDJI - Mobile Developer",
      description:
        "Built a mobile app for nationwide membership management, including registration, data verification, e-ID generation, UI implementation, API integration, and system integration with a web dashboard.",
      tags: ["Flutter", "Dart"],
      github: "https://github.com/amanata-dev/organization-mobile.git",
      image: "/project/pandji.svg",
    },
    {
      title: "FUNDation - Mobile Developer",
      description:
        "Developed the mobile section of an event sponsorship application, including UI implementation, API consumption, and workflow optimization.",
      tags: ["Flutter", "Dart"],
      github: "https://github.com/najminakinanti/fundation_pad.git",
      image: "/project/fundation.svg",
    },
    {
      title: "TEMPLOK - Front-End Developer",
      description:
        "Built the web interface for a UMKM directory platform with a responsive layout, clear navigation, and well-structured static data, focusing on clean UI/UX and smooth front-end experience.",
      tags: ["Vue.js", "Vite", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/thisisfairuz/templok-direktori-umkm.git",
      image: "/project/templok2.svg",
    },
    {
      title: "Hospital Inventory Integration – Backend Developer",
      description: "Developed backend services to ensure seamless interoperability between hospital operations and inventory management, including API development, data synchronization, and workflow automation.",
      tags: ["Laravel", "REST API", "Sanctum", "MySQL"],
      github: "https://github.com/najminakinanti/inventory_hospital_API.git",
      image: "/project/interoperability.svg",
    },
    {
      title: "Plantry",
      description:"Built a comprehensive meal planner with recipe, ingredient, and meal plan management, automated shopping list generation, Passport authentication, and Axios-based data exchange.",
      tags: ["Laravel", "Blade", "REST API"],
      github: "https://github.com/najminakinanti/meal-planner.git",
      image: "/project/plantry.svg",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="project"
      className="min-h-screen flex flex-col justify-center items-center bg-[var(--color-background)] text-black px-6 py-16"
    >
      <ScrollReveal animation="fade-up" once={false}>
        <h1 className="text-3xl md:text-5xl text-[var(--color-primary)] font-extrabold mb-12 text-center">
          🚀 Project
        </h1>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {visibleProjects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>

      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-10 px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg shadow-md hover:bg-[var(--color-accent)] transition font-semibold"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}
