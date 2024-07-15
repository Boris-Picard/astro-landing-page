import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import svgLoader from "vite-svg-loader"; // Assurez-vous que le plugin est bien importé

export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  adapter: vercel({ imageService: true, devImageService: "squoosh" }),
  vite: {
    plugins: [svgLoader()],
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "entry.[hash].mjs",
          chunkFileNames: "chunks/chunk.[hash].mjs",
          assetFileNames: "assets/asset.[hash][extname]",
        },
      },
    },
  },
});
