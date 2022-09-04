import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";

const createElement = (type: string, props: {}, ...children: ReactNode[]) => ({
  // $$typeof, key, refはReact18では必須の様子
  $$typeof: Symbol.for("react.element"),
  key: null,
  ref: null,
  type,
  props: {
    ...props,
    children: children.map((child) =>
      typeof child === "object" ? child : createTextElement(child)
    ),
  },
});

const createTextElement = (text: string | number | boolean | undefined) => ({
  type: "TEXT_ELEMENT",
  props: {
    nodeValue: text,
    children: [],
  },
});

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
