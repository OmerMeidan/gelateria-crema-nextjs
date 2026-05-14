'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // ריצה ראשונית למקרה שרעננו באמצע העמוד
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#" className="logo english-logo" onClick={(e) => scrollToSection(e, 'top')}>
        gelateria crema
      </a>
      <nav>
        <ul>
          <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>הסיפור שלנו</a></li>
          <li><a href="#flavors" onClick={(e) => scrollToSection(e, 'flavors')}>הטעמים שלנו</a></li>
          <li><a href="#info" onClick={(e) => scrollToSection(e, 'info')}>צרו קשר</a></li>
        </ul>
      </nav>
    </header>
  );
}