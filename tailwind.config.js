/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "#513CCE",
        light: "#F6F8F9",
        dark: "#010D19",
        "secondary-dark": "#001121",
        "border-light": "#0E253C1A",
        "border-dark": "#FFFFFF21",
        "app-green": "#22C55E",
        "app-red": "#DC3545",
        "light-text-secondary": "#0E253CD9",
        "light-text-primary": "#0E253C",
      },
      boxShadow: {
        primary: "0px_3px_6px_0px_#0000000F",
      },
    },
  },
  plugins: [],
};
