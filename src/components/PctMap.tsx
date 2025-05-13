import {
  Layer,
  LineLayerSpecification,
  MapRef,
  Map,
  Marker,
  NavigationControl,
  Source,
} from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import type { FeatureCollection } from "geojson";
import { useEffect, useRef, useState } from "react";
// import pctFullJson from "/geojson/2024-pct-full.json";

export default function PctMap({
  latLon,
}: {
  latLon: { lat: number; lon: number } | null;
}) {
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

  // ref needed for fly-to functionality
  const mapRef = useRef<MapRef>(null);

  // its such a big file of geojson that we actually want to load it via a Promise
  useEffect(() => {
    fetch("/geojson/2024-pct-full.json")
      .then((res) => res.json())
      // react doesn't like importing as geojson so we're going to import here as json and cast as geojson type
      .then((data: FeatureCollection) => setGeoData(data))
      .catch((err) => console.error("Failed to load PCT GeoJSON: ", err));
  }, []);

  // fly to if point is out of view
  useEffect(() => {
    if (mapRef.current && latLon) {
      mapRef.current?.flyTo({
        center: [latLon.lon, latLon.lat],
      });
    }
  }, [latLon]);

  return (
    <div className="flex justify-center ">
      <Map
        initialViewState={{
          longitude: -115,
          latitude: 41.3,
          zoom: 4.2,
        }}
        ref={mapRef}
        style={{
          width: "95%",
          height: "600px",
          borderRadius: "10px",
          border: "1px solid #798c66",
        }}
        attributionControl={false}
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
        // mouse scroll only works if cntrl, meta, or alt is pressed, to allow for native webpage scrolling
        cooperativeGestures={true}
      >
        <NavigationControl
          showCompass={true}
          showZoom={true}
          visualizePitch={true}
        />
        {latLon?.lat && latLon.lon && (
          <Marker longitude={latLon.lon} latitude={latLon.lat}>
            <div className="relative w-6 h-6">
              {/* Green centered dot */}
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-green-700 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </Marker>
        )}
        {geoData && showPct && (
          <Source id="pctRoute" type="geojson" data={geoData}>
            <Layer {...layerStyle} />
          </Source>
        )}
      </Map>
    </div>
  );
}
