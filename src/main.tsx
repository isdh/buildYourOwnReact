import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// React要素
// const reactElement = React.createElement("h1", null, "Hello");
// createElementはオブジェクトを生成するだけなのでオブジェクトをそのまま渡しても平気
const element = {
  // $$typeofはReactDOMライブラリ内で付与されるシンボル
  $$typeof: Symbol.for("react.element"),
  key: null,
  props: {
    children: "Hello",
  },
  // refは必須になった模様
  ref: null,
  type: "h1",
  // ここから下は不要
  // _owner: null,
  // _store: {
  //   validated: true,
  // },
} as ReactElement;
// console.log(reactElement, element);

// DOM取得
const container = document.getElementById("root") as HTMLElement;

// Reactをコンテナにレンダリング
ReactDOM.createRoot(container).render(<React.StrictMode>{element}</React.StrictMode>);
