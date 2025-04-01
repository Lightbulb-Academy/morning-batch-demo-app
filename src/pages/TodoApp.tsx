import { useEffect, useState } from "react";
import TodoCards from "../components/TodoCards";
import TodoForm from "../components/TodoForm";
import axios from "axios";

export interface Todo {
  title: string;
  description: string;
  index?: number;
  id: number;
  status?: boolean;
}

function TodoApp() {
  // get todos from localStorage
  const token = localStorage.getItem("token");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const fetchTodos = async () => {
    try {
      const response = await axios("http://localhost:8000/todos", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data;
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="flex flex-col items-center gap-8 h-full w-full p-8">
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
