'use client';
import { useEffect, useRef } from 'react';

export default function InteractiveHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const c1Ref = useRef<HTMLDivElement>(null);
  const c2Ref = useRef<HTMLDivElement>(null);
  const c3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        if (heroRef.current) {
          heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
          heroRef.current.style.opacity = `${1 - scrollY / 600}`;
        }
        if (c1Ref.current) c1Ref.current.style.transform = `translateY(${scrollY * 0.5}px)`;
        if (c2Ref.current) c2Ref.current.style.transform = `translateY(${scrollY * 0.2}px)`;
        if (c3Ref.current) c3Ref.current.style.transform = `translateY(${scrollY * 0.7}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section" id="top">
      <div ref={c1Ref} className="circle circle-1"></div>
      <div ref={c2Ref} className="circle circle-2"></div>
      <div ref={c3Ref} className="circle circle-3"></div>

      <div ref={heroRef} className="hero-content">
        <div className="location">מ-1987 · רחוב יפו 113 ירושלים</div>
        <div className="title-main" dir="ltr">Gelateria</div>
        <div className="title-italic" dir="ltr">Crema</div>
        <div className="description" dir="ltr">Artigianalità autentica</div>
        <a 
          href="#about" 
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          הסיפור שלנו
        </a>
      </div>
    </section>
  );
}