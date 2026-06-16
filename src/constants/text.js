export const TASK_HEADINGS = {
  TODO_LIST: {
    title: "To-Do List",
    subtitle: "Classic task manager app",
    labels: {
      activeTasks: "Active Tasks Left:",
      noActiveTasks: "No active tasks",
      noTasks: "No tasks yet",
    },
  },

  FETCH_USERS: {
    title: "Data Loading with useEffect + fetch",
    subtitle: "Fetching users from API",
  },

  GITHUB_SEARCH: {
    title: "GitHub User Search",
    subtitle: "Advanced search feature",
  },
};

export const BUTTON_LABELS = {
  ADD: "Add New Task",
  LOAD_MORE: "Load More Users",
};

export const INPUT_PLACEHOLDERS = {
  NEW_TASK: "Enter task...",
  GITHUB_SEARCH: "Enter nickname",
};

export const TASK_FILTERS = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "done", label: "Done" },
];

export const STATUS_TEXT = {
  loading: "Loading...",
  error: "Failed to fetch data",

  users: {
    loading: "Loading users...",
    error: "Failed to fetch users",
  },

  github: {
    prompt: "Start typing to search GitHub users",
    loading: "Searching...",
    empty: "No users found",
    error: "Failed to search GitHub users",
  },
};
