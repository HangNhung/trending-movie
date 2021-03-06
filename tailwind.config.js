module.exports = {
  theme: {
    extend: {
      lineHeight: {
        11: "5.875rem",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        body: ["Roboto", "sans-serif"],
        poppins: ["Poppins"],
      },
      textColor: {
        red: {
          lighter: "#DD6564",
          strong: "#CE203C",
        },
      },
      fontSize: {
        "17xl": "15rem",
      },
      height: {
        "1/3": "33%",
        "1/2": "50%",
        "3/4": "75%",
        "scroll-review": "calc(100% - 4.5rem)",
      },
      backgroundImage: () => ({
        "hero-pattern": "url('/public/advanture.png')",
      }),
      backgroundColor: { nero: "#1C1C1C", lighter: "#DD6564" },
      opacity: {
        10: "0.1",
      },
    },
  },
  variants: {
    cursor: ["responsive", "hover", "focus"],
    width: ["responsive"],
    display: ["responsive"],
    lineHeight: ["responsive"],
  },
  plugins: [],
};
