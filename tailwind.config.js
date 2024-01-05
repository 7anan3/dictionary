/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pale-purple": "#e8cff9",
        "royal-purple": "#a44de9",
        "midnight-black": "#050505",
        "light-gray": "#f4f4f4",
        "medium-gray": "#bdbdbd",
        white: "#fbfbfb",
        black: "#1f1f1f ",
      },
    },
  },
  plugins: [],
};
