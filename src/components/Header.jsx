//Librairies import
import { Link } from "react-router-dom";

// Components
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle ";

export default function Header() {
  return (
    <div className="w-full p-4 flex align-middle ">
      <Link to="/" className="text-xl md:text-5xl font-bold text-sky-400">
        GoogleLike
      </Link>
      <div className="flex justify-between flex-1">
        <Navigation />
        <ThemeToggle />
      </div>
    </div>
  );
}
