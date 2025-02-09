//Librairies import
import React, { useContext, useEffect, useState } from "react";

// Components
import FlightForm from "../components/FlightForm";
import FlightCard from "../components/FlightCard";

// Context
import { FlightContext } from "../context/FlightContext";

// Banner
import Banner from "../assets/banner.png";

export default function SearchFlightsPage() {
  const { displayFlights } = useContext(FlightContext);

  return (
    <main className="">
      <div className="flex flex-col relative mb-4 ">
        <img
          src={Banner}
          className="object-cover max-h-[40vh] w-full my-2 rounded-lg dark:opacity-50 "
        />
        <FlightForm />
      </div>
      <ul className="h-full p-4 justify-around gap-4 border-b-2 space-y-4 ">
        {displayFlights?.map((item, index) => {
          return (
            <li key={index}>
              <FlightCard
                departCode={item.departCityCode}
                arrivalCode={item.arrivalCityCode}
                price={item.price}
                duration={item.duration}
                stopCount={item.stopCount}
                itinerayId={item.id}
                date={item.date}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
