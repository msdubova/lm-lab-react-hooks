import { useContext } from "react";
import { ThemeContext } from "./theme_object";

export const Child2: React.FC = () => {
  const theme = useContext(ThemeContext);

  return <div style={theme}>Child 2</div>;
};
