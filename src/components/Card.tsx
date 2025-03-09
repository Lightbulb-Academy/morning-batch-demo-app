export default function Card({
  title,
  description,
  style
}: {
  title: string;
  description: string;
  style?: object;
}) {
  return (
    <div className="card" style={style}>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
    </div>
  );
}

// dynamic content should be passed as props in the component
