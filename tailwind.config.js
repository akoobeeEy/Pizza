/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "4rem",
        lg: "6rem",
        xl: "8rem",
        "2xl": "10rem",
      },
    },
    extend: {
      colors: {
        textColor: "#191919",
        primary: "#FF7010",
        grayColor: "#F0F0F0",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
