import { useState } from "react";
import { searchCities } from "../utils/api";
import "./SearchBar.css";

export default function SearchBar({ onSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  
}
