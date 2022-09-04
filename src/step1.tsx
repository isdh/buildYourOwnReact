import React from "react";
import { createElement } from "react";
import ReactDOM from "react-dom/client";

// JSX
// const element = (
//   <div id="foo">
//     <a>bar</a>
//     <b />
//   </div>
// );
// JSXをJSに変換する
const element = createElement(
  "div",
  { id: "foo" },
  React.createElement("a", null, "bar"),
  React.createElement("b")
);

const container = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(container).render(element);
