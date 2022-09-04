import ReactDOM from "react-dom/client";

const element = (
  <div id="foo">
    <a>bar</a>
    <b />
  </div>
);

const container = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(container).render(element);
