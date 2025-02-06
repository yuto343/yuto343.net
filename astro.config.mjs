import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
import mdx from "@astrojs/mdx";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), mdx()],
  adapter: cloudflare(),
  output: "static",
});
