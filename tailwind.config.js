const pxToResponsive = {
  5: "0.26041666666666663vw",
  13: "0.8333333333333334vw",
  15: "0.78125vw",
  16: "0.8333333333333334vw",
  17: "0.8854166666666666vw",
  18: "0.9375vw",
  19: "0.9895833333333333vw",
  20: "1.0416666666666665vw",
  22: "1.1458333333333333vw",
  34: "1.7708333333333333vw",
  36: "1.875vw",
  45: "2.5vw",
};

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        appBar: "box-shadow: 0px 3px 21px #00000010",
      },
      fontSize: pxToResponsive,
      spacing: pxToResponsive,
      minHeight: {
        auto: "auto",
      },
    },
    colors: {
      blue: {
        100: "#57BBFF",
        200: "#37AEFE",
        250: "#37AEFD",
        400: "#015DB1",
        500: "#1C4B93",
        600: "#1C4B93",
        800: "#00326C",
      },
      gray: {
        600: "#C9CACB",
      },
      white: "#fff",
      black: "#000",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
