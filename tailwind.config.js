const pxToResponsive = {
  3: "0.15625vw",
  5: "0.26041666666666663vw",
  6: "0.3125vw",
  13: "0.6770833333333334",
  14: "0.7291666666666666vw",
  15: "0.78125vw",
  16: "0.8333333333333334vw",
  17: "0.8854166666666666vw",
  18: "0.9375vw",
  19: "0.9895833333333333vw",
  20: "1.0416666666666665vw",
  22: "1.1458333333333333vw",
  24: "1.25vw",
  28: "1.4583333333333333vw",
  34: "1.7708333333333333vw",
  36: "1.875vw",
  45: "2.5vw",
  80: "4.166666666666666vw",
  277: "14.427083333333332vw",
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
        100: "#FAFAFA",
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
