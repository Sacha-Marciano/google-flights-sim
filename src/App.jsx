// Librairies imports
import { useContext, useEffect, useState } from "react";

// Components
import Header from "./components/Header";

// Contexts
import { ThemeContext } from "./contexts/ThemeContext";
import Main from "./components/Main";

// API instances

// Methods

function App() {
  const { changeTheme } = useContext(ThemeContext);

  return (
    <div className="h-[100vh] dark:bg-gray-900 dark:text-white">
      <Header onThemeChange={changeTheme} />
      <Main />
    </div>
  );
}

export default App;
