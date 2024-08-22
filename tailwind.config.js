/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        BG1: "#292f36",
        BG2: "#1a1e23",
        Brand1: "#12f7d6",
        Brand2: "#98faec",
        CSS: "#0c73b8",
        Grey: "#43454D",
        Html: "#E54F26",
        JS: "#E7A020",
        React: "#28A9E0",
      },
      backgroundImage: {
        "bg-about-me": "url('/assets/images/bg-About.png')",
        "bg-skills": "url('/assets/images/bg-Skills.png')",
      },
    },
  },
  plugins: [],
};
