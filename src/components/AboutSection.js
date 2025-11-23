import ScrollReveal from "./Reveal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-screen flex flex-col justify-center items-center bg-[var(--color-background)] text-black py-16"
    >
      <div className="pointer-events-none absolute top-0 -left-20 w-72 h-72 bg-[var(--color-accent)]/30 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 -right-20 w-80 h-80 bg-[var(--color-primary)]/20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-gradient-to-br from-[var(--color-accent)]/10 to-transparent rounded-full blur-[100px] opacity-60"></div>

      <div className="relative w-full max-w-3xl px-4 md:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" once={false}>
          <h1 className="text-3xl md:text-5xl text-[var(--color-primary)] font-extrabold mb-8 text-center mx-auto">
            🙇🏻‍♀️ About Me 🙇🏻‍♀️  
          </h1>
        </ScrollReveal>

        <div className="w-full max-w-2xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div className="p-4 rounded-lg bg-[var(--color-accent)]/60 border border-[var(--color-accent)]">
              <dt className="text-sm text-[var(--color-primary)]">📍Location</dt>
              <dd className="text-lg font-semibold text-[var(--color-primary)]">Yogyakarta, Indonesia</dd>
            </div>

            <div className="p-4 rounded-lg bg-[var(--color-accent)]/60 border border-[var(--color-accent)]">
              <dt className="text-sm text-[var(--color-primary)]">🎈Age</dt>
              <dd className="text-lg font-semibold text-[var(--color-primary)]">20 years old</dd>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-[var(--color-accent)]/60 border border-[var(--color-accent)]">
              <dt className="text-sm text-[var(--color-primary)]">🎓Education</dt>
              <dd className="text-lg font-semibold text-[var(--color-primary)]">Universitas Gadjah Mada</dd>
            </div>

            <div className="p-4 rounded-lg bg-[var(--color-accent)]/60 border border-[var(--color-accent)]">
              <dt className="text-sm text-[var(--color-primary)]">💻Current Study</dt>
              <dd className="text-lg font-semibold text-[var(--color-primary)]">Software Engineering</dd>
            </div>
          </div>

          <div className="mt-6">
            <p
              className="text-base leading-relaxed text-black text-justify"
              style={{ WebkitHyphens: "auto", hyphens: "auto" }}
            >
              I am an undergraduate student in Software Engineering Technology at Universitas Gadjah Mada with practical experience in full-stack web and mobile development. I work with HTML, CSS, JavaScript, PHP, Python, MySQL, Laravel, Vue.js, Next.js, Tailwind CSS, Bootstrap, and Flutter for mobile development. I’m also familiar with Git, GitHub, XAMPP, and Figma. I enjoy solving problems, adapting to new technologies, collaborating in teams, and continually improving my skills through academic and personal projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
