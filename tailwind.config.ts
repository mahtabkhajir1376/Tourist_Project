import { Ultra } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-image": "url('../../public/image/header.png')",
        "star-option":"url('../../public/svg/Shapeone.svg')",
        "lock-option":"url('../../public/svg/Shapetwo.svg')",
        "shop-option":"url('../../public/svg/Shapethree.svg')"
       
      },
      fontFamily: {
        iransans: ['IRANSans', 'sans-serif'],
        iransansNumber:['iransansNumber']
      },
    },
    fontWeight: {

      thin:'100',
      ultraLight:'200',
      light: '300',
      regular: '400',
      medium: '500',
      demiBold: '600',
      bold:'700',
      Extrabold:'800',
      Black:'900'
    }
  },
  plugins: [require('daisyui'),],
};
export default config;