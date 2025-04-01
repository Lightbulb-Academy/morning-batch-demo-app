import axios from "axios";
import Card from "./Card";
import { Todo } from "../pages/TodoApp";

interface TodoCardsProps {
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
  setSelectedTodo: (todo: Todo | null) => void;
  selectedTodo: Todo | null;
}

export default function TodoCards(props: TodoCardsProps) {
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8000/todos/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const updatedTodos = props.todos.filter((todo) => todo.id !== id); // DELETE: filter out the selected todo
      localStorage.setItem("todos", JSON.stringify(updatedTodos)); // update localStorage
      props.setTodos(updatedTodos); // update state
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleEdit = (todo: Todo, index: number) => {
    props.setSelectedTodo({ ...todo, index });
  };

  return (
    <div
      className="w-full h-full overflow-y-auto pb-16"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        justifyItems: "center",
        rowGap: "1rem",
      }}
    >
      {props.todos.map((todo, index) => (
        <Card
          key={index}
          handleEdit={() => handleEdit(todo, index)}
          handleDelete={() => handleDelete(todo.id)}
          title={todo.title}
          description={todo.description}
          isSelected={props.selectedTodo?.index === index}
        />
      ))}
    </div>
  );
}
