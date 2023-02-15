import { defineConfig } from 'astro/config';1

// https://astro.build/config
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), preact()],
});