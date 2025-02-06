import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ children }) {
  // UseState
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    const app = document.querySelector(".class");
    const themeToBe = theme === "dark" ? "light" : "dark";
    app.setAttribute("class", `class ${themeToBe}`);
    setTheme(themeToBe);
    console.log(app);
  };

  return (
    <ThemeContext.Provider value={{ changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
