import Button from "./components/Button";
import Card from "./components/Card";
import CustomInput from "./components/CustomInput";

function App() {
  const handleAdd = () => {
    console.log("Add button clicked");
  }

  const handleClear = () => {
    console.log("Clear button clicked");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw", // screen width - absolute value
        height: "100vh", // screen height
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem",
        }}
      >
        <h1>Heading</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid",
            gap: "8px",
            padding: 16,
          }}
        >
          <CustomInput label="Title" />
          <CustomInput label="Description" />
        </div>
        <Button onClick={handleAdd} label="Add" />
        <Button onClick={handleClear} label="Clear" />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          justifyItems: "center",
          rowGap: "2rem",
        }}
      >
        <Card
          style={{ backgroundColor: "aliceBlue" }}
          title="Card 1"
          description="This is a description of card 1."
        />
        <Card title="Card 2" description="This is a description of card 2." />
        <Card title="Card 3" description="This is a description of card 2." />
        <Card title="Card 4" description="This is a description of card 2." />
        <Card title="Card 5" description="This is a description of card 2." />
      </div>
    </div>
  );
}

export default App;

// JSX in components
// - return a single root element
// spacing- <br />, margin, gap, space-x-*, space-y-*

// React Features
/**
 * 1. JSX - JavaScript XML (HTML in JS)
 * 2. Declarative(React) vs Imeperative(Vanilla JS)
 *  - document.getElementById('root').innerHTML = '<h1>Heading</h1>' // imperative - explicit DOM manipulation
 *  - <h1>Heading</h1> // declarative - how the UI should look like
 * 3. Components - reusable building blocks
 */

// Button Props - title, backgroundColor, color
