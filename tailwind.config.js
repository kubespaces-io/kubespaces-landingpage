/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#EBF1F5",
          200: "#D9E3EA",
          300: "#C5D2DC",
          400: "#9BA9B4",
          500: "#707D86",
          600: "#55595F",
          700: "#33363A",
          800: "#25282C",
          900: "#151719",
        },
        purple: {
          100: "#6580a3",
          200: "#4b71a3",
          300: "#637fa6",
          400: "#2259a3",
          500: "#2e60a3",
          600: "#1351a4",
          700: "#1050a3",
          800: "#0248a3",
          900: "#0248a3",
        },
      },
      spacing: {
        "9/16": "56.25%",
        "3/4": "75%",
        "1/1": "100%",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mono: ["Roboto Mono", "monospace"],
        "architects-daughter": [
          "var(--font-architects-daughter)",
          "sans-serif",
        ],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.037em" }],
        "3xl": [
          "1.875rem",
          { lineHeight: "1.3333", letterSpacing: "-0.037em" },
        ],
        "4xl": ["2.25rem", { lineHeight: "1.2777", letterSpacing: "-0.037em" }],
        "5xl": ["3rem", { lineHeight: "1", letterSpacing: "-0.037em" }],
        "6xl": ["4rem", { lineHeight: "1", letterSpacing: "-0.037em" }],
        "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.037em" }],
      },
      keyframes: {
        "code-1": {
          "0%": { opacity: 0 },
          "2.5%": { opacity: 1 },
          "97.5%": { opacity: 0.5 },
          "100%": { opacity: 0 },
        },
        "code-2": {
          "11.1%": { opacity: 0 },
          "13.6%": { opacity: 1 },
          "97.5%": { opacity: 0.5 },
          "100%": { opacity: 0 },
        },
        "code-3": {
          "22.2%": { opacity: 0 },
          "24.7%": { opacity: 1 },
          "97.5%": { opacity: 0.5 },
          "100%": { opacity: 0 },
        },
        "code-4": {
          "33.3%": { opacity: 0 },
          "35.8%": { opacity: 1 },
          "97.5%": { opacity: 0.5 },
          "100%": { opacity: 0 },
        },
        "code-5": {
          "44.4%": { opacity: 0 },
          "46.9%": { opacity: 1 },
          "97.5%": { opacity: 0.5 },
          "100%": { opacity: 0 },
        },
        "code-6": {
          "55.5%": { opacity: 0 },
          "58%": { opacity: 1 },
          "97.5%": { opacity: 0.5 },
          "100%": { opacity: 0 },
        },
        "code-7": {
          "66.6%": { opacity: 0 },
          "69.1%": { opacity: 1 },
          "97.5%": { opacity: 0.5 },
          "100%": { opacity: 0 },
        },
        "code-8": {
          "77.7%": { opacity: 0 },
          "80.2%": { opacity: 1 },
          "97.5%": { opacity: 0.5 },
          "100%": { opacity: 0 },
        },
        "code-9": {
          "88.8%": { opacity: 0 },
          "91.3%": { opacity: 1 },
          "97.5%": { opacity: 0.5 },
          "100%": { opacity: 0 },
        },
        breath: {
          "0%, 100%": { transform: "scale(0.95)" },
          "50%": { transform: "scale(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5%)" },
        },
        line: {
          "0%, 100%": { left: 0, opacity: 0 },
          "50%": { left: "100%", transform: "translateX(-100%)" },
          "10%, 40%, 60%, 90%": { opacity: 0 },
          "25%, 75%": { opacity: 1 },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      inset: {
        full: "100%",
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
      minWidth: {
        10: "2.5rem",
      },
      scale: {
        98: ".98",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
