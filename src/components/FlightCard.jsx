//Librairies import
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { FlightContext } from "../context/FlightContext";

export default function FlightCard({
  departCode,
  arrivalCode,
  price,
  duration,
  stopCount,
  itinerayId,
  date,
}) {
  const { setSearchFlight } = useContext(FlightContext);

  const handleNavigation = () => {
    setSearchFlight({
      itinerayId: itinerayId,
      legs: {
        destination: arrivalCode,
        origin: departCode,
        date: date,
      },
    });
  };

  return (
    <Link to={`/details/${itinerayId}`} onClick={handleNavigation}>
      <div className="  border-2 p-2 rounded-lg border-black bg-sky-400 dark:bg-gray-700 space-y-4 shadow-xl">
        <div className="flex justify-between">
          <div className="flex  items-end">
            <h2 className="mr-2 text-3xl font-bold">{departCode}</h2>
            <p className="mr-2"> to </p>
            <h2 className="mr-2 text-3xl font-bold">{arrivalCode}</h2>
          </div>
          <div className="flex  items-end">
            <h3 className="mr-2 text-2xl font-semibold">{price}</h3>
          </div>
        </div>
        <div className="flex">
          <h4 className="mr-2">{duration}</h4>
          <p> - {stopCount === 0 ? "Direct" : `${stopCount} stops`}</p>
        </div>
      </div>
    </Link>
  );
}
