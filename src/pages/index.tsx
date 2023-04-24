import { useState } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTask = (task: string) => {
    const newTodos = [...todos, { id: Date.now(), task, completed: false }];
    setTodos(newTodos);
  };

  const toggleCompletion = (id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const deleteTask = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-4xl mb-4">ToDo App</h1>
      <AddTodo addTask={addTask} />
      <TodoList
        todos={todos}
        toggleCompletion={toggleCompletion}
        deleteTask={deleteTask}
      />
    </main>
  );
}
