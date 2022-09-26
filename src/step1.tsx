import ReactDOM from "react-dom/client";
import { Didact } from "./Didact";

// JSX
/**
 * @link https://github.com/emotion-js/emotion/issues/2041#issuecomment-719819128
 * 上記のコメントで動く模様
 * viteの中にもwebpack入っているんだっけ・・・？
 */
/** @jsxRuntime classic */
/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);

// JSXをJSに変換する
// /** @jsxRuntime classic */
// /** @jsx Didact.createElement */
// const element = Didact.createElement(
//   "div",
//   { id: "foo" },
//   Didact.createElement("a", null, "bar"),
//   Didact.createElement("b")
// );

const container = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(container).render(element);
