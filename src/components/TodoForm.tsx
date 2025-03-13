import { useState } from "react";
import Button from "./Button";
import { Todo } from "../App";

interface TodoFormProps {
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
}

export default function TodoForm({ todos, setTodos }: TodoFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("Add button clicked");
    const newTodo = {
      title,
      description,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setDescription("");
  };

  const handleClear = () => {
    setTitle("");
    setDescription("")
    console.log("Clear button clicked");
  };

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
          <Button onClick={handleAdd} label="Add" />
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
