"use client";
import { useEffect } from 'react';

export default function ScrollReveal({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  className = '',
  once = true
}) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else if (!once) {
            entry.target.classList.remove('show');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [once]);

  const delayClass = delay > 0 ? `delay-${delay}` : '';

  return (
    <div className={`reveal ${animation} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}