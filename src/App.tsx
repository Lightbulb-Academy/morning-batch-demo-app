import TodoCards from "./components/TodoCards";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="flex flex-col w-screen h-screen items-center gap-8 p-4">
      <h1 className="text-2xl font-bold">TODO App</h1>
      <TodoForm />
      <TodoCards />
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
