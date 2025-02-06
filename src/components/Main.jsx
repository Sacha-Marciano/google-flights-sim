//Librairies import
import React, { useEffect, useState } from "react";

// Components
import FlightForm from "./FlightForm";
import FlightCard from "./FlightCard";

// Banner
import Banner from "../assets/banner.png";

// API services
import { getFlights } from "../api/rapidapi";

export default function Main() {
  const [flights, setFlights] = useState([]);
  // useEffect(() => {
  //   getFlights().then((res) => console.log(res.data.data.itineraries));
  // }, []);
  return (
    <main className="overflow-scroll">
      <div className="flex flex-col relative mb-4">
        <img
          src={Banner}
          className="object-cover max-h-[45vh] w-full my-2 rounded-lg dark:opacity-50 "
        />
        <FlightForm />
      </div>
      <ul className="p-4 flex flex-wrap justify-around gap-4  ">
        <li>
          <FlightCard />
        </li>
        <li>
          <FlightCard />
        </li>
        <li>
          <FlightCard />
        </li>
      </ul>
    </main>
  );
}
