import { createContext, useContext, useState } from "react";

type Unit = "F" | "C";

const TemperatureUnitContext = createContext<{
  unit: Unit;
  toggleUnit: () => void;
} | null>(null);

type Props = {
  children: React.ReactNode;
};

export default function TemperatureUnitProvider({ children }: Props) {
  const [unit, setUnit] = useState<Unit>("F");
  const toggleUnit = () => setUnit((u) => (u === "F" ? "C" : "F"));

  return (
    <TemperatureUnitContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </TemperatureUnitContext.Provider>
  );
}

export function useTemperatureUnit() {
  const ctx = useContext(TemperatureUnitContext);
  if (!ctx)
    throw new Error(
      "useTemperatureUnit must be used within TemperatureUnitProvider",
    );
  return ctx;
}
