'use client';

import Image from 'next/image';
import { GALLERY_ITEMS, GalleryItem } from '../data/gallery';

type ReelItem = GalleryItem & { key: string; duplicate: boolean };

function buildReelItems(): ReelItem[] {
  const pass = (duplicate: boolean) =>
    GALLERY_ITEMS.map((item, i) => ({ ...item, key: `${duplicate ? 'dup' : 'src'}-${i}`, duplicate }));
  // מכפילים את הרשימה כדי לקבל לולאה חלקה וללא תפר (translateX(-50%) = סיבוב אחד מלא)
  return [...pass(false), ...pass(true)];
}

export default function GalleryReel() {
  const items = buildReelItems();

  return (
    <section className="py-[80px] md:py-[120px] overflow-hidden" id="gallery">
      <div className="px-[5%] md:px-[8%] max-w-[1400px] mx-auto">
        <span className="block text-center text-[0.8rem] uppercase text-accent mb-[10px] tracking-[0.3em] font-montserrat">
          MOMENTI
        </span>
        <h2 className="text-center text-[2.2rem] mb-[3.5rem] font-light tracking-[0.05em]">רגעים ב-Crema</h2>
      </div>

      <div className="reel-viewport" dir="ltr">
        <div className="reel-track">
          {items.map((item) => (
            <div key={item.key} className="reel-frame" aria-hidden={item.duplicate || undefined}>
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.duplicate ? '' : (item.alt ?? '')}
                  fill
                  sizes="(min-width: 768px) 240px, 170px"
                  className="object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  poster={item.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  tabIndex={-1}
                >
                  הדפדפן שלך אינו תומך בהצגת וידאו.
                </video>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
