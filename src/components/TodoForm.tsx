import { useState, useEffect } from "react";
import Button from "./Button";
import { Todo } from "../pages/TodoApp";

interface TodoFormProps {
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
  selectedTodo: Todo | null;
  setSelectedTodo: (todo: Todo | null) => void;
}

export default function TodoForm({
  todos,
  setTodos,
  selectedTodo,
  setSelectedTodo,
}: TodoFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newTodo = {
      title,
      description,
    };
    const updatedTodos = [...todos, newTodo];
    // save to localStorage
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); // JSON.stringify converts JS object to string
    setTodos(updatedTodos);
    handleClear();
  };

  const handleUpdate = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!selectedTodo) return;
    const updatedTodos = [...todos];
    // replace updated value with the selectedTodo's value in the updatedTodos array
    updatedTodos[selectedTodo.index!] = {
      title,
      description,
    };
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    handleClear();
  };

  const handleClear = () => {
    setTitle("");
    setDescription("");
    // set selectedTodo to null
    setSelectedTodo(null);
  };

  // we usually use useEffect to perform API calls, subscriptions, or DOM manipulations
  useEffect(() => {
    console.log("useEffect called");
  }, []); // runs only once when the component is mounted

  useEffect(() => {
    console.log("selectedTodo changed");
    if (selectedTodo) {
      setTitle(selectedTodo.title);
      setDescription(selectedTodo.description);
    }
  }, [selectedTodo]); // runs when selectedTodo changes

  return (
    <form className="w-[600px] items-center">
      <div className="flex flex-col border gap-4 p-4">
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          className="border px-2 py-1 rounded"
        />
        <textarea
          value={description}
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
          className="border px-2 py-1 rounded"
        />

        <div className="flex items-center justify-center gap-8">
          <Button
            onClick={(event) =>
              selectedTodo ? handleUpdate(event) : handleAdd(event)
            }
            label={selectedTodo ? "Update" : "Add"}
          />
          <Button
            className="!bg-white !text-black !border"
            onClick={handleClear}
            label="Clear"
          />
        </div>
      </div>
    </form>
  );
}
