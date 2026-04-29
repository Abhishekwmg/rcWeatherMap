# rc-weather-map

A weather visualization app built with React that renders real-time weather data on an interactive map.

---

## Demo

- Live: https://openaero.netlify.app/
- Preview:
  ![alt text](image.png)

---

## Features

- Interactive map rendering using Leaflet
- Fetches and displays weather data from external APIs
- Handles loading and error states
- Data caching and background refetching with React Query
- Runtime validation of API responses using Zod

---

## Tech Stack

- React + TypeScript
- React Query (data fetching & caching)
- Leaflet (maps)
- Zod (validation)
- TailwindCSS (styling)
- Vite (build tool)

---

## Key Engineering Decisions

- Separated server state from UI state using React Query
- Structured code using feature-based architecture
- Validated API responses to prevent runtime issues
- Optimized map rendering to avoid unnecessary re-renders

---

## Project Structure
