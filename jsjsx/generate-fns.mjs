import { elements } from "./elements.mjs";

const header = /* typescript */ `
import React from "react";
`;

function toFn(el) {
  return /* typescript */ `
export function ${el}(props, children) {
  if (Array.isArray(children)) {
    return React.createElement("${el}", props, ...children);
  }
  return React.createElement("${el}", props, children);
}
`;
}

const fns = elements.map(toFn).join("");
const rendered = [header, fns].join("\n");

console.log(rendered);
