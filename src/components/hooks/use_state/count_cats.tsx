import { useState } from "react";

export function CountCats() {
  // const cats = ["🐈"].length;
  const [count, setCount] = useState<Array<string>>(["🐈"]);
  const incrementCats = () => {
    setCount([...count, "🐈"]);
  };

  return (
    <>
      <h2>useState</h2>

      <p>
        {count.map(() => {
          return "🐈";
        })}{" "}
        cats{" "}
      </p>

      <button onClick={incrementCats}>There are {count} cats 🥳</button>
    </>
  );
}
