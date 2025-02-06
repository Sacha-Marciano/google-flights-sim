// Librairies imports
import { createRoot } from "react-dom/client";

// Components
import App from "./App";

// Styles
import "./index.css";

// Contexts Providers
import ThemeProvider from "./contexts/ThemeContext";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
