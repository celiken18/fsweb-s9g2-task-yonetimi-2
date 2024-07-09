/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        pill: "#ccc",
        task: "#c8781a",
        parag: "#444",
      },
    },
  },
  plugins: [],
};
