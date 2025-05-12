import {
  Layer,
  LineLayerSpecification,
  Map,
  Source,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import type { FeatureCollection } from "geojson";
import { useEffect, useState } from "react";
// import pctFullJson from "/geojson/2024-pct-full.json";

export default function PctMap() {
  const layerStyle: LineLayerSpecification = {
    id: "pctRoute",
    type: "line",
    source: "",
    paint: {
      "line-width": 1,
      "line-color": "#FF5733",
    },
  };

  const [geoData, setGeoData] = useState<FeatureCollection>();
  // the PCT is actually shown in the default layer provided by maptiler when you zoom in enough,
  //  so we want to remove ours when we zoom in close enough
  const [showPct, setShowPct] = useState<Boolean>(true);

  useEffect(() => {
    fetch("/geojson/2024-pct-full.json")
      .then((res) => res.json())
      // react doesn't like importing as geojson so we're going to import here as json and cast as geojson type
      .then((data: FeatureCollection) => setGeoData(data))
      .catch((err) => console.error("Failed to load PCT GeoJSON: ", err));
  }, []);

  return (
    <div className="border-2 border-[#798c66] rounded-sm">
      <Map
        initialViewState={{
          longitude: -115,
          latitude: 41.3,
          zoom: 4.2,
        }}
        style={{ width: 1200, height: 600 }}
        // TODO: decide if remove: attributionControl={false}
        mapStyle={`https://api.maptiler.com/maps/outdoor/style.json?key=${
          import.meta.env.VITE_MAPTILER_KEY
        }`}
        // once we get to a certain zoom level, we want to remove the pct route to use the native one provided by maptiler
        onZoom={(e) => {
          const zoom = e.viewState.zoom;
          if (zoom > 10 && showPct) {
            setShowPct(false);
          } else if (zoom <= 10 && !showPct) {
            setShowPct(true);
          }
        }}
      >
        {geoData && showPct && (
          <Source id="pctRoute" type="geojson" data={geoData}>
            <Layer {...layerStyle} />
          </Source>
        )}
      </Map>
    </div>
  );
}
