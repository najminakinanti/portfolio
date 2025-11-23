import Image from "next/image";
import ScrollReveal from "./Reveal";

const tools = [
  { name: "Flutter", src: "/tech-stack/flutter-logo.svg" },
  { name: "Dart", src: "/tech-stack/dart-logo.svg" },
  { name: "HTML", src: "/tech-stack/html-logo.svg" },
  { name: "CSS", src: "/tech-stack/css-logo.svg" },
  { name: "Tailwind CSS", src: "/tech-stack/tailwind-logo.svg" },
  { name: "Bootstrap", src: "/tech-stack/bootstrap-logo.svg" },
  { name: "Laravel", src: "/tech-stack/laravel-logo.svg" },
  { name: "Next.js", src: "/tech-stack/next-logo.svg" },
  { name: "Vue.js", src: "/tech-stack/vue-logo.svg" },
  { name: "MySQL", src: "/tech-stack/mysql-logo.svg" },
];
export default function ToolsSection() {
  return (
    <section
      id="tools"
      className="min-h-screen flex flex-col justify-center items-center bg-[var(--color-primary)] text-black py-16"
    >
      <header className="text-center mb-12">
        <ScrollReveal animation="fade-up" once={false}>
        <div className="flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-extrabold">My Tech Stack🔨</h1>
        </div>
        </ScrollReveal>
      </header>

      <section className="w-full max-w-6xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8 items-start">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-110"
            >
              <div className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center mb-4 transform ">
                <Image
                  src={tool.src}
                  alt={tool.name}
                  width={96}
                  height={96}
                  className="object-contain"
                  priority={false}
                />
              </div>
              <p className="text-sm md:text-xl text-white font-semibold">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </section>  
    </section>
  );
}
