// Librairies imports
import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";

// Pages
import SearchFlightsPage from "./pages/SearchFlightsPage";
import SearchHotelsPage from "./pages/SearchHotelPage";
import FlightDetailsPage from "./pages/FlightDetailsPage";

// Contexts

// API instances

// Methods

function App() {
  return (
    <div className="min-h-[100vh] bg-orange-300 dark:bg-gray-900 dark:text-white">
      <Header />
      <Routes>
        <Route path="/" element={<SearchFlightsPage />} />
        <Route path="/hotels" element={<SearchHotelsPage />} />
        <Route path="/details/:id" element={<FlightDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
