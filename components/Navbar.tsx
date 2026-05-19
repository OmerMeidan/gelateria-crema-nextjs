'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full px-[5%] md:px-[8%] py-4 md:py-6 flex justify-between items-center z-50 transition-all duration-400 ${scrolled ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent'}`}>
      <a href="#" className={`font-serif italic tracking-[0.15em] lowercase text-xl font-medium transition-colors duration-400 ${scrolled ? 'text-[#1A1612]' : 'text-[#e3dccf]'}`}>
        gelateria crema
      </a>
      <nav className="hidden md:block">
        <ul className="flex gap-4 list-none m-0 p-0">
          {['הסיפור שלנו', 'הטעמים שלנו', 'צרו קשר'].map((item, i) => {
            const href = ['#about', '#flavors', '#info'][i];
            return (
              <li key={item}>
                <a
                  href={href}
                  className={`text-[0.95rem] tracking-[0.05em] font-semibold px-[22px] py-[10px] rounded-[30px] border border-transparent transition-all duration-300
                  ${scrolled 
                    ? 'text-[#1A1612] hover:bg-[#B08D57]/10 hover:text-[#B08D57]' 
                    : 'text-[#e3dccf] hover:bg-[#e3dccf]/15 hover:border-[#e3dccf]/40 hover:text-white hover:shadow-lg'
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}