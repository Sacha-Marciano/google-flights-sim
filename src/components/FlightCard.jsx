//Librairies import
import React from "react";

export default function FlightCard() {
  return (
    <div className="w-[45vw] max-w-[700px] border-2 p-2 rounded-lg border-black bg-sky-400 dark:bg-gray-700 space-y-4">
      <div className="flex justify-between">
        <div className="flex  items-end">
          <h2 className="mr-2 text-3xl font-bold">JFK </h2>
          <p className="mr-2"> to </p>
          <h2 className="mr-2 text-3xl font-bold">LDN</h2>
        </div>
        <div className="flex  items-end">
          <h3 className="mr-2 text-2xl font-semibold">260$</h3>
        </div>
      </div>
      <div className="flex">
        <h4 className="mr-2">6 h 35 m</h4>
        <p> - Direct</p>
        {/* define direct according to stopCount === 0, else show how many stops */}
      </div>
    </div>
  );
}
