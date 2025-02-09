//Librairies import
import React, { useContext, useEffect, useState } from "react";
import { FlightContext } from "../context/FlightContext";

// Context

export default function FlightDetailsPage() {
  const [buttonText, setButtonText] = useState("Book Now !");

  const { flightDetails, loading } = useContext(FlightContext);

  const {
    destinationImage,
    departure,
    arrival,
    destination,
    layovers,
    origin,
    segments,
    duration,
  } = flightDetails;

  const handleBooking = () => {
    setButtonText("Booked !");
  };

  const setDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours > 1 ? hours + " h" : ""} ${minutes} m`;
  };

  return loading ? (
    <div>
      <h1>Loading</h1>
    </div>
  ) : (
    <div className="flex flex-col items-center relative gap-4 pb-4">
      <img
        src={destinationImage}
        alt="Destination Image"
        className=" dark:opacity-50"
      />
      <div className=" flex flex-col items-center relative bottom-10 bg-white dark:bg-gray-500 rounded-full p-4">
        <h1 className="text-3xl font-bold">
          Your flight to {destination?.city}
        </h1>
        <p className=" text-2xl">Duration : {duration ? duration : ""} </p>
        <p className="text-xl">
          {layovers?.length > 0 ? layovers.length + " stops" : "Direct"}
        </p>
      </div>
      {segments?.map((item, index) => {
        return (
          <div
            key={index}
            className=" w-full border-2 border-sky-400 dark:border-gray-500 p-4 rounded-lg flex flex-col items-center gap-2"
          >
            <h2 className="text-2xl text-center font-bold">
              Flight from {item.origin.name}
            </h2>
            <p>
              Departure :{item.departure.split("T")[0]} at{" "}
              {item.departure.split("T")[1]}
            </p>
            <p>Flight Number : {item.flightNumber}</p>
            <p>Duration : {setDuration(item.duration)} </p>
            <h2 className="text-2xl text-center font-bold">
              Land in {item.destination.name}
            </h2>
            <p>
              Arrival : {item.arrival.split("T")[0]} at{" "}
              {item.arrival.split("T")[1]}
            </p>
            {index < segments.length - 1 ? (
              <div>
                <h3 className="text-xl font-bold text-sky-600">
                  Layover : {setDuration(layovers[index]?.duration)}
                </h3>
              </div>
            ) : (
              ""
            )}
          </div>
        );
      })}
      <button
        onClick={handleBooking}
        disabled={buttonText === "Booked !"}
        className="text-3xl bg-sky-400 dark:bg-gray-500 font-bold rounded-lg p-4 disabled:opacity-50"
      >
        {buttonText}
      </button>
    </div>
  );
}
