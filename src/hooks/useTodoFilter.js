import { useMemo } from "react";

const useTodoFilter = (todos, filter) => {
  const filteredTodos = useMemo(() => {
    return todos.filter((task) => {
      switch (filter) {
        case "active":
          return !task.done;
        case "done":
          return task.done;
        default:
          return true;
      }
    });
  }, [todos, filter]);

  return {
    filteredTodos,
  };
};

export default useTodoFilter;
