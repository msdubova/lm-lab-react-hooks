import { useState, createContext } from "react";
import { Child1 } from "./child_1";
import { Child2 } from "./child_2";

export const ThemeContext = createContext(true);

export const Parent = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <div className="section">
      <h2>useContext</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ThemeContext.Provider value={darkTheme}>
        <Child1 />
        <Child2 />
      </ThemeContext.Provider>
    </div>
  );
};
