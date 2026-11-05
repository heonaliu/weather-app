import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherArt from "./components/WeatherArt";
import { ART, BACKGROUNDS } from "./utils/weatherCodes";

function App() {
  const [preview, setPreview] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState("");

  async function handleSelect(city) {
    //upon selection
    setPlace(city);
    setLoading(true);
    setError("")
    setPreview("")
  }

  return (
    <main
      className="app"
      style={{ background: BACKGROUNDS[preview] || "#ffffff" }}
    >
      <SearchBar onSelect={handleSelect} />
      <WeatherArt previewCategory={preview} />
    </main>
  );
}

export default App;
