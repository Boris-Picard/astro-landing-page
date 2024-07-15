import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [svgLoader()],
  },
  output: "static",
  adapter: vercel({ imageService: true, devImageService: "squoosh" }),
});
