import { z } from "zod";

// Small reusable piece (very important)
const WeatherCondition = z.object({
  id: z.number(),
  main: z.string(),
  description: z.string(),
  icon: z.string(),
});

// Rain (only appears sometimes)
const Rain = z.object({
  "1h": z.number(),
});

// Current weather
const Current = z.object({
  dt: z.number(),
  sunrise: z.number(),
  sunset: z.number(),
  temp: z.number(),
  feels_like: z.number(),
  pressure: z.number(),
  humidity: z.number(),
  dew_point: z.number(),
  uvi: z.number(),
  clouds: z.number(),
  visibility: z.number(),
  wind_speed: z.number(),
  wind_deg: z.number(),
  weather: z.array(WeatherCondition),
});

// Hourly forecast
const Hourly = z.object({
  dt: z.number(),
  temp: z.number(),
  feels_like: z.number(),
  pressure: z.number(),
  humidity: z.number(),
  dew_point: z.number(),
  uvi: z.number(),
  clouds: z.number(),
  visibility: z.number(),
  wind_speed: z.number(),
  wind_deg: z.number(),
  wind_gust: z.number().optional(),
  weather: z.array(WeatherCondition),
  pop: z.number(),
  rain: Rain.optional(),
});

// Daily temp block
const DailyTemp = z.object({
  day: z.number(),
  min: z.number(),
  max: z.number(),
  night: z.number(),
  eve: z.number(),
  morn: z.number(),
});

// Daily feels_like block
const DailyFeelsLike = z.object({
  day: z.number(),
  night: z.number(),
  eve: z.number(),
  morn: z.number(),
});

// Daily forecast
const Daily = z.object({
  dt: z.number(),
  sunrise: z.number(),
  sunset: z.number(),
  moonrise: z.number(),
  moonset: z.number(),
  moon_phase: z.number(),
  summary: z.string(),
  temp: DailyTemp,
  feels_like: DailyFeelsLike,
  pressure: z.number(),
  humidity: z.number(),
  dew_point: z.number(),
  wind_speed: z.number(),
  wind_deg: z.number(),
  wind_gust: z.number(),
  weather: z.array(WeatherCondition),
  clouds: z.number(),
  pop: z.number(),
  rain: z.number().optional(),
  uvi: z.number(),
});

// Final schema (export this)
export const WeatherSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  timezone: z.string(),
  timezone_offset: z.number(),
  current: Current,
  hourly: z.array(Hourly),
  daily: z.array(Daily),
});
