export default function Card({
  title,
  description,
  status = false
}: {
  title: string;
  description: string;
  status?: boolean;
}) {
  return (
    <div className={`card ${status ? "line-through " : ""}`}>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
    </div>
  );
}

// dynamic content should be passed as props in the component
