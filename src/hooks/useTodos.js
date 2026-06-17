import { useState } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  return { todos, setTodos };
};

export default useTodos;
