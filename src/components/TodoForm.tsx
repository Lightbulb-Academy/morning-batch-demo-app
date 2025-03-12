import { useState } from "react";
import Button from "./Button";

export default function TodoForm({ todos, setTodos }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = (event: any) => {
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
    // TODO - impelement state clear
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
          {/* TODO - add type props to button */}

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
