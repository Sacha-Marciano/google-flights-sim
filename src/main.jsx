// Librairies imports
import { createRoot } from "react-dom/client";

// Components
import App from "./App";

// Styles
import "./index.css";

// Contexts Providers
import FlightProvider from "./context/FlightContext";

createRoot(document.getElementById("root")).render(
  <FlightProvider>
    <App />
  </FlightProvider>
);
