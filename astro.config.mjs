import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.bahi.ar',
  base: '/blog', // <-- Crucial: Avisa que el blog corre en la subcarpeta
  build: {
    format: 'directory' // Genera URLs limpias (ej: /blog/nota/)
  }
});