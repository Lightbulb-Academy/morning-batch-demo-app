import { useContext, useEffect, useState } from "react";
import TodoCards from "../components/TodoCards";
import TodoForm from "../components/TodoForm";
import axios from "axios";
import Button from "../components/Button";
import { ThemeContext } from "../context/ThemeContext";
import Avatar from "../components/Avatar";
import { jwtDecode } from "jwt-decode";

export interface Todo {
  title: string;
  description: string;
  index?: number;
}

interface UserInfo {
  id: string;
  email: string;
  name: string;
  mobile: string;
  iat: number;
  exp: number;
}

function TodoApp() {
  // get todos from localStorage
  const token = localStorage.getItem("token");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    if (token) {
      const decodedToken: UserInfo = jwtDecode(token);
      setUserInfo(decodedToken);
    }
  }, [token]);

  const { toggleTheme } = useContext(ThemeContext);

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
    <div className="flex flex-col w-screen h-screen overflow-hidden items-center gap-8 p-4">
      {userInfo && (
        <Avatar
          className="absolute left-4 top-4"
          name={userInfo.name}
          email={userInfo.email}
          src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-173524.jpg"
        />
      )}

      <h1 className="text-2xl font-bold">TODO App</h1>
      <Button
        className="absolute right-4 top-4"
        onClick={toggleTheme}
        label="Toggle Theme"
      />
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
