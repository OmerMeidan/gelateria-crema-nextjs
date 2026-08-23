// תוכן התפריט המלא של Gelateria Crema.
// כל הטעמים, התוספות, המשקאות והמחירים במקום אחד - קל לעדכן בלי לגעת ברכיבים.

export interface FlavorItem {
  name: string;
  italian: string;
  /** צבע ה-hover של הכרטיס, בהשראת הטעם עצמו */
  color: string;
}

export interface PricedItem {
  name: string;
  note?: string;
  price: string;
}

export interface PriceRow {
  label: string;
  price: string;
}

export interface MenuTab {
  id: string;
  label: string;
}

export const MENU_TABS: MenuTab[] = [
  { id: 'classic', label: "ג'לאטו קלאסי" },
  { id: 'special', label: 'המיוחדים של קרמה' },
  { id: 'sorbet', label: 'פירות וסורבה' },
  { id: 'extras', label: 'תוספות ופינוקים' },
  { id: 'drinks', label: 'משקאות וקפה' },
];

// שימו לב: הצבעים של Nocciola, Fragola ו-Fondente Cioccolato תואמים בכוונה
// לצבעי כרטיסי הטעמים המוצגים למעלה בעמוד (Pistacchio / Cioccolato / Nocciola / Fragola).
export const CLASSIC_FLAVORS: FlavorItem[] = [
  { name: 'פרח החלב', italian: 'Fior di Latte Amalfi', color: '#FBF7EF' },
  { name: 'וניל בורבון', italian: 'Vaniglia Crema', color: '#F5EDDD' },
  { name: 'שמנת עם שביבי שוקולד', italian: 'Stracciatella', color: '#EDEAE2' },
  { name: 'קרמה', italian: 'Crema Artigianale', color: '#F6E9C9' },
  { name: 'שוקולד ואגוזי לוז', italian: 'Bacio', color: '#C9A184' },
  { name: 'שוקולד מריר', italian: 'Fondente Cioccolato', color: '#C29582' },
  { name: 'קרמל מלוח', italian: 'Caramello Salato', color: '#E8C08A' },
  { name: 'פיסטוק סיציליאני', italian: 'Pistacchio di Bronte', color: '#D9E0C9' },
  { name: 'אגוז לוז פיימונטה', italian: 'Nocciola', color: '#F7F3EB' },
  { name: 'שקד קלוי', italian: 'Mandorla', color: '#EFE3D0' },
  { name: 'קרם קוקוס', italian: 'Cocco', color: '#FBFAF6' },
  { name: 'קרם עשיר עם צנוברים', italian: 'Pinoli', color: '#F0E9D6' },
  { name: 'דובדבן אמרנה', italian: 'Amarena Ciliegie', color: '#F6D9DA' },
];

export const SPECIAL_FLAVORS: FlavorItem[] = [
  { name: 'טירמיסו', italian: 'Tiramisu', color: '#E4D2BE' },
  { name: 'עוגת גבינה', italian: 'Torta di Formaggio', color: '#F7EFD8' },
  { name: 'קרם עוגיות', italian: 'Crema di Biscotti', color: '#E8DCC4' },
  { name: 'ערמונים', italian: 'Castagna', color: '#DCC3A6' },
  { name: 'ריקוטה ותאנים', italian: 'Ricotta e Fichi', color: '#EFD9DD' },
  { name: "שוקולד תפוז וצ'ילי", italian: "Cioccolato all'arancia e peperoncino", color: '#E8B98F' },
  { name: 'לבנדר ודבש', italian: 'Lavanda e Miele', color: '#E2DCEE' },
  { name: 'קרם בזיליקום', italian: 'Crema al Basilico', color: '#E1E8D4' },
];

export const SORBET_FLAVORS: FlavorItem[] = [
  { name: 'לימון', italian: 'Limone', color: '#F5EFC0' },
  { name: "ליצ'י", italian: 'Litchi', color: '#F7EEEE' },
  { name: 'תות שדה', italian: 'Fragola', color: '#FDF1F2' },
  { name: 'מנגו', italian: 'Mango', color: '#F6D8A8' },
  { name: 'פירות יער', italian: 'Frutti di Bosco', color: '#DCC5D6' },
  { name: 'פסיפלורה', italian: 'Maracuja', color: '#F3D9A4' },
  { name: 'מנטה', italian: 'Menta', color: '#DCEFE2' },
  { name: 'אפרסק', italian: 'Pesca', color: '#F7DCC8' },
  { name: 'אננס', italian: 'Ananas', color: '#F5E9AE' },
];

export const EXTRAS: PricedItem[] = [
  { name: 'קרפ טוסקנה', note: '3 כדורים + תוספות', price: '42 ₪' },
  { name: 'וופל בלגי', note: '3 כדורים + תוספות', price: '45 ₪' },
  { name: 'קינוח כפית בצנצנת', note: 'מגוון טעמים', price: '25 ₪' },
  { name: 'קוקילידה', price: '25 ₪' },
  { name: 'מילקשייק', note: 'מגוון טעמים', price: '33 ₪' },
  { name: 'קצפת טוסקנית טריה', note: 'Montata Panna', price: 'תוספת' },
];

export const COFFEE_DRINKS: PricedItem[] = [
  { name: 'קפה קר', price: '14 ₪' },
  { name: 'אספרסו קטן', price: '12 ₪' },
  { name: 'אספרסו גדול', price: '14 ₪' },
  { name: 'קפה הפוך', price: '14 ₪' },
  { name: "קפוצ'ינו", price: '14 ₪' },
  { name: "שוקוצ'ינו", price: '14 ₪' },
  { name: 'אפוגטו', price: '18 ₪' },
];

export const COLD_DRINKS: PricedItem[] = [
  { name: 'קולה / זירו / ספרייט', price: '10 ₪' },
  { name: 'ספרייט זירו / פאנטה', price: '10 ₪' },
  { name: 'מים בטעמים', note: 'תפוח / אפרסק / ענבים', price: '10 ₪' },
  { name: 'מיץ תפוזים / ענבים', price: '10 ₪' },
  { name: 'מאלט', price: '10 ₪' },
  { name: 'מים', price: '8 ₪' },
  { name: 'סודה', price: '8 ₪' },
];

export const SCOOP_PRICES: PriceRow[] = [
  { label: 'קטן — כדור אחד', price: '23 ₪' },
  { label: 'בינוני — 2 כדורים', price: '30 ₪' },
  { label: 'גדול — 3 כדורים', price: '37 ₪' },
];

export const PACKAGE_PRICES: PriceRow[] = [
  { label: 'מארז 0.5 ק"ג', price: '60 ₪' },
  { label: 'מארז 1 ק"ג', price: '120 ₪' },
];
