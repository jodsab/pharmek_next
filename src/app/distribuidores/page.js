"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -12.0464, // Ejemplo en Lima, Perú
  lng: -77.0428,
};

const distributors = [
  { lat: -12.0464, lng: -77.0428, name: "Distribuidor 1" },
  { lat: -12.0453, lng: -77.0305, name: "Distribuidor 2" },
  // más distribuidores...
];
import WithNavbarAndFooter from "@/HOC/WithNavbarAndFooter";

import "./styles.scss";

const Distribuidores = () => {
  return (
    <WithNavbarAndFooter>
      <LoadScript googleMapsApiKey={process.env.NEXT_GOOGLE_MAP_KEY}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        >
          {distributors.map((dist, index) => (
            <Marker
              key={index}
              position={{ lat: dist.lat, lng: dist.lng }}
              title={dist.name}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </WithNavbarAndFooter>
  );
};

export default Distribuidores;
