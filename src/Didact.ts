import { ReactNode } from "react";
const createElement = (type: string, props?: {} | null, ...children: ReactNode[]) => ({
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
  $$typeof: Symbol.for("react.element"),
  key: null,
  ref: null,
  type: "TEXT_ELEMENT",
  props: {
    nodeValue: text,
    children: [],
  },
});

export const Didact = { createElement };
