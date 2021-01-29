import React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia3Jpc3RvZmtvdmFjcyIsImEiOiJjandreTUwZG8weGszNDhxa2gycGVtM3o2In0.K366AmZiqxLwKxUANX-cuw";
class Map extends React.Component {
  componentDidMount() {
    // Creates new map instance
    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [
        this.props.stations[0].longitude,
        this.props.stations[0].latitude,
      ],
      zoom: 12,
    });

    this.props.stations.forEach(function (station) {
      var el = document.createElement("div");
      el.className = "marker";

      new mapboxgl.Marker(el)
        .setLngLat([station.longitude, station.latitude])
        .addTo(map);
    });
  }

  render() {
    return (
      // Populates map by referencing map's container property
      <div
        ref={(el) => (this.mapWrapper = el)}
        className="mapWrapper"
        style={{ width: "100%", height: "250px" }}
      />
    );
  }
}

export default Map;
