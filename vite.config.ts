import { defineConfig } from 'vite';
import mdx from "@mdx-js/rollup";
import { vitePluginJSXToHTML } from './plugin/index';

export default defineConfig({
  plugins: [mdx(), vitePluginJSXToHTML({
    extensions: ['.mdx']
  })],
})