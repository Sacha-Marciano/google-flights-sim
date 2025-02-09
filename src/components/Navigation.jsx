//Librairies import
import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="flex items-center text-3xl font-semibold text-sky-400 ">
      <Link to="/" className="mx-6 hover:text-black dark:hover:text-white">
        Flights
      </Link>
      <Link to="/hotels" className="hover:text-black dark:hover:text-white">
        Hotels
      </Link>
    </div>
  );
}
