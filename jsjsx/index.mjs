import path from 'path'
import { elements } from './elements.mjs'

function jsjsx() {
  const configPath = new URL(import.meta.url).pathname;
  const dirName = path.dirname(configPath);

  return {
    name: "jsjsx",
    transform(code, id) {
      // hoping this removes just the leading path
      const trimmedPath = id.replace(dirName, "");
      if (
        trimmedPath.startsWith("/node_modules/") ||
        trimmedPath.startsWith("/@") || !trimmedPath.endsWith(".tsx")
      ) {
        return code;
      }

      return `
import { ${elements.join(',')} } from 'jsjsx/fns'\n
      ${code}`;
    },
  };
}

export { jsjsx }