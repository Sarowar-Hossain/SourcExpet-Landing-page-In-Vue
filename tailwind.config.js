module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors: {
        primary: "#2eb5f7",
        secondary: "#00d2ff",
        light: "#ccf5fe",
        deep: "#2d3965",
        text: "#1B1919",
      },
    },
  },
  plugins: [],
};
