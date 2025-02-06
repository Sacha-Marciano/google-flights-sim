//Librairies import
import React from "react";

export default function Navigation() {
  return (
    <div className="flex items-center">
      <button className="mx-6" onClick={() => console.log("sacha")}>
        Flights
      </button>
      <button className="">Hotels</button>
    </div>
  );
}
