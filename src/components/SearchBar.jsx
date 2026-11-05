import { useState } from "react";
import { searchCities } from "../utils/api";
import "./SearchBar.css";

export default function SearchBar({ onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmed = query.trim(); // remove trailing characters
    if (!trimmed) return;

    setLoading(true);
    setError("");
    setResults([]);

    try {
      // try in case it runs into error
      const cities = await searchCities(trimmed);
      if (cities.length === 0) {
        setError("No Cities Found");
      } else if (cities.length === 1) {
        choose(cities[0]);
      } else {
        setResults(cities);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  function choose(city) {
    onSelect(city); // taking a prop
    setResults([]); // clear it
    setQuery(""); // clear the input field
  }

  return (
    <div className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a city....."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* make button disabled if still fetching/loading */}
        <button type="submit" disabled={loading}>
          {loading ? "..." : "Search"}
        </button>
      </form>
      {/* return error if any */}
      {error && <p className="search-error">{error}</p>}

      {results.length > 0 && (
        <ul className="">
          {results.map((city) => (
            <li key={city.id} onClick={() => choose(city)}>
              {city.name}
              <small>{city.region}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
