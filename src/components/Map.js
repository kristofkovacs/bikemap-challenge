import React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
class Map extends React.Component {
  componentDidMount() {
    // Creates new map instance
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [-73.985664, 40.748514],
      zoom: 12,
    });

    // Creates new directions control instance
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/driving",
    });

    // Integrates directions control with map
    map.addControl(directions, "top-left");
  }

  render() {
    return (
      // Populates map by referencing map's container property
      <div
        ref={(el) => (this.mapWrapper = el)}
        className="mapWrapper"
        style={{ width: "100%", height: "350px" }}
      />
    );
  }
}

export default Map;
