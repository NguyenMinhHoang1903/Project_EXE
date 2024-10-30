/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transformOrigin: {
        "top-left-1/3-3/4": "33% 75%",
      },
    },
  },
  plugins: [],
};
