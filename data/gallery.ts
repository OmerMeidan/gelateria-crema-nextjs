// פריטי "הסרט הנע" - רצועת התמונות והסרטונים בעמוד הבית.
// כל פריט הוא "פריים" אנכי (יחס 9:16), כמו תא בסרט צילום.

export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  /** לתמונות: טקסט חלופי לנגישות. לסרטונים: פריים פתיחה (poster). */
  alt?: string;
  poster?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { type: 'image', src: '/gallery/brand-stamp.jpg', alt: 'החותם של Gelateria Crema' },
  { type: 'image', src: '/gallery/interior.jpg', alt: 'ה-Laboratorio שלנו, שם הג׳לאטו מיוצר מדי בוקר' },
  { type: 'video', src: '/gallery/shopfront-1.mp4', poster: '/gallery/shopfront-1-poster.jpg' },
  { type: 'video', src: '/gallery/dessert.mp4', poster: '/gallery/dessert-poster.jpg' },
  { type: 'video', src: '/gallery/shopfront-2.mp4', poster: '/gallery/shopfront-2-poster.jpg' },
];
