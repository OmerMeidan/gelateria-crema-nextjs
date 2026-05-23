import type { MetadataRoute } from 'next'; 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.gelateria-crema.co.il',
      lastModified: new Date(),
      changeFrequency: 'monthly', // עמוד הבית לא משתנה באופן יומי, חודשי זה מעולה
      priority: 1, // הציון הגבוה ביותר, מסמן לגוגל שזה העמוד הראשי
    },
    // בעתיד, כשנרחיב את האתר לעמודים דינמיים (למשל: /flavors/pistacchio)
    // נוכל לבצע כאן Fetch מהדאטה-בייס ולהזריק את כל הכתובות לתוך המערך הזה!
  ]
}