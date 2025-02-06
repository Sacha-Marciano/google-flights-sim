//Librairies import
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";

// MUI Icons
import RepeatOnIcon from "@mui/icons-material/RepeatOn";
import PersonIcon from "@mui/icons-material/Person";
import FlightClassIcon from "@mui/icons-material/FlightClass";

export default function FlightForm() {
  const [inputs, setInputs] = useState({});

  const handleInputChange = (evt) => {
    setInputs({
      ...inputs,
      [evt.target.name]: evt.target.value,
    });
  };

  return (
    <div className="p-4 space-y-4 border-black border-2 rounded-lg">
      {/* Selects */}
      <div className="flex gap-2 items-center justify-center">
        {/* Round Trip Select */}
        <InputLabel id="round-trip">{<RepeatOnIcon />}</InputLabel>
        <Select
          className="mr-4"
          labelId="round-trip"
          id="trip-select"
          value={inputs?.trip || "round trip"}
          label="Round trip"
          name="trip"
          onChange={handleInputChange}
        >
          <MenuItem value={"round trip"}>Round Trip</MenuItem>
          <MenuItem value={"one way"}>One Way</MenuItem>
        </Select>
        {/* Passenger Select */}
        <InputLabel id="pax-count">
          <PersonIcon />
        </InputLabel>
        <Select
          className="mr-4"
          labelId="pax-count"
          id="pax-select"
          value={inputs?.pax || "1"}
          label="Pax Count"
          name="pax"
          onChange={handleInputChange}
        >
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"6"}>6</MenuItem>
          <MenuItem value={"7"}>7</MenuItem>
          <MenuItem value={"8"}>8</MenuItem>
          <MenuItem value={"9"}>9</MenuItem>
          <MenuItem value={"10"}>10</MenuItem>
        </Select>
        {/* Class Select */}
        <InputLabel id="class">
          <FlightClassIcon />
        </InputLabel>
        <Select
          labelId="class"
          id="class-select"
          value={inputs?.class || "economy"}
          label="Class"
          name="class"
          onChange={handleInputChange}
        >
          <MenuItem value={"economy"}>Economy</MenuItem>
          <MenuItem value={"premium"}>Premium</MenuItem>
          <MenuItem value={"business"}>Business</MenuItem>
        </Select>
      </div>
      {/* Inputs */}
      <div className="flex gap-2 items-center justify-center">
        <TextField
          id="depart-city"
          label="From where"
          variant="outlined"
          name="departCity"
          onChange={handleInputChange}
        />
        <TextField
          id="arrival-city"
          label="Where to"
          variant="outlined"
          name="arrivalCity"
          onChange={handleInputChange}
        />
        <span className="w-[10px]" />
        <TextField
          id="depart-date"
          label="Departure date"
          variant="outlined"
          name="departDate"
          onChange={handleInputChange}
        />
        <TextField
          id="return-date"
          label="Return date"
          variant="outlined"
          name="returnDate"
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
