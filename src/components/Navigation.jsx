//Librairies import
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="flex items-center md:text-3xl font-semibold text-sky-400 ">
      <Link
        to="/"
        className="mx-3 md:mx-6 hover:text-black dark:hover:text-white"
      >
        Flights
      </Link>
      <Link to="/hotels" className="hover:text-black dark:hover:text-white">
        Hotels
      </Link>
    </div>
  );
}
