// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkGfm from 'remark-gfm';
import rehypePrismPlus from 'rehype-prism-plus';

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  site: 'https://blog.aimadesimple.online',
  // Preserve the existing HTML whitespace and remark/rehype pipeline.
  compressHTML: true,
  markdown: {
    processor: unified({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrismPlus],
    }),
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'github-dark',
        wrap: true
      },
      gfm: true
    }),
    sitemap()
  ],
});
