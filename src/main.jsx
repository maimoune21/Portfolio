import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { withBasePath } from "@/utils/basePath"; // <-- you'll create this file (see below)

// ✅ Optional but recommended — make withBasePath globally available
window.withBasePath = withBasePath;

// ✅ Auto-patch <img> elements to prepend the correct base path
const originalCreateElement = React.createElement;
React.createElement = (type, props, ...children) => {
  if (type === "img" && props?.src && !props.src.startsWith("http") && !props.src.startsWith("data:")) {
    props = { ...props, src: withBasePath(props.src) };
  }
  return originalCreateElement(type, props, ...children);
};

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
