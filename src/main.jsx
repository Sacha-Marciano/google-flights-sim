// Librairies imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Components
import App from "./components/App";

// Styles
import "./index.css";

// Contexts

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
