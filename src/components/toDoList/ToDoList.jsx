import SectionCard from "../shared/SectionCard";
import { TASK_HEADINGS } from "../../constants/text";
import TaskInput from "./TaskInput";
import TaskFilter from "./TaskFilter";
import TaskList from "./TaskList";

const ToDoList = ({ value, setValue, onAdd }) => {
  return (
    <SectionCard>
      <h1 className="section-title">{TASK_HEADINGS.TODO_LIST.title}</h1>
      <h2 className="section-subtitle">{TASK_HEADINGS.TODO_LIST.subtitle}</h2>
      <TaskInput value={value} onChange={setValue} onAdd={onAdd} />
      <TaskFilter />
      <TaskList />
    </SectionCard>
  );
};

export default ToDoList;
