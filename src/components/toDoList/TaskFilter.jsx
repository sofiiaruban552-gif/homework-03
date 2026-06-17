import { TASK_FILTERS } from "../../constants/text";
import Button from "../shared/Button";
import clsx from "clsx";

const TaskFilter = ({ activeFilter, onChange, disabled }) => {
  const getButtonClass = (isActive) =>
    clsx("button-filter", isActive && "button-filter--active");

  return (
    <div className="task-filter">
      {TASK_FILTERS.map(({ value, label }) => {
        return (
          <Button
            key={value}
            label={label}
            onClick={() => onChange(value)}
            className={getButtonClass(activeFilter === value)}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
};

export default TaskFilter;
