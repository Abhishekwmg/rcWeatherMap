import Celcius from "../../assets/celsius.svg?react";
import Fahrenheit from "../../assets/fahrenheit.svg?react";
import { Switch } from "../ui/switch";
import { useTemperatureUnit } from "../../context/TemperatureUnitContext";

export default function TemperatureToggle() {
  const { unit, toggleUnit } = useTemperatureUnit();
  return (
    <div className="flex items-center gap-2">
      <Fahrenheit className="size-5" />
      <Switch checked={unit === "C"} onCheckedChange={toggleUnit} />
      <Celcius className="size-5" />
    </div>
  );
}
