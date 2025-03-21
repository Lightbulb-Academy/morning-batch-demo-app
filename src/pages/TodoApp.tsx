import { useState } from "react";
import TodoCards from "../components/TodoCards";
import TodoForm from "../components/TodoForm";

export interface Todo {
  title: string;
  description: string;
  index?: number;
}

function TodoApp() {
  // get todos from localStorage
  const todosFromLocalStorage = localStorage.getItem("todos");
  // if todosFromLocalStorage is null, set initialTodos to an empty array
  const initialTodos = todosFromLocalStorage
    ? JSON.parse(todosFromLocalStorage) // JSON.parse converts string to JS object
    : [];
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden items-center gap-8 p-4">
      <h1 className="text-2xl font-bold">TODO App</h1>
      <div className="flex gap-8 h-full w-full p-4">
        <TodoForm
          setSelectedTodo={setSelectedTodo}
          selectedTodo={selectedTodo}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoCards
          selectedTodo={selectedTodo}
          setSelectedTodo={setSelectedTodo}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default TodoApp;

// JSX in components
// - return a single root element
// spacing- <br />, margin, gap, space-x-*, space-y-*

// React Features
/**
 * 1. JSX - JavaScript XML (HTML in JS)
 * 2. Declarative(React) vs Imeperative(Vanilla JS)
 *  - document.getElementById('root').innerHTML = '<h1>Heading</h1>' // imperative - explicit DOM manipulation
 *  - <h1>Heading</h1> // declarative - how the UI should look like
 * 3. Components - reusable building blocks
 */

// Button Props - title, backgroundColor, color
