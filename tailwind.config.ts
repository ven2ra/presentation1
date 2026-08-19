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
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "#FAFAF9",
        surface: "#F8F7F4",
        foreground: "#0F172A",
        muted: "#64748B",
        primary: {
          DEFAULT: "#4F46E5",
          light: "#7C3AED",
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "#10B981",
        },
        dark: {
          DEFAULT: "#0B0F19",
          surface: "#11172A",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
        "3xl": "22px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 20px -12px rgba(15, 23, 42, 0.10)",
        "card-hover": "0 1px 2px rgba(15, 23, 42, 0.06), 0 16px 32px -12px rgba(15, 23, 42, 0.16)",
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(rgba(15,23,42,0.14) 1px, transparent 1px)",
        "dot-grid-dark": "radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
