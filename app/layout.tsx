import React from 'react';
import './globals.css';

export const metadata = {
  title: "Gelateria Crema | ג'לאטריה קרמה - ירושלים",
  description: "ג'לאטו איטלקי ארטיזנלי אמיתי בלב ירושלים. עבודת יד מחומרי הגלם הטובים ביותר.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}