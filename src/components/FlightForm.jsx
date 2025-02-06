//Librairies import
import React, { useState } from "react";

// MUI Icons
import RepeatOnIcon from "@mui/icons-material/RepeatOn";
import PersonIcon from "@mui/icons-material/Person";
import FlightClassIcon from "@mui/icons-material/FlightClass";
import { Search } from "@mui/icons-material";

export default function FlightForm() {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (evt) => {
    setInputs({
      ...inputs,
      [evt.target.name]: evt.target.value,
    });
    console.log(inputs);
  };

  return (
    <div className="p-4 pb-8 space-y-4 border-black dark:border-gray-400  border-b-2 rounded-lg flex flex-col items-center absolute bottom-2 w-full">
      <h1 className="text-6xl font-extralight text-sky-700  dark:text-gray-300 mb-8">
        Flights
      </h1>
      {/* selects */}
      <div className="flex gap-2 items-center justify-center ">
        {/* Round Trip select */}
        <label htmlFor="trip-select">{<RepeatOnIcon />}</label>
        <select
          className="mr-4 dark:text-gray-600"
          id="trip-select"
          value={inputs?.trip || "round trip"}
          label="Round trip"
          name="trip"
          onChange={handleInputChange}
        >
          <option value={"round trip"}>Round Trip</option>
          <option value={"one way"}>One Way</option>
        </select>
        {/* Passenger select */}
        <label htmlFor="pax-count">
          <PersonIcon />
        </label>
        <select
          className=" mr-4 dark:text-gray-600"
          id="pax-count"
          value={inputs?.pax || "1"}
          label="Pax Count"
          name="pax"
          onChange={handleInputChange}
        >
          <option value={"1"}>1</option>
          <option value={"2"}>2</option>
          <option value={"3"}>3</option>
          <option value={"4"}>4</option>
          <option value={"5"}>5</option>
          <option value={"6"}>6</option>
          <option value={"7"}>7</option>
          <option value={"8"}>8</option>
          <option value={"9"}>9</option>
          <option value={"10"}>10</option>
        </select>
        {/* Class select */}
        <label htmlFor="class">
          <FlightClassIcon />
        </label>
        <select
          className="dark:text-gray-600"
          id="class"
          value={inputs?.class || "economy"}
          label="Class"
          name="class"
          onChange={handleInputChange}
        >
          <option value={"economy"}>Economy</option>
          <option value={"premium"}>Premium</option>
          <option value={"business"}>Business</option>
        </select>
      </div>
      {/* Inputs */}
      <div className="flex items-center justify-center dark:text-gray-600">
        <input
          id="depart-city"
          placeholder="From where ?"
          variant="outlined"
          name="departCity"
          onChange={handleInputChange}
          className="p-2 rounded-l-lg"
        />
        <input
          id="arrival-city"
          placeholder="Where to ?"
          variant="outlined"
          name="arrivalCity"
          onChange={handleInputChange}
          className="p-2 rounded-r-lg mr-4"
        />
        <input
          id="depart-date"
          placeholder="Departure date"
          name="departDate"
          onChange={handleInputChange}
          className="p-2 rounded-l-lg"
        />
        <input
          id="return-date"
          placeholder="Return date"
          name="returnDate"
          onChange={handleInputChange}
          className="p-2 rounded-r-lg"
          disabled={inputs?.trip === "one way"}
        />
      </div>
      {/* Submit */}
      <button className="rounded-full bg-sky-400 p-2 justify-self-end text-white dark:text-gray-900 absolute -bottom-5">
        <Search />
        Explore
      </button>
    </div>
  );
}
