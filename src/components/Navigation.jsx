//Librairies import
import React from "react";

export default function Navigation() {
  return (
    <div className="pb-3 flex align-middle">
      <h1 className="text-3xl font-bold">Google</h1>
      <button className="mx-6" onClick={() => console.log("sacha")}>
        Flights
      </button>
      <button className="">Hotels</button>
    </div>
  );
}
