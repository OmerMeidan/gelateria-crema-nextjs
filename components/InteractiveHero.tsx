'use client';
import { motion } from 'framer-motion';

export default function InteractiveHero() {
  return (
    <section className="relative h-screen w-full bg-gradient-to-br from-[#2a2016] to-[#3e3020] text-white flex items-center justify-center overflow-hidden pt-[60px] font-montserrat" id="top">
      
      {/* מעגלי רקע עם אנימציית ריחוף עדינה */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full border border-white/5 pointer-events-none w-[500px] h-[500px] md:w-[800px] md:h-[800px] -top-[100px] -right-[100px]" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute rounded-full border border-white/5 pointer-events-none w-[600px] h-[600px] md:w-[900px] md:h-[900px] -bottom-[200px] -left-[200px]" 
      />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-center z-10 p-8"
      >
        <div className="text-[0.85rem] md:text-base tracking-[3px] text-[#b89f78] mb-6 font-light">מ-1987 · רחוב יפו 113 ירושלים</div>
        <h1 className="font-serif text-6xl md:text-8xl font-normal text-[#e3dccf] m-0 leading-tight" dir="ltr">Gelateria</h1>
        <h2 className="font-serif text-7xl md:text-[5.5rem] italic text-[#bfa172] m-0 leading-tight" dir="ltr">Crema</h2>
        <p className="text-lg md:text-2xl tracking-[1.5px] text-[#a8947e] mt-8 mb-10 font-light" dir="ltr">Artigianalità autentica</p>
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block px-9 py-3 bg-transparent text-[#e3dccf] border border-[#e3dccf]/40 text-base tracking-[0.1em] transition-all duration-400 hover:bg-[#e3dccf] hover:text-[#2a2016] hover:border-[#e3dccf] hover:scale-105 backdrop-blur-[5px] font-sans"
        >
          הסיפור שלנו
        </a>
      </motion.div>
    </section>
  );
}