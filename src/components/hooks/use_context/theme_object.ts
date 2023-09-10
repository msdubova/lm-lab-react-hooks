import { createContext } from "react";
export interface Theme {
  backgroundColor: string;
  color: string;
  padding: string;
  margin: string;
}

const darkTheme = false;

export const defaultTheme: Theme = {
  backgroundColor: darkTheme ? "#333" : "#CCC",
  color: darkTheme ? "white" : "#333",
  padding: "2rem",
  margin: "2rem",
};

export const ThemeContext = createContext<Theme>(defaultTheme);
