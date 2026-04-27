import DailyForecast from "../components/weather/DailyForecasst";
import HourlyForecast from "../components/weather/HourlyForecast";
import CurrentWeather from "../components/weather/CurrentWeather";
import AdditionalInfo from "../components/weather/AdditionalInfo";
import Map from "../components/map/Map";
import { useState } from "react";
import type { Coords } from "../types";
import LocationDropdown from "../components/dropdowns/LocationDropdown";
import { useQuery } from "@tanstack/react-query";
import { getGeocode } from "../services/api";
import MapTypeDropdown from "../components/dropdowns/mapTypeDropdown";
import MapLegend from "../components/map/MapLegends";
import CurrentSkeleton from "../components/weather/CurrentSkeleton";
import { Suspense } from "react";
import DailySkeleton from "../components/weather/DailySkeleton";
import HourlySkeleton from "../components/weather/HourlySkeleton";
import AdditionalInfoSkeleton from "../components/weather/AdditionalInfoSkeleton";
import SidePanel from "../components/layout/SidePanel";
import { TooltipProvider } from "@/components/ui/tooltip";
import MobileHeader from "../components/layout/MobileHeader";
import Menu from "../assets/menu.svg?react";
import ThemeToggle from "../components/common/ThemeToggle";
import TemperatureToggle from "../components/common/TemperatureToggle";

function App() {
  const [coordinates, setCoords] = useState<Coords>({
    lat: 48,
    lon: 2,
  });

  const [location, setLocation] = useState("Delhi");
  const [mapType, setMapType] = useState("clouds_new");
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const { data: geocodeData } = useQuery({
    queryKey: ["geocode", location],
    queryFn: () => getGeocode(location),
  });

  const onMapClick = (lat: number, lon: number) => {
    setCoords({ lat, lon });
    setLocation("custom");
  };

  const coords =
    location === "custom"
      ? coordinates
      : { lat: geocodeData?.[0].lat ?? 0, lon: geocodeData?.[0].lon ?? 0 };

  return (
    <TooltipProvider>
      <MobileHeader setIsSidePanelOpen={setIsSidePanelOpen} />
      <div className="flex flex-col gap-8 pt-4 p-8 xs:p-8 w-full lg:w-[calc(100dvw-var(--sidebar-width))] 2xl:h-screen">
        <div className="flex flex-col gap-4 xs:flex-row xs:gap-8">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <h1 className="text-2xl font-semibold">Location:</h1>
            <LocationDropdown location={location} setLocation={setLocation} />
          </div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <h1 className="text-2xl whitespace-nowrap font-semibold">
              Map Type:
            </h1>
            <MapTypeDropdown mapType={mapType} setMapType={setMapType} />
          </div>
          <div className="ml-auto flex gap-4 items-center">
            <div className="hidden xs:block">
              <TemperatureToggle />
            </div>
            <div className="hidden xs:block">
              <ThemeToggle />
            </div>
            <button
              className="hidden xs:block"
              onClick={() => setIsSidePanelOpen(true)}
            >
              <Menu className="size-6 ml-auto lg:hidden" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 2xl:flex-1 2xl:min-h-0 gap-4 md:grid-cols-2 2xl:grid-cols-4 2xl:grid-rows-4">
          <div className="relative h-120 2xl:h-auto col-span-1 md:col-span-2 2xl:col-span-4 2xl:row-span-2 order-1">
            <Map onMapClick={onMapClick} coords={coords} mapType={mapType} />
            <MapLegend mapType={mapType} />
          </div>
          <div className="col-span-1 2xl:row-span-2 order-2">
            <Suspense fallback={<CurrentSkeleton />}>
              <CurrentWeather coords={coords} />
            </Suspense>
          </div>
          <div className="col-span-1 order-3 2xl:order-4 2xl:row-span-2">
            <Suspense fallback={<DailySkeleton />}>
              <DailyForecast coords={coords} />
            </Suspense>
          </div>
          <div className="col-span-1 md:col-span-2 2xl:row-span-1 order-4 2xl:order-3">
            <Suspense fallback={<HourlySkeleton />}>
              <HourlyForecast coords={coords} />
            </Suspense>
          </div>
          <div className="col-span-1 md:col-span-2 2xl:row-span-1 order-5">
            <Suspense fallback={<AdditionalInfoSkeleton />}>
              <AdditionalInfo coords={coords} />
            </Suspense>
          </div>
        </div>
      </div>
      <SidePanel
        coords={coords}
        isSidePanelOpen={isSidePanelOpen}
        setIsSidePanelOpen={setIsSidePanelOpen}
      />
    </TooltipProvider>
  );
}

export default App;
