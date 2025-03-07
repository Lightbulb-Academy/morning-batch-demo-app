export default function Card({
  title,
  description,
  color
}: {
  title: string;
  description: string;
  color?: string
}) {
  return (
    <div className="card" style={{ color: color }}>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
    </div>
  );
}
