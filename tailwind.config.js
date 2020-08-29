module.exports = {
  theme: {
    extend: {
      lineHeight: {
        11: "5.875rem",
        // 12: "20.5 rem",
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
        "3/4": "75%",
        "scroll-review": "calc(100% - 3.25rem)",
        "scroll-movie": "calc(100% - 4.5rem)",
        "img-next-slide": "calc(100% - 6.25rem)",
      },
      backgroundImage: () => ({
        "hero-pattern": "url('/public/advanture.png')",
      }),
      inset: {
        "-18": "-4.5rem",
      },
      opacity: {
        10: "0.1",
      },
    },
  },
  variants: {
    cursor: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
