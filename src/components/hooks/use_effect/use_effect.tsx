// make an api call using useEffect

import { useState, useEffect } from "react";

interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const APICall = () => {
    const [data, setData] = useState<ToDo | null>(null);
  
    useEffect(() => {
      const fetchToDo = async () => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchToDo();
    }, []);
  
    return (
      <>
        <h2>useEffect</h2>
        <p>Result:</p>
        {data ? (
          <div>
            <ul className="task-list">
              <li>
                <p>completed: {data.completed ? "true" : "false"}</p>
                <p>user: {data.userId}</p>
                <p>task: {data.id}</p>
                <p>title: {data.title}</p>
              </li>
            </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </>
    );
  };