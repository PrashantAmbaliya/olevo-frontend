/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#507623",
        primaryGreenLight: "#f6f8f4",
        primaryBlack: "#000000",
        textmute: "#6c6c6c",
        border: "#e0e0e0",
        white20: "#ffffff20",
        border20: "#e0e0e020",
      },
    },
  },
  plugins: [],
}
