import "./App.css";
import { a, div, span } from "./components";

function App() {
  return div({}, [
    "Hello ",
    div({ className: "flex items-center" }, [
      "amazing ",
      span({ className: "text-zinc-100 dark:text-neutral-400" }, "inner"),
    ]),
    a({ href: "https://github.com" }, "World"),
  ]);
}

export default App;
