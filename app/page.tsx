'use client';
import Navbar from '../components/Navbar';
import InteractiveHero from '../components/InteractiveHero';
import { motion, Variants } from 'framer-motion';
import React, { useState } from 'react';
// מערך הטעמים עם צבעי הפסטל הדינמיים (יוקרה סנסורית)
const FLAVORS = [
  { id: 1, title: 'Pistacchio', desc: 'פיסטוק סיציליאני טהור, קלוי בעדינות ונטחן למחית עשירה שאין לה תחרות.', hoverBg: '#EAECE5' },
  { id: 2, title: 'Cioccolato', desc: 'שוקולד מריר ולרונה 70%, עוצמתי, נימוח וטבעוני לחלוטין.', hoverBg: '#C29582' },
  { id: 3, title: 'Nocciola', desc: 'אגוזי לוז מפיאמונטה, טעם אגוזי עמוק במרקם קטיפתי ממכר.', hoverBg: '#F7F3EB' },
  { id: 4, title: 'Fragola', desc: 'סורבה תותים טריים מהשדה, קליל, מרענן ומלא בויטמינים של קיץ.', hoverBg: '#FDF1F2' },
];

// הגדרת אנימציית הופעה חלקה ואלגנטית עם Type רשמי
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  const [activeFlavor, setActiveFlavor] = useState<number | null>(null);
  return (
    <>
      <Navbar />
      <main>
        <InteractiveHero />

        {/* --- אזור: הסיפור שלנו --- */}
        <motion.section 
          id="about" 
          className="py-[80px] md:py-[120px] px-[5%] md:px-[8%] max-w-[1400px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-center text-[2.2rem] mb-[4rem] font-light tracking-[0.05em]">
            <span className="block text-[0.8rem] uppercase text-accent mb-[10px] tracking-[0.3em] font-montserrat">LA STORIA</span>
            הסיפור שלנו
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] md:gap-[6rem] items-center">
            <div className="text-[1.15rem] font-light text-[#4A443F]">
              <p>ב-Gelateria Crema אנחנו לא רק מייצרים גלידה, אנחנו משמרים מסורת איטלקית עתיקת יומין בלב ירושלים. כל מנה מיוצרת בעבודת יד מידי בוקר, תוך שימוש בחומרי גלם שנבחרו בקפידה.</p>
              <br />
              <p>מהפיסטוקים של סיציליה ועד לווניל של מדגסקר, המטרה שלנו היא אחת: להגיש לכם את הג'לאטו המושלם, במרקם קטיפתי ובטעם שאי אפשר לשכוח.</p>
            </div>
            {/* אפקט זום וצבע נקי לתמונה */}
            <div className="overflow-hidden rounded-[4px] group">
              <img 
                src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800" 
                alt="Authentic Gelato" 
                className="w-full block grayscale-[20%] transition-all duration-[800ms] ease-out group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          </div>
        </motion.section>

        {/* --- אזור: הטעמים --- */}
        <section id="flavors" className="py-[80px] md:py-[120px] px-[5%] md:px-[8%] max-w-[1400px] mx-auto">
          <motion.h2 
            className="text-center text-[2.2rem] mb-[4rem] font-light tracking-[0.05em]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span className="block text-[0.8rem] uppercase text-accent mb-[10px] tracking-[0.3em] font-montserrat">I GUSTI</span>
            הקלאסיקות שלנו
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]">
  {FLAVORS.map((flavor, index) => (
    <motion.div
      key={flavor.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, delay: index * 0.15 } 
      }}
      viewport={{ once: true, margin: "-50px" }}
      
      // ווב (דסקטופ): ה-Hover המקורי והחלק שרצית
      whileHover={{ 
        backgroundColor: flavor.hoverBg, 
        y: -8, 
        borderColor: "#B08D57",
        transition: { duration: 0.3 }
      }}
      
      // מובייל: אנימציית פייד לצבע המקורי כשהכרטיסייה פעילה
      animate={
        activeFlavor === flavor.id
          ? { 
              backgroundColor: flavor.hoverBg, 
              y: -8, 
              borderColor: "#B08D57", 
              transition: { duration: 0.4, ease: "easeOut" } 
            }
          : { 
              backgroundColor: "transparent", 
              y: 0, 
              borderColor: "#EAE4DD",
              transition: { duration: 0.4 }
            }
      }

      // מנגנון הלחיצה למובייל: לחיצה מדליקה, לחיצה חוזרת מכבה
      onClick={() => setActiveFlavor(activeFlavor === flavor.id ? null : flavor.id)}
      
      // מנקה את ה-State אם משתמש בדסקטופ עוזב את הכרטיסייה אחרי שלחץ בטעות
      onHoverEnd={() => setActiveFlavor(null)}

      className="text-center p-[3rem_1.5rem] border bg-transparent rounded-sm cursor-pointer transition-shadow duration-300 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)]"
    >
      <h3 className="font-serif text-[1.6rem] mb-[15px] text-text">
        {flavor.title}
      </h3>
      <p className="text-[0.95rem] font-light text-[#6D665E]">
        {flavor.desc}
      </p>
    </motion.div>
  ))}
</div>
        </section>

        {/* --- אזור: יצירת קשר ושעות --- */}
        <div className="bg-[#F3F0EC] py-[100px] px-[5%] md:px-[8%] text-center" id="info">
          <motion.div 
            className="max-w-[1400px] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="max-w-[700px] mx-auto">
              <div className="mb-[3rem]">
                <h2 className="text-center text-[2.2rem] mb-[4rem] font-light tracking-[0.05em]">
                  <span className="block text-[0.8rem] uppercase text-accent mb-[10px] tracking-[0.3em] font-montserrat">CONTATTO</span>
                  בואו לבקר
                </h2>
                <h3 className="font-serif text-[1.8rem] mb-[10px] font-normal">Gelateria Crema</h3>
                <p className="text-[1.2rem] text-accent tracking-[0.05em]">רחוב יפו 113, ירושלים</p>
              </div>
              
              <ul className="list-none inline-block text-right border-t border-[#DED7CE] pt-[2rem] w-full max-w-[400px]">
                <li className="mb-[1.2rem] flex justify-between text-[1.1rem] font-light">
                  ראשון - חמישי <span className="font-semibold">09:00 - 22:00</span>
                </li>
                <li className="mb-[1.2rem] flex justify-between text-[1.1rem] font-light">
                  יום שישי <span className="font-semibold">09:00 - 14:00</span>
                </li>
                <li className="mb-[1.2rem] flex justify-between text-[1.1rem] font-light">
                  יום שבת <span className="font-semibold">כחצי שעה לאחר צאת השבת - 23:00</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="py-[4rem] px-[5%] md:px-[8%] text-center bg-white border-t border-[#EAE4DD] text-[0.85rem] tracking-[0.1em] text-[#8C847C]">
        <p className="english-logo">gelateria crema &copy; 2026</p>
        <p className="mt-[10px] text-[0.7rem] opacity-50 uppercase font-montserrat">Crafted with passion in Jerusalem</p>
      </footer>
    </>
  );
}
