import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '0px', 'max': '767px'},
        'md': {'min': '768px', 'max': '1024px'},
        'lg': {'min': '1025px'},
      },
      backgroundImage: {
        'hero-bg-image': "url('/assets/hero.jpeg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
