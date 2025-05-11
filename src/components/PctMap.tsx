import {
  Layer,
  LineLayerSpecification,
  Map,
  Source,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function PctMap() {
  const layerStyle: LineLayerSpecification = {
    id: "pctRoute",
    type: "line",
    source: "",
    paint: {
      "line-width": 3,
      "line-color": "#FF5733",
    },
  };

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
    >
      {/* <Source id="my-data" type="geojson" data="/20sd24-pct-centerline.geojson">
        <Layer {...layerStyle} />
      </Source> */}
    </Map>
  );
}
