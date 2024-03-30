import L from "leaflet";
import { useEffect } from "react";
import axios from "axios";

function Map({ locationName }) {
  useEffect(() => {
    const map = L.map("map").setView([0, 0], 6); // Default center and zoom
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    axios
      .get(
        `https://nominatim.openstreetmap.org/search?q=${locationName}&format=json`
      )
      .then((response) => {
        if (response.data && response.data.length > 0) {
          const { lat, lon } = response.data[0];
          map.setView([lat, lon], 8);
          L.marker([lat, lon]).addTo(map);
        }
      })
      .catch((error) => {
        console.error("Error fetching geocoding data:", error);
      });

    // Cleanup function
    return () => {
      map.remove();
    };
  }, [locationName]);
  return <div id="map" className="h-full w-full absolute z-0"></div>;
}

export default Map;
