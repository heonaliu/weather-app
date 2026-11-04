import { getCategory } from "./weatherCodes";

export async function searchCities(query) {
  // takes in argument query and returns an array matching the query
  const url =
    `https://geocoding-api.open-meteo.com/v1/search` +
    `?name=${encodeURIComponent(query)}&count=5&language=en&format=json`;
}
