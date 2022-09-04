import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// React要素
const element = React.createElement("h1", null, "Hello");
// DOM取得
const container = document.getElementById("root") as HTMLElement;

// Reactをコンテナにレンダリング
ReactDOM.createRoot(container).render(<React.StrictMode>{element}</React.StrictMode>);
