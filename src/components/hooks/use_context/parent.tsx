import { useState } from "react";
import { Child1 } from "./child_1";
import { Child2 } from "./child_2";
import { Theme, defaultTheme, ThemeContext } from "./theme_object";

export const Parent = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    setCurrentTheme(() => {
      const newColours = () => {
        return darkTheme ? ["#333", "white"] : ["#ccc", "#333"];
      };

      const newTheme: Theme = {
        backgroundColor: newColours()[0],
        color: newColours()[1],
        padding: currentTheme.padding,
        margin: currentTheme.margin,
      };
      return newTheme;
    });
  };

  return (
    <div className="section">
      <h2>useContext</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ThemeContext.Provider value={currentTheme}>
        <Child1 />
        <Child2 />
      </ThemeContext.Provider>
    </div>
  );
};
