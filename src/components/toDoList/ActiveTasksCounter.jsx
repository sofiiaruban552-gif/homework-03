import { TASK_HEADINGS } from "../../constants/text";

const ActiveTasksCounter = ({ activeTasksCount }) => {
  return (
    <span>
      {activeTasksCount > 0
        ? `${TASK_HEADINGS.TODO_LIST.labels.activeTasks} ${activeTasksCount}`
        : TASK_HEADINGS.TODO_LIST.labels.noActiveTasks}
    </span>
  );
};

export default ActiveTasksCounter;
