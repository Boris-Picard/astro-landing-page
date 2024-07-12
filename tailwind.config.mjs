/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(10)" },
          "100%": { transform: "translateX(-101%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
