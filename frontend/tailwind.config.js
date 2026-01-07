// tailwind.config.ts

import {
  DARK_BLACK,
  DEFAULT_COLOR,
  FACEBOOK,
  INSTAGRAM,
  PRIMARY_COLOR,
  RED,
  SECONDARY_COLOR,
  TWITTER,
  YOUTUBE,
} from "./src/constants/colorConstants.js";
const tailwindConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./Admin/**/*.{js,ts,jsx,tsx,mdx}",
    "./Home/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 3s ease infinite",
      },
      rotate: {
        360: "360deg",
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        "kode-mono": ["Kode Mono", "monospace"],
        Montserrat: ["'Montserrat',", "sans-serif"],
      },
      colors: {
        default: DEFAULT_COLOR,
        primary: PRIMARY_COLOR,
        secondary: SECONDARY_COLOR,
        facebook: FACEBOOK,
        instagram: INSTAGRAM,
        twitter: TWITTER,
        youtube: YOUTUBE,
        matte: DARK_BLACK,
        beetroot: RED,
        primaryAdmin: "#23CC88",
        secondaryAdmin: "#1d1d1d",
      },
      screens: {
        mobile: "550px",
      },
    
      fontSize: {
        xs: "13px",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
