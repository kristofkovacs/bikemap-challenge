import React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";

class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoia3Jpc3RvZmtvdmFjcyIsImEiOiJjandreTUwZG8weGszNDhxa2gycGVtM3o2In0.K366AmZiqxLwKxUANX-cuw";

    const map = new mapboxgl.Map({
      container: this.mapWrapper,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [
        this.props.stations[0].longitude,
        this.props.stations[0].latitude,
      ],
      zoom: 12,
    });
    this.props.stations.forEach(function (station, index) {
      var el = document.createElement("div");
      el.className = "marker";

      new mapboxgl.Marker(el)
        .setLngLat([station.longitude, station.latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            "<h3>" + index + ". " + station.name + "</h3>"
          )
        )
        .addTo(map);
    });
  }

  render() {
    return (
      <div
        ref={(el) => (this.mapWrapper = el)}
        className="mapWrapper"
        style={{ width: "100%", height: "250px" }}
      />
    );
  }
}

export default Map;
