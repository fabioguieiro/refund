

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        deepgreen: "#053d4e",
        softgray: "#f4f6fa",
        iconbg: "#ecf8f8",
        slategray: "#5f6772",
        niceblue: "#0f68bd",
        nicegreen: "#03a046",
        typogray: "#545b64",
        muted: "#d0d3d6",
        approvedlight: "#e6fff0",
        approveddark: "#03a046",
        openstatusglightray: "#f0f3f7",
        openstatusgdarktray: "#6b7480",
        concludeddarkgreen: "#009d43",
        concludedlightgreen: "#edfff5",
        coolgray: "#9ea4ac",
        currencygray: "#32363b"
        
      },
    },
    fontFamily: {
      nunito: ['Nunito Sans', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
