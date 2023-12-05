import React from "react";

const div = (
  props: Omit<React.ComponentProps<"div">, "children">,
  children?: React.ReactNode | React.ReactNode[]
) => {
  return React.createElement("div", props, children);
};

const a = (
  props: Omit<React.ComponentProps<"a">, "children">,
  children?: React.ReactNode | React.ReactNode[]
) => {
  return React.createElement("a", props, children);
};


const span = (
  props: Omit<React.ComponentProps<"span">, "children">,
  children?: React.ReactNode | React.ReactNode[]
) => {
  return React.createElement("span", props, children);
};

export { a, div, span }