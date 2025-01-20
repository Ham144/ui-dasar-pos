/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
        "rubik-regular": ["Rubik-Regular", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-semibold": ["Rubik-SemiBold", "sans-serif"],
        "rubik-extra-bold": ["Rubik-ExtraBold", "sans-serif"],
      },
      colors: {
        primary: "#8A4FFF",
        secondary: "#FF9BD2",
        background: "#F9F0FF",
        text: "#4A0E4E",
        accent: "#B76EFF",
        muted: "#C8A2C8",
        light: "#E6D0FF",
        dark: "#3D0F3D",
        success: "#7FD1AE",
        error: "#FF6B9B",
        warning: "#FFD1DC",
        info: "#A3C1FF"
      }
      

    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
