'use client';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import InteractiveHero from '../components/InteractiveHero';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      const windowHeight = window.innerHeight;
      reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // הפעלה ראשונית לאנימציות שמופיעות מיד

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <InteractiveHero />

        <section id="about" className="content-block reveal">
          <h2 className="section-title"><span>LA STORIA</span>הסיפור שלנו</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>ב-Gelateria Crema אנחנו לא רק מייצרים גלידה, אנחנו משמרים מסורת איטלקית עתיקת יומין בלב ירושלים. כל מנה מיוצרת בעבודת יד מידי בוקר, תוך שימוש בחומרי גלם שנבחרו בקפידה.</p>
              <br />
              <p>מהפיסטוקים של סיציליה ועד לווניל של מדגסקר, המטרה שלנו היא אחת: להגיש לכם את הג'לאטו המושלם, במרקם קטיפתי ובטעם שאי אפשר לשכוח.</p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800" alt="Authentic Gelato" />
            </div>
          </div>
        </section>

        <section id="flavors" className="content-block">
          <h2 className="section-title reveal"><span>I GUSTI</span>הקלאסיקות שלנו</h2>
          <div className="flavors-grid">
            <div className="flavor-card reveal delay-1">
              <h3>Pistacchio</h3>
              <p>פיסטוק סיציליאני טהור, קלוי בעדינות ונטחן למחית עשירה שאין לה תחרות.</p>
            </div>
            <div className="flavor-card reveal delay-2">
              <h3>Cioccolato</h3>
              <p>שוקולד מריר ולרונה 70%, עוצמתי, נימוח וטבעוני לחלוטין.</p>
            </div>
            <div className="flavor-card reveal delay-3">
              <h3>Nocciola</h3>
              <p>אגוזי לוז מפיאמונטה, טעם אגוזי עמוק במרקם קטיפתי ממכר.</p>
            </div>
            <div className="flavor-card reveal delay-4">
              <h3>Fragola</h3>
              <p>סורבה תותים טריים מהשדה, קליל, מרענן ומלא בויטמינים של קיץ.</p>
            </div>
          </div>
        </section>

        <div className="info-section" id="info">
          <div className="content-block reveal" style={{ padding: 0 }}>
            <div className="info-container">
              <div className="address-box">
                <h2 className="section-title"><span>CONTATTO</span>בואו לבקר</h2>
                <h3>Gelateria Crema</h3>
                <p>רחוב יפו 113, ירושלים</p>
              </div>
              
              <ul className="hours-list">
                <li>ראשון - חמישי <span>09:00 - 22:00</span></li>
                <li>יום שישי <span>09:00 - 14:00</span></li>
                <li className="closed">יום שבת <span>סגור</span></li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p className="english-logo">gelateria crema &copy; 2026</p>
        <p style={{ marginTop: '10px', fontSize: '0.7rem', opacity: 0.5 }}>CRAFTED WITH PASSION IN JERUSALEM</p>
      </footer>
    </>
  );
}