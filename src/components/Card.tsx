interface CardProps {
  title: string;
  description: string;
  status?: boolean;
  cardIndex: number;
  handleDelete: () => void;
}

export default function Card({
  title,
  description,
  status = false,
  handleDelete
}: CardProps) {

  return (
    <div className={`card ${status ? "line-through " : ""}`}>
      <div className="card-title flex justify-between items-center">
        <h3>{title}</h3>
        <button className="cursor-pointer" onClick={handleDelete}>
          Delete
        </button>
      </div>
      <p className="card-desc">{description}</p>
    </div>
  );
}

// dynamic content should be passed as props in the component
