import Card from "./Card";

export default function TodoCards() {
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
      <Card title="Card 1" description="This is a description of card 1." />
      <Card title="Card 2" description="This is a description of card 2." />
      <Card title="Card 3" description="This is a description of card 2." />
      <Card title="Card 4" description="This is a description of card 2." />
      <Card title="Card 5" description="This is a description of card 2." />
    </div>
  );
}
