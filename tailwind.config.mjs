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
      backgroundImage: {
        "radial-gradient-to-top":
          "radial-gradient(140% 107.13% at 50% 5%, transparent 37.41%, #EF8801 69.27%, #FF6347 100%)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
