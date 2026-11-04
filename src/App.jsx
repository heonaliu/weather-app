import { useState } from "react";
import "./App.css";
import WeatherArt from "./components/WeatherArt";
import { ART, BACKGROUNDS } from "./utils/weatherCodes";

function App() {
  const [preview, setPreview] = useState("");

  return (
    <main className="app" style={{ background: BACKGROUNDS[preview] || "#ffffff" }}>
      <h1>WEATHER APP</h1>
      <WeatherArt previewCategory={preview} />
      
    </main>
  );
}

export default App;
