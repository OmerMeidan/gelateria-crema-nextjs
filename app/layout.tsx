import React from 'react';
import './globals.css';

export const metadata = {
  title: "Gelateria Crema | ג'לאטריה קרמה - ירושלים",
  description: "ג'לאטו איטלקי ארטיזנלי אמיתי בלב ירושלים. עבודת יד מחומרי הגלם הטובים ביותר.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      {/* שמנו את צבע הרקע, הטקסט, והפונט ישירות על ה-body! */}
      <body className="bg-bg text-text font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}