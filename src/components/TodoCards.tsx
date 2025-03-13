import { Todo } from "../App";
import Card from "./Card";

interface TodoCardsProps {
  todos: Todo[];
  cardTitle: string;
}

export default function TodoCards(props: TodoCardsProps) {
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
        <Card key={index} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}
