import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import WeatherArt from "./components/WeatherArt";
import { fetchWeather } from "./utils/api";
import { ART, BACKGROUNDS } from "./utils/weatherCodes";

function App() {
  const [place, setPlace] = useState(null);
  const [preview, setPreview] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState("");

  async function handleSelect(city) {
    //upon selection
    setPlace(city);
    setLoading(true);
    setError("");
    setPreview("");

    try {
      setWeather(await fetchWeather(city.lat, city.lon));
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  const category = preview || weather?.category;
  const isDark = category === "night" || category === "stormy"; //check if the category is dark then change bg to dark color

  return (
    <main
      className={`app ${isDark ? "dark" : ""}`}
      style={{ background: BACKGROUNDS[preview] || "#ffffff" }}
    >
      <SearchBar onSelect={handleSelect} />
      {loading && <p className="status">Checking....</p>}
      {error && <p className="status error">{error}</p>}
      {weather && !loading && (
        <WeatherArt place={place} weather={weather} category={category} />
      )}
    </main>
  );
}

export default App;
