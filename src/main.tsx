
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./tailwind.css";
import App from "./App.js";

const element = document.getElementById("root");

if (element) {
  const root = createRoot(element);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
