import { useState } from "react";
import "./App.css";
import WeatherArt from "./components/WeatherArt";
import { ART, BACKGROUNDS } from "./utils/weatherCodes";

function App() {
  const [preview, setPreview] = useState("");

  return (
    <main className="app">
      <h1>Hello, World!</h1>
      <WeatherArt previewCategory={preview} />
    </main>
  );
}

export default App;
