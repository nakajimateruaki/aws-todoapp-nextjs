import React from "react";

interface TodoItemProps {
  task: string;
  completed: boolean;
  toggleCompletion: () => void;
  deleteTask: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  task,
  completed,
  toggleCompletion,
  deleteTask,
}) => {
  return (
    <div className="flex items-center justify-between py-2">
      <div
        onClick={toggleCompletion}
        className={`cursor-pointer ${completed ? "line-through" : ""}`}
      >
        {task}
      </div>
      <button onClick={deleteTask} className="text-red-500">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
