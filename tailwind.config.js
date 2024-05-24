/** @type {import('tailwindcss').Config} */
import { createThemes } from "tw-colors";

const gradients = {
  cyan: "linear-gradient(239.26deg,#DDEEED 63.17%,#FDF1E0 94.92%)",
  black: "linear-gradient(239.26deg,#000000 63.17%,#FDF1E0 94.92%)",
  red: "linear-gradient(239.26deg,#FF0000 63.17%,#FDF1E0 94.92%)",
  blue: "linear-gradient(239.26deg,#0000FF 63.17%,#FDF1E0 94.92%)",
};
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        cyan: gradients.cyan,
        black: gradients.black,
        red: gradients.red,
        blue: gradients.blue,
      }),
    },
   
  },
  plugins: [
   
  ],
};

// light: {
//   primary: "linear-gradient(239.26deg,#DDEEED 63.17%,#FDF1E0 94.92%)",
// },
// dark: {
//   primary: "linear-gradient(239.26deg,#000000 63.17%,#FDF1E0 94.92%)",
// },
// red: {
//   primary: "linear-gradient(239.26deg,#FF0000 63.17%,#FDF1E0 94.92%)",
// },
// blue: {
//   primary: "linear-gradient(239.26deg,#0000FF 63.17%,#FDF1E0 94.92%)",
// },