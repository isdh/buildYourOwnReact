import ReactDOM from "react-dom/client";
import { Didact } from "./Didact";

// JSX
/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);
// JSXをJSに変換する
// const element = Didact.createElement(
//   "div",
//   { id: "foo" },
//   Didact.createElement("a", null, "bar"),
//   Didact.createElement("b")
// );

const container = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(container).render(element);
