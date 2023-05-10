import { defineConfig } from 'vite';
import mdx from "@mdx-js/rollup";
import { vitePluginJSXToHTML } from './plugin/index';

export default defineConfig({
  plugins: [
    mdx(), // This turns MDX into React Components
    vitePluginJSXToHTML({
      extensions: ['.mdx'] // This turns React Components into HTML string
    })
  ],
})