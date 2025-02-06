// Librairies imports
import { useEffect, useState } from "react";

// Icons
import { DarkMode } from "@mui/icons-material";
import { LightMode } from "@mui/icons-material";

const ThemeToggle = () => {
  // Detect system preference from browser
  const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  // Get saved theme or system preference
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || getSystemTheme()
  );

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <DarkMode /> : <LightMode />}
    </button>
  );
};

export default ThemeToggle;
