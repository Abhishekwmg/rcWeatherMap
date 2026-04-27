# rc-weather-map

> A production-grade geospatial weather visualization system built for performance, scalability, and real-world frontend architecture patterns.

---

## Overview

**rc-weather-map** is not just a UI project — it is a **data-driven geospatial application** that demonstrates how to architect a modern frontend system capable of handling:

- asynchronous data streams
- map-based rendering constraints
- API orchestration
- strict type safety
- scalable UI systems

The goal is to simulate the kind of frontend system you would encounter in a high-performance engineering environment — where correctness, performance, and maintainability matter as much as visuals.

---

## Problem Space

Weather + maps seems simple until you deal with:

- inconsistent API responses
- high-frequency data updates
- rendering performance on map layers
- state synchronization across UI + network
- UI responsiveness under load

This project addresses those concerns with a **deliberate architectural approach**, not just libraries glued together.

---

## System Design Philosophy

### 1. Server State ≠ Client State

All async data is treated as **server state**, managed via:

- cache lifecycles
- background refetching
- stale-while-revalidate strategy

This avoids:

- redundant requests
- UI flickering
- inconsistent data snapshots

---

### 2. Feature-Driven Architecture

Instead of dumping everything into `/components`, the codebase is structured around **domain boundaries**:

```
features/
  weather/
  map/
  location/
```

Each feature owns:

- UI
- hooks
- API logic
- validation

This mirrors how large-scale systems are organized internally.

---

### 3. Type Safety as a First-Class Constraint

Using strict TypeScript + runtime validation:

- No blind trust in APIs
- Zod schemas enforce runtime guarantees
- Types flow from API → UI without leakage

This reduces:

- silent failures
- undefined states
- debugging overhead

---

### 4. UI as a System (Not Just Components)

The UI layer is built with:

- composable primitives (Radix)
- design tokens (Tailwind)
- utility merging (`clsx`, `tailwind-merge`)
- variant systems (CVA)

This enables:

- predictable styling
- scalable component APIs
- minimal duplication

---

### 5. Rendering Strategy for Maps

Maps are a performance trap if handled poorly.

This project ensures:

- minimal re-renders of map layers
- separation between map instance and React tree
- controlled updates for markers & overlays

---

## Tech Stack (with Intent)

### Core Runtime

- React 19 (RC) → concurrent rendering primitives
- TypeScript → enforce correctness at scale
- Vite → fast iteration, optimized builds

### Data Layer

- TanStack React Query → async orchestration, caching, retries
- Zod → runtime validation boundary

### Geospatial Layer

- Leaflet + React Leaflet → map abstraction
- MapTiler SDK → tile rendering + styling

### UI System

- TailwindCSS v4 → utility-first styling
- shadcn + Radix → accessible primitives
- Lucide → icon system

---

## Data Flow (Simplified)

```
User Interaction
      ↓
React Component
      ↓
Custom Hook
      ↓
React Query
      ↓
API Layer
      ↓
Zod Validation
      ↓
Cached State
      ↓
UI Render
```

Key property: **No unvalidated data reaches the UI**

---

## Performance Characteristics

- Query-level caching avoids redundant API calls
- Background refetch keeps UI fresh without blocking
- Component boundaries prevent unnecessary renders
- Map rendering is isolated from React reconciliation

---

## Local Development

```bash
git clone https://github.com/your-username/rc-weather-map.git
cd rc-weather-map
npm install
npm run dev
```

---

## Environment Variables

```
VITE_MAPTILER_API_KEY=
VITE_WEATHER_API_KEY=
```

---

## What This Project Demonstrates

This project is intentionally built to reflect:

- how frontend systems scale beyond toy apps
- how to structure code for teams, not individuals
- how to enforce correctness in unreliable environments
- how to balance DX with production constraints

---

## Tradeoffs & Decisions

No system is perfect — here are conscious tradeoffs:

- React 19 RC → bleeding edge, not fully stable
- Client-heavy architecture → faster UX, heavier bundle
- Leaflet → simpler than WebGL-based solutions, less powerful

---

## Future Improvements

- WebGL-based rendering for large datasets
- Offline caching strategy
- Error boundary instrumentation
- Observability hooks (logging, tracing)
- Server-side rendering / edge deployment

---

## Why This Exists

Most frontend projects online optimize for:

> “Looks good on a portfolio”

This one optimizes for:

> “Would survive in production”

---

## License

MIT
