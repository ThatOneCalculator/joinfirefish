// astro.config.mjs
import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import rome from "astro-rome";
import purgecss from "astro-purgecss";
import preload from "astro-preload";
import sitemap from "astro-sitemap";
import prefetch from "@astrojs/prefetch";
import icon from "astro-icon";
import codeblocks from "@thewebforge/astro-code-blocks";

// https://astro.build/config
export default defineConfig({
  site: "https://joinfirefish.org",
  experimental: {
    optimizeHoistedScript: true,
    // devOverlay: true,
  },
  vite: {
    plugins: [],
  },
  integrations: [
    icon({
      include: {
        ph: ["*"],
      }
    }),
    rome(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          ja: "ja-JP",
        },
      },
    }),
    // preload(),
    // prefetch(),
    astroI18next(),
    codeblocks(),
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "rose-pine" },
    }),
    robotsTxt(),
    purgecss(),
  ],
});
