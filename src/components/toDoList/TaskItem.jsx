import clsx from "clsx";
import { Trash2 } from "lucide-react";
import ButtonIcon from "../shared/ButtonIcon";

const TaskItem = ({ task, onToggle, onDelete }) => {
  const labelClassName = clsx("task-item__label", {
    "task-item__label--done": task.done,
  });

  return (
    <li className="task-item">
      <input
        type="checkbox"
        id={task.id}
        checked={task.done}
        onChange={() => onToggle(task.id)}
      />

      <label htmlFor={task.id} className={labelClassName}>
        {task.text}
      </label>

      <ButtonIcon
        onClick={() => onDelete(task.id)}
        icon={<Trash2 size={18} />}
      />
    </li>
  );
};

export default TaskItem;
