/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#F3F7FF",
          100: "#E7F0FE",
          600: "#2B6FE9",
          700: "#1C4FB3",
          800: "#123B8A",
          900: "#0D2C6F"
        },
        accent: { 500: "#3DC0C9" }
      },
      maxWidth: { content: "72rem" },
      boxShadow: { focus: "0 10px 30px rgba(16,24,40,0.12)" }
    }
  },
  plugins: []
};
