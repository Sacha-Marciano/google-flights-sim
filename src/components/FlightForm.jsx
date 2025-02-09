//Librairies import
import React, { useContext, useState } from "react";

// Components
import CustomAutocomplete from "./CustomAutocomplete";

//Context
import { FlightContext } from "../context/FlightContext";

// MUI Icons
import RepeatOnIcon from "@mui/icons-material/RepeatOn";
import PersonIcon from "@mui/icons-material/Person";
import FlightClassIcon from "@mui/icons-material/FlightClass";
import { Search } from "@mui/icons-material";

export default function FlightForm() {
  const [inputs, setInputs] = useState({
    trip: "round trip",
    pax: "0",
    flightClass: "economy",
  });

  // Context subscription
  const { setSearchQuery } = useContext(FlightContext);

  const handleInputChange = (name, value) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSearchQuery(inputs);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 pb-8 space-y-4 border-black dark:border-gray-400  border-b-2 rounded-lg flex flex-col items-center absolute bottom-2 w-full"
    >
      <h1 className="text-6xl font-extralight text-sky-700  dark:text-gray-300 mb-8">
        Flights
      </h1>
      {/* selects */}
      <div className="flex gap-2 items-center justify-center ">
        {/* Round Trip select */}
        <label htmlFor="trip-select">{<RepeatOnIcon />}</label>
        <select
          className="p-2 rounded-md mr-4  dark:text-gray-600"
          id="trip-select"
          value={inputs?.trip}
          label="Round trip"
          name="trip"
          onChange={(evt) => {
            handleInputChange(evt.target.name, evt.target.value);
          }}
        >
          <option value={"round trip"}>Round Trip</option>
          <option value={"one way"}>One Way</option>
        </select>
        {/* Passenger select */}
        <label htmlFor="pax-count">
          <PersonIcon />
        </label>
        <select
          className="p-2 rounded-md mr-4 dark:text-gray-600"
          id="pax-count"
          value={inputs?.pax}
          label="Pax Count"
          name="pax"
          onChange={(evt) => {
            handleInputChange(evt.target.name, evt.target.value);
          }}
        >
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <option value={`${index}`} key={index}>
                {index + 1}
              </option>
            ))}
        </select>
        {/* Class select */}
        <label htmlFor="flightClass">
          <FlightClassIcon />
        </label>
        <select
          className="dark:text-gray-600 p-2 rounded-md"
          id="flightClass"
          value={inputs?.class || "economy"}
          label="Flight Class"
          name="flightClass"
          onChange={(evt) => {
            handleInputChange(evt.target.name, evt.target.value);
          }}
        >
          <option value={"economy"}>Economy</option>
          <option value={"premium"}>Premium</option>
          <option value={"business"}>Business</option>
        </select>
      </div>
      {/* Inputs */}
      <div className="flex flex-col md:flex-row  items-center justify-center dark:text-gray-600">
        <CustomAutocomplete
          onChange={handleInputChange}
          custom={{ label: "Where from ?", name: "departCity" }}
        />
        <CustomAutocomplete
          onChange={handleInputChange}
          custom={{ label: "Where to ?", name: "arrivalCity" }}
        />
        <div className="flex">
          <input
            type="date"
            id="depart-date"
            placeholder="Departure date"
            name="departDate"
            onChange={(evt) => {
              handleInputChange(evt.target.name, evt.target.value);
            }}
            className="p-2 rounded-l-lg h-[56px] ml-[6px] md:ml-0"
            required
          />
          <input
            type="date"
            id="return-date"
            placeholder="Return date"
            name="returnDate"
            onChange={(evt) => {
              handleInputChange(evt.target.name, evt.target.value);
            }}
            className="p-2 rounded-r-lg  h-[56px]"
            disabled={inputs?.trip === "one way"}
            required
          />
        </div>
      </div>
      {/* Submit */}
      <button
        type="submit"
        className="rounded-full bg-sky-400 p-2 justify-self-end text-white dark:text-gray-900 absolute -bottom-5"
      >
        <Search />
        Explore
      </button>
    </form>
  );
}
