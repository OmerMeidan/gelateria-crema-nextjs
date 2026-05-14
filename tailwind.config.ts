import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAF8F5',
        text: '#1A1612',
        accent: '#B08D57',
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-assistant)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;