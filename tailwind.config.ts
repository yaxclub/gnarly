import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        //light: (theme) => theme('colors.zinc-300'),
        //dark: ({ theme }) => theme('colors.gray-700'), 
        foreground: "var(--foreground)",
        'yellow': '#ffda1f',
        'darkgreen': '#357a38',
        'green': '#4caf50',
        'lightgreen': '#6fbf73',
        'flame': '#FF4A1C',
        'jet': '#282B28',
        'lavender': '#EEE5E9',
        'darkgray': '#7C7C7C',
        'sunset': '#EFC88B'
      },
      fontFamily: {
      },
    },
  },
  plugins: [],
} satisfies Config;
