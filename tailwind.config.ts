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
        "star-option":"url('../../public/svg/star option.svg')",
        "lock-option":"url('../../public/svg/lock option.svg')",
        "shop-option":"url('../../public/svg/shop option.svg')"
       
      },
      fontFamily: {
        iransans: ['IRANSans', 'sans-serif'],
      },
    },
    fontWeight: {
      light: '100',
      normal: '200',
      medium: '300',
      bold: '400',
    }
  },
  plugins: [],
};
export default config;
