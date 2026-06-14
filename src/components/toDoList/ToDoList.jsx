import SectionCard from "../shared/SectionCard";
import { TASK_HEADINGS } from "../../constants/text";
import TaskInput from "./TaskInput";
import TaskFilter from "./TaskFilter";
import TaskList from "./TaskList";
import ActiveTasksCounter from "./ActiveTasksCounter";

const ToDoList = ({
  value,
  setValue,
  onAdd,
  todos,
  filter,
  setFilter,
  isAddButtonDisabled,
  isFilterButtonsDisabled,
  handleToggle,
  handleDelete,
}) => {
  return (
    <SectionCard>
      <h1 className="section-title">{TASK_HEADINGS.TODO_LIST.title}</h1>
      <h2 className="section-subtitle">{TASK_HEADINGS.TODO_LIST.subtitle}</h2>
      <TaskInput
        value={value}
        onChange={setValue}
        onAdd={onAdd}
        disabled={isAddButtonDisabled}
      />
      <TaskFilter
        activeFilter={filter}
        onChange={setFilter}
        disabled={isFilterButtonsDisabled}
      />
      <TaskList
        todos={todos}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
      <ActiveTasksCounter />
    </SectionCard>
  );
};

export default ToDoList;
