import { useTodo } from './use_todo';

export const Todo = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const { data, isFetching } = useTodo(url);

  return (
    <>
      <h2>Custom Hook</h2>

      {isFetching ? <p>Fetching...</p> : <p>{data?.title}</p>}
    </>
  );
};
