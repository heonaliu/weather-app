import sunny from "../assets/art/sunny.png";
import cloudy from "../assets/art/cloudy.png";
import foggy from "../assets/art/foggy.png";
import rainy from "../assets/art/rainy.png";
import snowy from "../assets/art/snowy.png";
import night from "../assets/art/night.png";
import stormy from "../assets/art/stormy.png"

// aim: convert the weather_code into art category
export function getCategory(code, isDay) {
  if (code === 0) return isDay ? "sunny" : "night";
  if ([1, 2, 3].includes(code)) return "cloudy";
  if ([45, 48].includes(code)) return "foggy";
  if (code >= 51 && code <= 67) return "rainy";
  if (code >= 71 && code <= 77) return "snowy";
  if ([80, 81, 82].includes(code)) return "rainy";
  if ([85, 86].includes(code)) return "snowy";
  if (code >= 95) return "stormy";
  return "cloudy";
}

export const ART = {
  sunny,
  cloudy,
  foggy,
  rainy,
  snowy,
  stormy,
  night,
}

export const BACKGROUNDS = {
  sunny: "#ffe9a8",
  cloudy: "#d9dee5",
  foggy: "#e4d2dc",
  rainy: "#a9bed1",
  snowy: "#eef4fb",
  stormy: "#c0c0c0",
  night: "#2a2d4a",
};
