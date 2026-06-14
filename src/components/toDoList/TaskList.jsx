import TaskItem from "./TaskItem";

const mockTasks = [
  {
    id: 1,
    text: "Навчити React",
    completed: false,
  },
  {
    id: 2,
    text: "Прочитати книгу",
    completed: true,
  },
  {
    id: 3,
    text: "Піти на тренування",
    completed: false,
  },
  {
    id: 4,
    text: "Купити продукти",
    completed: true,
  },
  {
    id: 5,
    text: "Підготувати проект",
    completed: false,
  },
];

const TaskList = () => {
  const handleToggle = (id) => {
    console.log("toggle", id);
  };

  const handleDelete = (id) => {
    console.log("delete", id);
  };

  return (
    <ul>
      {mockTasks.map((task) => (
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
