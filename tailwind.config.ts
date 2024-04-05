import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors, // keep default colors of tailwindcss
      dark: "#726e85",
      light: "#f5f5f5",
      grey: "#ABBBC2",
      transparent: "transparent",
      current: "currentColor",

      "grey-darker": "#9B9D9E",
      "base-bg-light": "#FAFAFA",
      "base-bg-dark": "#1F1D2B",
      "base-bg-white": "#FFFFFC",
      "base-bg-black": "#000D0B",
      "base-bg-neutral": "#252836",

      "primary-dominant": "#F5566C",
      "primary-dominant-light": "#FF7B8F",
      "primary-dominant-lighter": "#ffd7d7",
      "primary-dominant-bg": "#fff0f0",

      "primary-dominant-dark": "#D84152",

      "primary-accent": "#5EE2F0",
      "primary-accent-light": "#8FE6F4",
      "primary-accent-lighter": "#bdf0f8",
      "primary-accent-dark": "#6FE2EF",

      "text-light": "#f0f0f0",
      "text-dark": "#1F1D2B",

      "color-error": "#E43151",
      "color-success": "#9EE493",
    },
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.25rem"],
      "4xl": ["2.25rem", "2.5rem"],
      "5xl": ["3rem", "1"],
      "6xl": ["3.75rem", "1"],
      "7xl": ["4.5rem", "1"],
      "8xl": ["6rem", "1"],
      "9xl": ["8rem", "1"],
      "10xl": ["10rem", "1"],
      "11xl": ["12rem", "1"],
    },
    screens: {
      xs: "320px",
      "2xs": "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",

      // 'xs': {'max': '320px'},
      // '2xs': {'max': '480px'},
      // 'sm': {'max': '640px'},
      // 'md': {'max': '768px'},
      // 'lg': {'max': '1024px'},
      // 'xl': {'max': '1280px'},
      // '2xl': {'max': '1536px'},
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
export default config;
