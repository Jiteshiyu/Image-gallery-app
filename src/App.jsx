import "./App.css";
import Gallery from "./components/Gallery.jsx";

export default function App() {
  return (
    // Pixarium app
    <div className="app">
      {/* App heading */}
      <h1 className="app-heading">Pixarium</h1>
      {/* Rendering the Gallery component */}
      <Gallery />
    </div>
  );
}
