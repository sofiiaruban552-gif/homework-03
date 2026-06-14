import Input from "../shared/Input";
import { INPUT_PLACEHOLDERS, BUTTON_LABELS } from "../../constants/text";
import Button from "../shared/Button";

const TaskInput = ({ value, onChange, onAdd, disabled}) => {
  return (
    <div className="task-input">
      <Input
        value={value}
        placeholder={INPUT_PLACEHOLDERS.NEW_TASK}
        onChange={onChange}
      />

      <Button onClick={onAdd} label={BUTTON_LABELS.ADD} disabled={disabled} />
    </div>
  );
};

export default TaskInput;
