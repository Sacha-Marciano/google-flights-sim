//Librairies import
import React from "react";

// Components
import FlightForm from "./FlightForm";

// Banner
import Banner from "../assets/banner.png";

export default function Main() {
  return (
    <div className="flex flex-col relative">
      <img
        src={Banner}
        className="object-cover max-h-[45vh] w-full my-2 rounded-lg dark:opacity-50 "
      />
      <FlightForm />
    </div>
  );
}
