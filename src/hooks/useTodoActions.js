const useTodoActions = (todos, setTodos, value, setValue) => {
  const handleAdd = () => {
    if (!value.trim()) return;

    const newTask = {
      id: Date.now(),
      text: value,
      done: false,
    };

    setTodos((prev) => [...prev, newTask]);
    setValue("");
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((task) => task.id !== id));
  };

  return {
    handleAdd,
    handleToggle,
    handleDelete,
  };
};

export default useTodoActions;
