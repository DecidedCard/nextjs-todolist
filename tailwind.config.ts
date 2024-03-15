import type { Config } from "tailwindcss";
import bookImage from "./src/assets/bookImage.jpg";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [require("daisyui")],
};
export default config;
