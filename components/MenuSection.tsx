'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import {
  MENU_TABS,
  CLASSIC_FLAVORS,
  SPECIAL_FLAVORS,
  SORBET_FLAVORS,
  EXTRAS,
  COFFEE_DRINKS,
  COLD_DRINKS,
  SCOOP_PRICES,
  PACKAGE_PRICES,
  FlavorItem,
  PricedItem,
} from '../data/menu';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

function FlavorGrid({ items }: { items: FlavorItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <motion.div
          key={item.name}
          whileHover={{ backgroundColor: item.color, y: -5, borderColor: '#B08D57' }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-1 text-center border border-[#EAE4DD] rounded-sm bg-white py-[1.2rem] px-[1rem]"
        >
          <span>
            <span
              className="inline-block w-[9px] h-[9px] rounded-full align-middle ml-[6px]"
              style={{ backgroundColor: item.color, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08)' }}
            />
            <span className="font-serif text-[1.05rem]">{item.name}</span>
          </span>
          <span className="font-montserrat text-[0.65rem] tracking-[0.08em] uppercase text-[#8C847C] italic">
            {item.italian}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function PriceList({ items }: { items: PricedItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 max-w-[900px] mx-auto">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex items-baseline gap-[0.55rem] py-[0.85rem] border-b border-[#EAE4DD]"
        >
          <span className="whitespace-nowrap">{item.name}</span>
          {item.note && (
            <span className="text-[0.76rem] text-[#8C847C] font-light whitespace-nowrap">{item.note}</span>
          )}
          <span className="flex-1 border-b border-dotted border-[#DED7CE] relative -top-[5px]" />
          <span className="font-semibold text-accent whitespace-nowrap [font-variant-numeric:tabular-nums]">
            {item.price}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState('classic');

  return (
    <motion.section
      id="menu"
      className="py-[80px] md:py-[120px] px-[5%] md:px-[8%] max-w-[1400px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
    >
      <span className="block text-center text-[0.8rem] uppercase text-accent mb-[10px] tracking-[0.3em] font-montserrat">
        IL MENU
      </span>
      <h2 className="text-center text-[2.2rem] mb-[4rem] font-light tracking-[0.05em]">התפריט המלא</h2>

      {/* לוח מחירי מנות, באותו סגנון של רשימת השעות בסקשן יצירת הקשר */}
      <div className="max-w-[420px] mx-auto mb-[4.5rem] text-center">
        <h3 className="font-serif text-[1.3rem] font-semibold mb-[1.6rem]">מנת ג&apos;לאטו — גביע / כוס</h3>
        <ul className="border-t border-[#DED7CE] pt-[1.6rem]">
          {SCOOP_PRICES.map((row) => (
            <li key={row.label} className="flex justify-between text-[1.05rem] font-light mb-[1rem]">
              <span>{row.label}</span>
              <span className="font-semibold text-accent [font-variant-numeric:tabular-nums]">{row.price}</span>
            </li>
          ))}
        </ul>
        <div className="font-montserrat text-[0.68rem] tracking-[0.15em] uppercase text-[#8C847C] my-[1.8rem]">
          מארזים לבית
        </div>
        <ul>
          {PACKAGE_PRICES.map((row) => (
            <li key={row.label} className="flex justify-between text-[1.05rem] font-light mb-[1rem]">
              <span>{row.label}</span>
              <span className="font-semibold text-accent [font-variant-numeric:tabular-nums]">{row.price}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* טאבים, באותו סגנון כפתורי הניווט */}
      <div className="flex flex-wrap justify-center gap-2 mb-[3.5rem]">
        {MENU_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            aria-pressed={activeTab === tab.id}
            className={`font-semibold text-[0.92rem] tracking-[0.03em] px-[1.35rem] py-[0.6rem] rounded-[30px] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
              activeTab === tab.id
                ? 'bg-accent text-white'
                : 'text-text hover:bg-accent/10 hover:text-accent'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'classic' && <FlavorGrid items={CLASSIC_FLAVORS} />}
      {activeTab === 'special' && <FlavorGrid items={SPECIAL_FLAVORS} />}
      {activeTab === 'sorbet' && (
        <>
          <FlavorGrid items={SORBET_FLAVORS} />
          <p className="text-center mt-[2.2rem] text-[0.8rem] text-[#8C847C] tracking-[0.05em]">100% טבעיים</p>
        </>
      )}
      {activeTab === 'extras' && <PriceList items={EXTRAS} />}
      {activeTab === 'drinks' && (
        <div className="max-w-[900px] mx-auto space-y-[2.8rem]">
          <div>
            <div className="text-center font-montserrat text-[0.72rem] tracking-[0.15em] uppercase text-accent mb-[1rem]">
              שתייה קלה וקפה
            </div>
            <PriceList items={COFFEE_DRINKS} />
          </div>
          <div>
            <div className="text-center font-montserrat text-[0.72rem] tracking-[0.15em] uppercase text-accent mb-[1rem]">
              שתייה קרה
            </div>
            <PriceList items={COLD_DRINKS} />
          </div>
        </div>
      )}
    </motion.section>
  );
}
