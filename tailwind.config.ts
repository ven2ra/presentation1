import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Тёплая бумага вместо стерильного белого/gray-50
        paper: "#F4EEDF",
        "paper-2": "#EAE1C9",
        ink: {
          DEFAULT: "#141311",
          soft: "#41403A",
        },
        // Плоские, насыщенные акценты — без единого градиента
        lime: "#D7F23A",
        coral: "#FF5B32",
        cobalt: "#2A3EEB",
        grape: "#7A3BFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "sans-serif"],
        sans: ["var(--font-body)", "ui-sans-serif", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "10px",
        lg: "14px",
        xl: "18px",
      },
      boxShadow: {
        // Жёсткие смещённые тени вместо мягких blur-теней
        brut: "5px 5px 0 0 #141311",
        "brut-sm": "3px 3px 0 0 #141311",
        "brut-lg": "9px 9px 0 0 #141311",
        "brut-coral": "5px 5px 0 0 #FF5B32",
        "brut-lime": "5px 5px 0 0 #D7F23A",
        "brut-paper": "5px 5px 0 0 #F4EEDF",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        wipe: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "spin-slow": "spin-slow 14s linear infinite",
        wipe: "wipe 0.7s cubic-bezier(0.65,0,0.35,1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
