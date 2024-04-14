import L from "leaflet";
import "leaflet/dist/leaflet.css";

let map: L.Map | undefined;
let markerLayer: L.LayerGroup;

export const displayMap = (ipDetails: IpDetailsType) => {
  if (!map) {
    map = L.map("map").setView(
      [ipDetails.location.lat, ipDetails.location.lng],
      14.5,
    );
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    markerLayer = L.layerGroup().addTo(map);
  } else {
    markerLayer.clearLayers();
  }

  map.zoomControl.remove();

  const customIcon = L.icon({
    iconUrl: "images/icon-location.svg",
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });

  const marker = L.marker([ipDetails.location.lat, ipDetails.location.lng], {
    icon: customIcon,
  });
  markerLayer.addLayer(marker);

  map.setView([ipDetails.location.lat, ipDetails.location.lng], 14.5);
};
