import SectionCard from "../shared/SectionCard";
import { TASK_HEADINGS } from "../../constants/text";
import TaskInput from "./TaskInput";
import TaskFilter from "./TaskFilter";
import TaskList from "./TaskList";
import TasksCounter from "./TasksCounter";

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
  tasksCount,
}) => {
  return (
    <SectionCard>
      <h2 className="section-title">{TASK_HEADINGS.TODO_LIST.title}</h2>
      <h3 className="section-subtitle">{TASK_HEADINGS.TODO_LIST.subtitle}</h3>
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
      <TasksCounter tasksCount={tasksCount} />
    </SectionCard>
  );
};

export default ToDoList;
