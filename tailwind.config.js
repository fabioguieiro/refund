module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        deepgreen: "#053d4e"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};