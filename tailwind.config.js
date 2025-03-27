/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        mercy: ['"Mercy Christole"', "serif"],
        taviraj: ["Taviraj", "serif"],
        petit: ['"Petit Formal Script"', "cursive"],
      },
    },
  },
  plugins: [],
};
