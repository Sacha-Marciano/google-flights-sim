//Librairies import
import React, { useContext, useEffect, useState } from "react";

// Components
import FlightForm from "./FlightForm";
import FlightCard from "./FlightCard";

// Context
import { FlightContext } from "../context/FlightContext";

// Banner
import Banner from "../assets/banner.png";

export default function Main() {
  const { displayFlights } = useContext(FlightContext);

  return (
    <main className="h-full">
      <div className="flex flex-col relative mb-4 ">
        <img
          src={Banner}
          className="object-cover max-h-[52vh] w-full my-2 rounded-lg dark:opacity-50 "
        />
        <FlightForm />
      </div>
      <ul className="p-4 flex flex-wrap justify-around gap-4 h-[60vh] border-y-2  overflow-scroll">
        {displayFlights?.map((item) => {
          return (
            <li key={item.index}>
              <FlightCard
                departCode={item.departCityCode}
                arrivalCode={item.arrivalCityCode}
                price={item.price}
                duration={item.duration}
                stopCount={item.stopCount}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
