module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        deepgreen: "#053d4e",
        softgray: "#f4f6fa"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
