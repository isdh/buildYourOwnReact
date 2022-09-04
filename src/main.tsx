import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const element = <h1>Hello</h1>;
const container = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(container).render(<React.StrictMode>{element}</React.StrictMode>);
