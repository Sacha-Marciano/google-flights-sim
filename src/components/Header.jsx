//Librairies import
import React from "react";

// Components
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle ";
// import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <div className="w-full pb-3 flex align-middle justify-around">
      <h1 className="text-3xl font-bold">Google</h1>
      <Navigation />
      <ThemeToggle />
    </div>
  );
}
