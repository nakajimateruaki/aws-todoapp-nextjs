import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleCompletion,
  deleteTask,
}) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          task={todo.task}
          completed={todo.completed}
          toggleCompletion={() => toggleCompletion(todo.id)}
          deleteTask={() => deleteTask(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
