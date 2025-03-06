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
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          padding: "1rem",
          height: "100%", // 100% of parent height - relative value
          width: "100%", // 100% of parent width
        }}
      >
        <h1 id="header">Heading</h1>
        <p>This is a paragraph</p>
        <CustomInput label="Username" />
        <CustomInput label="Name" />
        <CustomInput label="Address" />
        <CustomInput label="Password" type="password" />
        <button>Button</button>
        {[11, 22, 33].map((item) => 
          <div key={item}>{item}</div>
        )}
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
