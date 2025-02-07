// Librairies import
import { createContext, useEffect, useState } from "react";

// API services
import { getFlightsByTrip } from "../api/rapidapi";

// Create context
export const FlightContext = createContext(null);

// Provider
export default function FlightProvider({ children }) {
  const [displayFlights, setDisplayFlights] = useState([]);
  const [searchQuery, setSearchQuery] = useState({});

  // Each time the user makes a query search for flights
  useEffect(() => {
    if (searchQuery.pax) {
      getFlightsByTrip(searchQuery).then((res) => {
        const flightResults = res.map((item) => {
          const hours = Math.floor(item.legs[0].durationInMinutes / 60);
          const minutes = item.legs[0].durationInMinutes % 60;

          return {
            id: item.id,
            price: item.price.formatted,
            departCityCode: item.legs[0].origin.id,
            arrivalCityCode: item.legs[0].destination.id,
            duration: `${hours > 1 ? hours + " h" : ""} ${minutes} m`,
            stopCount: item.legs[0].stopCount,
          };
        });
        setDisplayFlights(flightResults);
      });
    }
  }, [searchQuery]);

  return (
    <FlightContext.Provider
      value={{ displayFlights, setDisplayFlights, searchQuery, setSearchQuery }}
    >
      {children}
    </FlightContext.Provider>
  );
}
