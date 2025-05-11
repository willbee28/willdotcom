import { Map } from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function PctMap() {
  return (
    <Map
      initialViewState={{
        longitude: -120,
        latitude: 41.3,
        zoom: 4.2,
      }}
      style={{ width: 400, height: 600 }}
      mapStyle="https://api.maptiler.com/maps/streets/style.json?key=T19ZJmfSF0nCVKYs7Pui"
      attributionControl={false}
    />
  );
}
