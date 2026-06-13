import Input from "../shared/Input";
import { INPUT_PLACEHOLDERS, BUTTON_LABELS } from "../../constants/text";

const TaskInput = ({ value, onChange, onAdd }) => {
  return (
    <div className="task-input">
      <Input
        value={value}
        placeholder={INPUT_PLACEHOLDERS.NEW_TASK}
        onChange={onChange}
      />

      <button onClick={onAdd}>{BUTTON_LABELS.ADD}</button>
    </div>
  );
};

export default TaskInput;
