import { elements } from './elements.mjs'

const header = /* typescript */ `
type F<T extends keyof React.JSX.IntrinsicElements> = (
  props: Omit<React.ComponentProps<T>, "children">,
  children?: React.ReactNode | React.ReactNode[]
) => React.ReactElement;
`;

function generateType(el) {
  return /* typescript */ `
declare const ${el}: F<"${el}">;
`;
}

const types = elements.map(generateType).join("");

const render = [header, types].join("\n");

console.log(render);
