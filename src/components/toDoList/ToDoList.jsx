import SectionCard from "../shared/SectionCard";
import { TASK_HEADINGS } from "../../constants/text";

const ToDoList = () => {
  return (
    <SectionCard>
      <h1 className="section-title">{TASK_HEADINGS.TODO_LIST.title}</h1>
      <h2 className="section-subtitle">{TASK_HEADINGS.TODO_LIST.subtitle}</h2>
    </SectionCard>
  );
};

export default ToDoList;
