const { table } = require("console");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // Next.js 페이지 경로
    "./components/**/*.{js,ts,jsx,tsx}", // 컴포넌트 경로
  ],
  theme: {
    extend: {
      color: {
        gray900: "#111827",
        gray800: "#1f2937",
        gray700: "#374151",
        gray600: "#4b5563",
        gray500: "#737373",
        gray400: "#9ca3af",
        gray200: "#e5e7eb",
        gray100: "#f3f4f6",
        gray50: "#f9fafb",
        blue: "#3692ff",
        white: "#ffffff",
        lightBlue: "#cfe5ff",
        lightGray: "#fcfcfc",
        inputRed: "#f74747",
      },
      fontSize: {
        H1: ["40px", { lineHeight: "47px", fontWeight: "600" }],
        H2Bold: ["24px", { lineHeight: "36px", fontWeight: "600" }],
        H2Regular: ["24px", { lineHeight: "36px", fontWeight: "400" }],
        H3Bold: ["20px", { lineHeight: "32px", fontWeight: "600" }],
        H3Regular: ["20px", { lineHeight: "32px", fontWeight: "400" }],
        H4Bold: ["18px", { lineHeight: "28px", fontWeight: "600" }],
        H4Regular: ["18px", { lineHeight: "28px", fontWeight: "400" }],
        H5Bold: ["16px", { lineHeight: "26px", fontWeight: "600" }],
        H5Regular: ["16px", { lineHeight: "26px", fontWeight: "400" }],
        H6Bold: ["15px", { lineHeight: "22px", fontWeight: "600" }],
        H6Regular: ["15px", { lineHeight: "22px", fontWeight: "400" }],
        H7Bold: ["14px", { lineHeight: "20px", fontWeight: "600" }],
        H7Medium: ["14px", { lineHeight: "24px", fontWeight: "500" }],
        H7Regular: ["14px", { lineHeight: "24px", fontWeight: "400" }],
        H8: ["12px", { lineHeight: "18px", fontWeight: "400" }],
      },
      fontFamily: {
        Pretendard: ["Pretendard", "sans-serif"],
      },
      screens: {
        mobile: { max: "767px" },
        tablet: { max: "1024px" },

        NavPadding: { max: "1920px" },
      },
    },
  },
  plugins: [],
};
