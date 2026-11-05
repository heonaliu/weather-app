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

export async function fetchWeather(lat, lon) {
  const url =
    `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${lat}&longitude=${lon}` +
    `&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code,is_day` +
    `&temperature_unit=fahrenheit&wind_speed_unit=mph`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Weather Request Failed");
  const { current } = await res.json();

  return {
    temp: Math.round(current.temperature_2m),
    feelsLike: Math.round(current.apparent_temperature),
    humidity: Math.round(current.relative_humidity_2m),
    wind: Math.round(current.wind_speed_10m),
    category: getCategory(current.weather_code, current.is_day === 1),
  };
}
