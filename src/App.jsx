import { useState } from "react";
import "./App.css";
import Wrapper from "./components/shared/Wrapper";
import ToDoList from "./components/toDoList/ToDoList";
import FetchUsers from "./components/fetchUsers/FetchUsers";
import GithubSearch from "./components/githubSearch/GithubSearch";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("all");

  const isAddButtonDisabled = !value.trim();
  const isFilterButtonsDisabled = todos.length === 0;

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
  const filteredTodos = todos.filter((task) => {
    switch (filter) {
      case "active":
        return !task.done;
      case "done":
        return task.done;
      default:
        return true;
    }
  });

  return (
    <Wrapper>
      <ToDoList
        value={value}
        setValue={setValue}
        onAdd={handleAdd}
        todos={filteredTodos}
        filter={filter}
        setFilter={setFilter}
        isFilterButtonsDisabled={isFilterButtonsDisabled}
        isAddButtonDisabled={isAddButtonDisabled}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
      <FetchUsers />
      <GithubSearch />
    </Wrapper>
  );
};

export default App;
