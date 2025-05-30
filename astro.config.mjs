// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    output: 'static',
    site: 'https://zekerex.github.io/astro-testing-grounds/',

    vite: {   plugins: [tailwindcss()],  },
  })
