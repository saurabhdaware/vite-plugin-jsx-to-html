# vite-plugin-jsx-to-html

Vite Plugin to turn JSX into HTML string.

**Stackblitz Example:** https://stackblitz.com/edit/vite-plugin-jsx-to-html?file=vite.config.js

> **Warning**
>
> This plugin uses React to turn JSX into HTML. If you're using this on CSR with framework other than React, it will end up adding React to your bundle which might not be expected


## Installation

```sh
npm install --save-dev vite-plugin-jsx-to-html

# OR

yarn add --dev vite-plugin-jsx-to-html
```

Then in `vite.config.ts` or `vite.config.js` add the following code 

## Usage

```js
import { defineConfig } from 'vite';
import { vitePluginJSXToHTML } from 'vite-plugin-jsx-to-html';

export default defineConfig({
  plugins: [
    vitePluginJSXToHTML({
      extension: ['.special.jsx'] // optional
    }
  )],
});
```

You can now import `.special.jsx`, `.page.jsx` or `.page.tsx` files anywhere in your vite app and it will be loaded as HTML.

> **Note**
>
> The normal `.jsx` or `.tsx` files will not turn into HTML (this it to avoid turning child components that you import into other components). If that is the expected behaviour, you can pass `extension: ['.jsx', '.tsx']` in the config. 


```js
// index.js
import App from './App.page.tsx';

document.querySelector('#root').innerHTML = App();
```

