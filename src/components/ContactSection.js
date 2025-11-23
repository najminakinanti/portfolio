import { useState } from "react";
import ScrollReveal from "./Reveal";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [gitOpen, setGitOpen] = useState(false);
  const email = "najminakinantiputri@mail.ugm.ac.id";
  const whatsapp = "6282122140493";

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error("Gagal menyalin email:", e);
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-[var(--color-primary)] text-white py-16"
    >
      <div className="w-full max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <ScrollReveal animation="fade-up" once={false}>
          <h1 className="text-4xl font-bold mb-6">📥 Contact Me!</h1>
        </ScrollReveal>

        <p className="text-lg mx-auto w-full max-w-3xl">
          I love connecting with people who share the same passion for growth and creativity. Whether you want to discuss ideas, explore collaboration, or just say hi, my inbox is always open.
        </p>

        <div className="flex flex-col gap-2 items-center text-sm text-zinc-300 mt-8 mb-6">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin" aria-hidden="true">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Yogyakarta, Indonesia</span>
          </div>

          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap" aria-hidden="true">
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
              <path d="M22 10v6"></path>
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
            </svg>
            <span>Universitas Gadjah Mada – Software Engineering</span>
          </div>
        </div>

        {/* Email + Copy */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 w-full">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-3 px-6 h-12 rounded-lg bg-[var(--color-accent)]/50 hover:bg-[var(--color-accent)] focus:ring-2 focus:ring-white shadow-sm transition text-white w-auto mx-auto sm:mx-0"
            aria-label="Send Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail" aria-hidden="true">
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg>
            <span className="text-white font-medium">Send Email</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-3 px-6 h-12 rounded-lg border border-zinc-700 bg-[#111827]/50 hover:bg-zinc-900 transition text-white w-auto mx-auto sm:mx-0"
            aria-label="Copy Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 4h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect x="8" y="2" width="8" height="4" rx="1"></rect>
            </svg>
            <span className="font-medium">{copied ? "Copied!" : "Copy Email"}</span>
          </button>
        </div>

        {/* WhatsApp, LinkedIn, GitHub*/}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-4 h-12 rounded-md bg-green-600/70 hover:bg-green-700 transition text-white shadow"
            aria-label="Chat via WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12 .5 11.5 11.5 0 0 0 .5 12c0 2.08.55 4.11 1.6 5.9L.5 23.5l5.8-1.55A11.5 11.5 0 0 0 12 23.5c6.34 0 11.5-5.16 11.5-11.5 0-3.08-1.2-5.94-3.98-8.52zM12 21c-1.95 0-3.86-.52-5.5-1.5l-.4-.25-3.45.95.94-3.37-.27-.42A9.5 9.5 0 1 1 21.5 12 9.45 9.45 0 0 1 12 21z" />
              <path d="M17.6 14.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1-.2.2-.7.7-.9.9-.2.2-.4.2-.7.1-.6-.2-1.7-.6-2.8-1.7-1.1-1.1-1.5-2.2-1.7-2.8 0-.3 0-.5.1-.7.1-.2.6-.7.9-.9.2-.1.3-.4.1-.6-.1-.2-.6-1.2-.7-1.4-.1-.2-.4-.3-.6-.3H8c-.2 0-.5 0-.8.3-.3.3-1 1-1 2.4 0 1.4 1 3 1.1 3.2.1.2 1.8 3 4.7 4.2 3 .9 3.1.7 3.7.7.6 0 1.6-.6 1.8-1.1.2-.4.2-.8.1-1 .1-.1.2-.6.2-.7 0-.1-.1-.2-.3-.3z" />
            </svg>
            <span className="font-medium">WhatsApp</span>
          </a>

          <a
            href="https://www.linkedin.com/in/najminakinanti"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-4 h-12 rounded-md bg-blue-500/50 hover:bg-blue-600 transition text-white shadow"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.5 17.5v-7h-2v7h2zm-1-8.1a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zM18 17.5v-3.8c0-2.2-1.2-3.2-2.6-3.2-1.2 0-1.8.7-2.1 1.2v-1h-2v7h2v-3.8c0-1.1.4-1.9 1.5-1.9 1 0 1.1 1 1.1 1.9v3.8h2z" />
            </svg>
            <span className="font-medium">LinkedIn</span>
          </a>

          <div className="relative">
            <button
              onClick={() => setGitOpen((s) => !s)}
              className="inline-flex items-center gap-3 px-4 h-12 rounded-md bg-zinc-800/50 hover:bg-zinc-700 transition text-white shadow"
              aria-haspopup="true"
              aria-expanded={gitOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.73.5.5 5.73.5 12.02c0 5.11 3.29 9.45 7.86 10.98.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.97-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.56-.29-5.26-1.28-5.26-5.71 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .98-.31 3.2 1.18a11.12 11.12 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.21-1.49 3.19-1.18 3.19-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.83 1.18 3.09 0 4.44-2.71 5.41-5.29 5.69.41.35.77 1.04.77 2.1 0 1.52-.01 2.75-.01 3.12 0 .3.21.66.79.55A10.54 10.54 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
              <span className="font-medium">GitHub</span>
              <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M6 8l4 4 4-4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {gitOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded-md shadow-lg z-20">
                <a href="https://github.com/najminaak" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">GitHub (Personal)</a>
                <a href="https://github.com/najminakinanti" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100">GitHub (Work)</a>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
