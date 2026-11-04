import { getCategory } from "./weatherCodes";

export async function searchCities(query) {
  // takes in argument query and returns an array matching the query
  const url =
    `https://geocoding-api.open-meteo.com/v1/search` +
    `?name=${encodeURIComponent(query)}&count=5&language=en&format=json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("City Search Failed");
  const data = await res.json();
  //purpose of parsing json format into usable object/array

  //empty array is returned if data.results doesn't have anything
  return (data.results || []).map((r) => ({
    id: r.id,
    name: r.name,
    country: [r.admin1, r.country].filter(Boolean).join(", "),
    // this joins the state and country
    lat: r.latitude,
    lon: r.longitude,
  }));
}
