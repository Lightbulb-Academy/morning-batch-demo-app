import Card from "./components/Card";
import CustomInput from "./components/CustomInput";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw", // screen width - absolute value
        height: "100vh", // screen height
        overflow: "hidden",
        padding: 16
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem",
          width: "100%", // 100% of parent width
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
        <button>+ Add</button>
      </div>
      <div className="grid-container" style={{ margin: "16px" }}>
        <Card title="Card 1" description="This is a description of card 1." />
        <Card title="Card 2" description="This is a description of card 2." />
        <Card color="black" title="Card 2" description="This is a description of card 2." />

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