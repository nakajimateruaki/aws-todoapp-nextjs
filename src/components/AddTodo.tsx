import React, { useState } from "react";

interface AddTodoProps {
  addTask: (task: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-grow border-2 border-gray-300 rounded px-2 py-1"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-1 ml-2 rounded"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;
