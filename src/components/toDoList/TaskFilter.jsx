import { TASK_FILTERS } from "../../constants/text";
import Button from "../shared/Button";
import clsx from "clsx";

const TaskFilter = ({ activeFilter, onChange }) => {
  return (
    <div className="task-filter">
      {TASK_FILTERS.map((filter) => {
        const buttonClass = clsx("button-filter", {
          "button-filter--active": activeFilter === filter.value,
        });

        const clickHandler = () => onChange(filter.value);

        return (
          <Button
            key={filter.value}
            label={filter.label}
            onClick={clickHandler}
            className={buttonClass}
          />
        );
      })}
    </div>
  );
};

export default TaskFilter;
