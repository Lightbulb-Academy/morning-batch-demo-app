import { Todo } from "../App";
import Card from "./Card";

interface TodoCardsProps {
  todos: Todo[];
  setTodos: (todo: Todo[]) => void;
}

export default function TodoCards(props: TodoCardsProps) {
  const handleDelete = (index: number) => {
    console.log("Delete button clicked", index);
    const updatedTodos = props.todos.filter((_, i) => i !== index); // DELETE: filter out the selected todo
    localStorage.setItem("todos", JSON.stringify(updatedTodos)); // update localStorage
    props.setTodos(updatedTodos); // update state
    console.log(updatedTodos);
  }

  // TODO: Edit Todos

  return (
    <div
      className="w-full"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        justifyItems: "center",
        rowGap: "2rem",
      }}
    >
      {props.todos.map((todo, index) => (
        <Card key={index} handleDelete={() => handleDelete(index)} cardIndex={index} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}
