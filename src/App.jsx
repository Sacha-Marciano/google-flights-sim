// Librairies imports
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import SearchFlightsPage from "./pages/SearchFlightsPage";
import SearchHotelsPage from "./pages/SearchHotelPage";
import FlightDetailsPage from "./pages/FlightDetailsPage";

function App() {
  return (
    <div className="min-h-[100vh] bg-orange-300 dark:bg-gray-900 dark:text-white">
      <Header />
      <Routes>
        <Route path="/" element={<SearchFlightsPage />} />
        <Route path="/hotels" element={<SearchHotelsPage />} />
        <Route path="/details/:id" element={<FlightDetailsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
