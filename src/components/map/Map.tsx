import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { Coords } from "../types";
import { useEffect } from "react";
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";
import { useTheme } from "@/context/ThemeProvider";

const API_KEY = import.meta.env.VITE_API_KEY;

type Props = {
  coords: Coords;
  onMapClick: (lat: number, lon: number) => void;
  mapType: string;
};

export default function Map({ coords, onMapClick, mapType }: Props) {
  const { lat, lon } = coords;
  const { theme } = useTheme();

  return (
    <MapContainer
      center={[lat, lon]}
      zoom={5}
      maxZoom={15}
      minZoom={3}
      style={{ width: "100%", height: "100%" }}
    >
      <MapClick onMapClick={onMapClick} coords={coords} />
      <MapTileLayer theme={theme} />
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      <TileLayer
        url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`}
      />
      <Marker position={[lat, lon]}>
        {/* <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup> */}
      </Marker>
    </MapContainer>
  );
}

function MapClick({
  onMapClick,
  coords,
}: {
  onMapClick: (lat: number, lon: number) => void;
  coords: Coords;
}) {
  const map = useMap();
  map.panTo([coords.lat, coords.lon]);

  map.on("click", (e) => {
    const { lat, lng } = e.latlng;
    onMapClick(lat, lng);
  });
  return null;
}

function MapTileLayer({ theme }) {
  const map = useMap();

  useEffect(() => {
    const tileLayer = new MaptilerLayer({
      style: theme === "dark" ? "basic-dark" : "openstreetmap",
      apiKey: "fESlmIgSt0hGC1Qv7ZLO",
    });
    tileLayer.addTo(map);

    return () => map.removeLayer(tileLayer);
  }, [map, theme]);

  return null;
}
