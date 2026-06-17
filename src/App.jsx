import { useState } from "react";
import "./App.css";
import Wrapper from "./components/shared/Wrapper";
import ToDoList from "./components/toDoList/ToDoList";
import FetchUsers from "./components/fetchUsers/FetchUsers";
import GithubSearch from "./components/githubSearch/GithubSearch";

import useFetch from "./hooks/useFetch";
import useDebounce from "./hooks/useDebounce";
import useTodos from "./hooks/useTodos";
import useTodoActions from "./hooks/useTodoActions";
import useTodoFilter from "./hooks/useTodoFilter";

import { API_URLS } from "./constants/api";

const App = () => {
  const { todos, setTodos } = useTodos();

  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const { handleAdd, handleToggle, handleDelete } = useTodoActions(
    todos,
    setTodos,
    value,
    setValue,
  );

  const { filteredTodos } = useTodoFilter(todos, filter);

  const { data: users, loading, error } = useFetch(API_URLS.USERS);

  const debouncedQuery = useDebounce(query);
  const {
    data: searchedData,
    loading: githubLoading,
    error: githubError,
  } = useFetch(
    debouncedQuery.trim()
      ? `${API_URLS.GITHUB_SEARCH}${debouncedQuery.trim()}`
      : null,
  );

  const isAddButtonDisabled = !value.trim();
  const isFilterButtonsDisabled = todos.length === 0;

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
        tasksCount={filteredTodos.length}
      />
      <FetchUsers users={users} loading={loading} error={error} />
      <GithubSearch
        query={query}
        setQuery={setQuery}
        searchedData={searchedData.items}
        loading={githubLoading}
        error={githubError}
      />
    </Wrapper>
  );
};

export default App;
