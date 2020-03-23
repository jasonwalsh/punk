module.exports = {
  theme: {
    customForms: theme => ({
      default: {
        input: {
          "&:focus": {
            borderColor: theme("colors.blue.500"),
            boxShadow: undefined
          }
        },
        select: {
          "&:focus": {
            borderColor: theme("colors.blue.500"),
            boxShadow: undefined
          }
        }
      }
    }),
    extend: {},
    fontFamily: {
      mono: ["Roboto Mono", "monospace"],
      sans: ["Roboto", "sans-serif"]
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
