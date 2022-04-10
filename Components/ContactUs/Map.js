import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Map.css'
const Map = (props) => {
    const position =[-20.161173400534235, 57.51600721015591]
  return (
    <MapContainer center={position} zoom={12} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
         MauFruits
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default Map;
