// React ============================================
import React, { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";

// Components ============================================
import App from "./app/js/App.jsx";

// Render ============================================
const domNode = document.getElementById("_root")
const ssr = renderToString(React.createElement(App));
domNode.innerHTML = ssr;

const render = () => {
  hydrateRoot(domNode, <StrictMode><App /></StrictMode>);
}

render();