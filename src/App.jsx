import { useState } from "react";
import "./App.css";
import Wrapper from "./components/shared/Wrapper";
import ToDoList from "./components/toDoList/ToDoList";
import FetchUsers from "./components/fetchUsers/FetchUsers";
import GithubSearch from "./components/githubSearch/GithubSearch";

const App = () => {
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (!value.trim()) return;

    console.log("Task added:", value);
    setValue("");
  };

  return (
    <Wrapper>
      <ToDoList value={value} setValue={setValue} onAdd={handleAdd} />
      <FetchUsers />
      <GithubSearch />
    </Wrapper>
  );
};

export default App;
