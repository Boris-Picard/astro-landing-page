import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [svgLoader()],
  },
  output: "static",
  adapter: vercel({ imageService: true, devImageService: "squoosh" }),
});
