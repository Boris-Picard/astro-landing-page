/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        glow: "0 0 15px 5px rgba(139, 92, 246, 0.7), 0 0 30px 10px rgba(76, 29, 149, 0.7)",
      },
      animation: {
        scroll: "scroll 20s linear infinite",
        scrollUp: "scrollUp 15s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollUp: {
          "0%": { transform: "translateY(-60%)" },
          "100%": { transform: "translateY(-400%)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
