/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{html,js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#fcfcfc",
        white: "#ffffff",
        blue: "#3692FF",
        blueHover: "#1967d6",
        error: "#f74747",
        gray50: "#f9fafb",
        gray100: "#f3f4f6",
        gray200: "#e5e7eb",
        gray300: "#D1D5DB",
        gray400: "#9ca3af",
        gray500: "#6b7280",
        gray600: "#4b5563",
        gray700: "#374151",
        gray800: "#1f2937",
        gray900: "#111827",
      },
      screens: {
        maxS: { max: "375px" },
        sm: { min: "376px", max: "767px" },
        maxM: { max: "768px" },
        md: { min: "769px", max: "1023px" },
        lg: { max: "1024px" },
      },
      keyframes: {
        gradient: {
          from: { "background-position-x": "200%" },
          to: { "background-position-x": "-200%" },
        },
      },
      animation: {
        gradient: "gradient 3s linear infinite",
      },
      backgroundSize: {
        "200%": "200% 100%",
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
        rokaf: ["ROKAF Sans", "sans-serif"],
      },
      fontSize: {
        Bold40: ["40px", { lineHeight: "47px", fontWeight: "600" }],
        Bold28: ["28px", { lineHeight: "42px", fontWeight: "600" }],
        Bold24: ["24px", { lineHeight: "36px", fontWeight: "600" }],
        Regular24: ["24px", { lineHeight: "36px", fontWeight: "400" }],
        Bold20: ["20px", { lineHeight: "30px", fontWeight: "600" }],
        Regular20: ["20px", { lineHeight: "30px", fontWeight: "400" }],
        Bold18: ["18px", { lineHeight: "28px", fontWeight: "600" }],
        Regular18: ["18px", { lineHeight: "28px", fontWeight: "400" }],
        Bold16: ["16px", { lineHeight: "26px", fontWeight: "600" }],
        Regular16: ["16px", { lineHeight: "26px", fontWeight: "400" }],
        Bold15: ["15px", { lineHeight: "22px", fontWeight: "600" }],
        Regular15: ["15px", { lineHeight: "22px", fontWeight: "400" }],
        Bold14: ["14px", { lineHeight: "20px", fontWeight: "600" }],
        Regular14: ["14px", { lineHeight: "20px", fontWeight: "400" }],
        Regular12: ["12px", { lineHeight: "20px", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};
