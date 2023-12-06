import React from "react";

function App() {
  const divRef = React.useRef(null);

  const adj = div({ className: "flex items-center", ref: divRef }, [
    "amazing ",
    span({ className: "text-zinc-100 dark:text-neutral-400" }, "inner"),
  ]);

  return div({}, [
    "Hello ",
    adj,
    a({ href: "https://github.com" }, "World"),
  ]);
}

export default App;
