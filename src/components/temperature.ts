export function formatTemp(tempF: number, unit: "F" | "C"): string {
  if (unit === "C") return `${Math.round(((tempF - 32) * 5) / 9)}°C`;
  return `${Math.round(tempF)}°F`;
}
