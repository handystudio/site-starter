// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import alpinejs from '@astrojs/alpinejs';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
import partytown from '@astrojs/partytown';

import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    mdx(),
    alpinejs(),
    preact(),
    react(),
    solidJs(),
    svelte(),
    vue(),
    partytown(),
    sitemap(),
    icon()
  ]
});