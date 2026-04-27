import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App/index.css";
import App from "./app/App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProvider from "./context/ThemeProvider.tsx";
import TemperatureUnitProvider from "./context/TemperatureUnitContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TemperatureUnitProvider>
          <App />
        </TemperatureUnitProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
