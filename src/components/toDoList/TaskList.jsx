import TaskItem from "./TaskItem";

const TaskList = ({ todos, handleToggle, handleDelete }) => {
  return (
    <ul>
      {todos.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
