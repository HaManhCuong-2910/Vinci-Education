/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    container: {
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1200px",
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        primary: "#D14242",
        black: {
          300: "#505460",
          400: "#242938",
        },
        yellow: {
          300: "#FFF9F1",
        },
      },
    },
  },
  plugins: [],
};
