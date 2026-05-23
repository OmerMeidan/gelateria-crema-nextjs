import type { MetadataRoute } from 'next'; 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // תקף לכל מנועי החיפוש (גוגל, בינג וכו')
      allow: '/',     // מאשר לסרוק את כל האתר
    },
    sitemap: 'https://www.gelateria-crema.co.il/sitemap.xml', // מפנה אוטומטית למפה שיצרנו למעלה
  }
}