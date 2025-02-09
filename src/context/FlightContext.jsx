// Librairies import
import { createContext, useEffect, useState } from "react";

// API services
import { getFlightsByTrip, getFlightdetails } from "../api/rapidapi";
import { duration } from "@mui/material";

// Create context
export const FlightContext = createContext(null);

// Provider
export default function FlightProvider({ children }) {
  const [displayFlights, setDisplayFlights] = useState([]);
  const [searchQuery, setSearchQuery] = useState({});
  const [sessionId, setSessionId] = useState("");
  const [searchFlight, setSearchFlight] = useState({});
  const [flightDetails, setFlightDetails] = useState({});
  const [loading, setLoading] = useState(true);

  // Each time the user makes a query search for flights
  useEffect(() => {
    if (searchQuery.pax) {
      getFlightsByTrip(searchQuery).then((res) => {
        const flightResults = res.itineraries.map((item) => {
          const hours = Math.floor(item.legs[0].durationInMinutes / 60);
          const minutes = item.legs[0].durationInMinutes % 60;

          return {
            id: item.id,
            price: item.price.formatted,
            departCityCode: item.legs[0].origin.id,
            arrivalCityCode: item.legs[0].destination.id,
            duration: `${hours > 1 ? hours + " h" : ""} ${minutes} m`,
            stopCount: item.legs[0].stopCount,
            date: item.legs[0].departure.split("T")[0],
          };
        });
        setSessionId(res.context.sessionId);
        setDisplayFlights(flightResults);
      });
    }
  }, [searchQuery]);

  useEffect(() => {
    setLoading(true);
    if (searchFlight.itinerayId) {
      getFlightdetails(sessionId, searchFlight.itinerayId, searchFlight.legs)
        .then((res) => {
          const legs = res.legs[0];
          const hours = Math.floor(legs.duration / 60);
          const minutes = legs.duration % 60;

          setFlightDetails({
            destinationImage: res.destinationImage,
            departure: legs.departure,
            arrival: legs.arrival,
            destination: legs.destination,
            layovers: legs.layovers,
            origin: legs.origin,
            segments: legs.segments,
            duration: `${hours > 1 ? hours + " h" : ""} ${minutes} m`,
            price: res.pricingOptions[0].totalPrice + "$",
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [searchFlight]);

  return (
    <FlightContext.Provider
      value={{
        displayFlights,
        setDisplayFlights,
        searchQuery,
        setSearchQuery,
        setSearchFlight,
        flightDetails,
        loading,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
}
