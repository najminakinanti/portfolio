"use client";

import React, { useEffect, useState } from "react";
import Stack from "./Stack/Stack";
import ScrollReveal from "./Reveal";

export default function HomeSection() {
  const [isClient, setIsClient] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 350, height: 350 });

  useEffect(() => {
    setIsClient(true);

    function updateDimensions() {
      const w = window.innerWidth;
      if (w < 640) setCardDimensions({ width: 200, height: 200 });
      else if (w < 1024) setCardDimensions({ width: 300, height: 300 });
      else setCardDimensions({ width: 350, height: 350 });
    }

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const marqueeText = "WEB DEVELOPER - MOBILE DEVELOPER - ";
  const fullTextContent = marqueeText.repeat(5);

  return (
    <section 
      id="home"
      className="grid grid-cols-12 gap-4 md:gap-2 bg-grid-pattern px-6 md:px-12 lg:px-48 py-12 relative overflow-hidden md:min-h-screen"
    >
      {/* Right Section */}
      <div className="col-span-12 md:col-span-5 flex justify-center items-center order-1 md:order-2 mt-20 md:mt-0">
        <ScrollReveal animation="fade-up" delay={2} once={false}>
          {isClient && (
            <div style={{ maxWidth: `${cardDimensions.width}px` }}>
              <Stack
                randomRotation
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={cardDimensions}
                cardsData={[
                  { id: 1, img: "my-photo/me-1.jpg" },
                  { id: 2, img: "my-photo/me-2.jpg" }
                ]}
                orderById="asc"
              />
            </div>
          )}
        </ScrollReveal>
      </div>

      {/* Left Section */}
      <div className="col-span-12 md:col-span-7 flex flex-col items-start justify-center order-2 mr-12 md:order-1">
        <ScrollReveal animation="fade-up" once={false}>
          <h1 className="text-3xl md:text-7xl font-extrabold mb-4 text-[var(--color-primary)]">
            Hi,<br />I'm Anti!
          </h1>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" once={false}>
          <h3 className="text-[var(--color-accent)] text-base md:text-4xl font-extrabold mb-6">
            Software Engineer Student
          </h3>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" once={false}>
          <a
            href="/cv/NajminaKinanti-cv.pdf"
            download
            className="w-full md:w-auto inline-flex items-center justify-center border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold py-3 px-6 rounded-full bg-transparent hover:bg-[var(--color-primary)] hover:text-[var(--color-background)] transition-colors duration-300 mb-20 md:mb-0"
          >
            Download Resume
          </a>
        </ScrollReveal>
      </div>
      
      {/* Marquee */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap py-2 bg-[var(--color-primary)]">
        <div className="flex animate-marquee">
          <span className="text-xl md:text-2xl font-bold text-white uppercase flex-shrink-0">
            {fullTextContent}
          </span>
          <span className="text-xl md:text-2xl font-bold text-white uppercase flex-shrink-0">
            {fullTextContent}
          </span>
        </div>
      </div>
    </section>
  );
}