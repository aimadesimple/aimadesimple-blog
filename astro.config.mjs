// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import remarkGfm from 'remark-gfm';
import rehypePrismPlus from 'rehype-prism-plus';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrismPlus],
      shikiConfig: {
        theme: 'github-dark',
        wrap: true
      },
      gfm: true
    }),
    sitemap(),
    tailwind()
  ],
});