import "./App.css";
import Gallery from "./components/Gallery.jsx";

export default function App() {
  return (
    <div className="app"> {/* Main app */}
      <h1 className="app-heading">Pixarium</h1>
      <Gallery /> {/* Rendering the Gallery component */}
    </div>
  );
}
