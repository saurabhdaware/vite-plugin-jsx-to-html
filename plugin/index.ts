export const vitePluginJSXToHTML = ({ extensions }: { extensions?: string[] } = {}) => {
  return {
    name: "vite-plugin-jsx-to-html",
    async transform(source: string, id: string) {
      const userDefinedExtensions = extensions ?? [];
      let isJSX = [...userDefinedExtensions, '.page.tsx', '.page.jsx'].some((extension) => id.endsWith(extension));
      if (isJSX) {
        const helper = `
        ${source.includes('import React') ? '' : "import React from 'react';"}
        ${source.includes('import react-dom/server') ? '' : "import ReactDOMServer from 'react-dom/server';"}

        const createAsHTML = (...val) => {
          return (props, children) => ReactDOMServer.renderToStaticMarkup(React.createElement(...val, props, children))
        }
        `.replace(/\n/g, '');

        const code = helper + '\n' + source.replace(/export default (\w*?)([;\n$])/g, "export default createAsHTML($1)$2");

        return {
          code,
        }

      }
    },
  };
};

export default vitePluginJSXToHTML;
