// Librairies imports
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Components
import App from "./App";

// Styles
import "./index.css";

// Contexts Providers
import FlightProvider from "./context/FlightContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FlightProvider>
      <App />
    </FlightProvider>
  </BrowserRouter>
);
