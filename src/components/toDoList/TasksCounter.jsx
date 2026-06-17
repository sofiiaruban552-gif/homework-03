import { TASK_HEADINGS } from "../../constants/text";

const TasksCounter = ({ tasksCount }) => {
  if (!tasksCount) {
    return <span>{TASK_HEADINGS.TODO_LIST.labels.noTasks}</span>;
  }

  return (
    <span>
      {TASK_HEADINGS.TODO_LIST.labels.tasks} {tasksCount}
    </span>
  );
};

export default TasksCounter;
