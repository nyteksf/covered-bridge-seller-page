export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      opacity: {
        437: "0.0436518",
      },
      letterSpacing: {
        tightest: "0.08125rem", // custom name
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "pt-serif": ['"PT Serif"', "serif"],
        lato: ['Lato', 'sans-serif'],
      },
      keyframes: {
        jiggle: {
          "0%": { transform: "translateX(0)" },
          "15%": { transform: "translateX(-5px)" },
          "30%": { transform: "translateX(5px)" },
          "45%": { transform: "translateX(-3px)" },
          "60%": { transform: "translateX(3px)" },
          "75%": { transform: "translateX(-1px)" },
          "90%": { transform: "translateX(1px)" },
          "100%": { transform: "translateX(0)" },
        },
        spinner: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        jiggle: "jiggle 0.6s ease-in-out",
        spinner: 'spinner 650ms linear infinite',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-\[url\(.*\)\]/,
    },
  ],
};
