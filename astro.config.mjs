// @ts-check
import { available_languages, defaultLang } from './src/i18n/utils';
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: [...available_languages],
    defaultLocale: defaultLang,
    routing: {
      prefixDefaultLocale: true
    }
  },

  output: 'static',

  adapter: vercel()
});