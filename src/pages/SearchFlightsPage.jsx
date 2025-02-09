//Librairies import
import React, { useContext, useEffect, useState } from "react";

// Components
import FlightForm from "../components/FlightForm";
import FlightCard from "../components/FlightCard";

// Context
import { FlightContext } from "../context/FlightContext";

// Banner
import Banner from "../assets/banner.png";
import LoadingComponent from "../components/LoadingComponent";

export default function SearchFlightsPage() {
  const { displayFlights, loading } = useContext(FlightContext);

  return (
    <main className="">
      <div className="flex flex-col relative mb-4 ">
        <img
          src={Banner}
          className="object-cover max-h-[50vh] w-full my-2 rounded-lg dark:opacity-50 "
        />
        <FlightForm />
      </div>
      {loading ? (
        <LoadingComponent />
      ) : displayFlights.length > 0 ? (
        <ul className="h-full p-4  gap-4 border-b-2 space-y-4 ">
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
      ) : (
        <div className="text-white font-bold p-4 flex flex-col items-center gap-4 space-y-4 bg-orange-400 dark:bg-gray-500 rounded-lg m-4">
          <h1 className="text-3xl">Start now !</h1>
          <p className="text-xl">
            Enter your travel search to find the chepeast flights !
          </p>
        </div>
      )}
    </main>
  );
}
