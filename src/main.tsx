import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// React要素
const element = <h1>Hello</h1>;
// DOM取得
const container = document.getElementById("root") as HTMLElement;

// Reactをコンテナにレンダリング
ReactDOM.createRoot(container).render(<React.StrictMode>{element}</React.StrictMode>);
