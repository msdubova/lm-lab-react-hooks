import { useContext } from "react";
import { ThemeContext } from "./theme_object";

export const Child1: React.FC = () => {
  const theme = useContext(ThemeContext);

  return <div style={theme}>Child 1</div>;
};
