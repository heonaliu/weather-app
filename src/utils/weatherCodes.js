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
