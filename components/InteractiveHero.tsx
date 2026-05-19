'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function InteractiveHero() {
  // שואבים את נתוני הגלילה של המשתמש
  const { scrollY } = useScroll();
  
  // מגדירים את מהירויות התנועה (Parallax) בדיוק כמו בקוד המקורי שלך!
  const y1 = useTransform(scrollY, [0, 1000], [0, 500]); // מהירות 0.5
  const y2 = useTransform(scrollY, [0, 1000], [0, 200]); // מהירות 0.2
  const y3 = useTransform(scrollY, [0, 1000], [0, 700]); // מהירות 0.7
  
  // האפקט של הטקסט ששוקע ונעלם כשגוללים למטה
  const contentY = useTransform(scrollY, [0, 1000], [0, 300]);
  const contentOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative h-screen w-full bg-gradient-to-br from-[#2a2016] to-[#3e3020] text-white flex items-center justify-center overflow-hidden pt-[60px] font-montserrat" id="top">
      
      {/* מעגל 1 - ימין למעלה (חזר לזהב המקורי ולמידות המקוריות) */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute rounded-full border border-[#ffd796]/5 pointer-events-none w-[500px] h-[500px] md:w-[800px] md:h-[800px] -top-[150px] -right-[100px]" 
      />
      
      {/* מעגל 2 - שמאל למטה */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute rounded-full border border-[#ffd796]/5 pointer-events-none w-[600px] h-[600px] md:w-[900px] md:h-[900px] -bottom-[300px] -left-[200px]" 
      />

      {/* מעגל 3 - ימין אמצע (המעגל שחסר קודם!) */}
      <motion.div 
        style={{ y: y3 }}
        className="absolute rounded-full border border-[#ffd796]/5 pointer-events-none w-[300px] h-[300px] md:w-[450px] md:h-[450px] top-[50px] right-[15%]" 
      />

      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="text-center z-10 p-8"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="text-[0.85rem] md:text-base tracking-[3px] text-[#b89f78] mb-6 font-light"
        >
        רחוב יפו 113 ירושלים
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-6xl md:text-8xl font-normal text-[#e3dccf] m-0 leading-[1.1]" dir="ltr"
        >
          Gelateria
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
          className="font-serif text-7xl md:text-[5.5rem] italic text-[#bfa172] m-0 leading-[1.1]" dir="ltr"
        >
          Crema
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.6 }}
          className="text-lg md:text-2xl tracking-[1.5px] text-[#a8947e] mt-8 mb-10 font-light" dir="ltr"
        >
          Artigianalità autentica
        </motion.p>
        
        <motion.a 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.8 }}
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-block px-9 py-3 bg-transparent text-[#e3dccf] border border-[#e3dccf]/40 text-base tracking-[0.1em] transition-all duration-400 hover:bg-[#e3dccf] hover:text-[#2a2016] hover:border-[#e3dccf] hover:scale-105 backdrop-blur-[5px] font-sans"
        >
          הסיפור שלנו
        </motion.a>
      </motion.div>
    </section>
  );
}
