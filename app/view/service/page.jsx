"use client";

import { useEffect, useRef } from "react";

const MapPage = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Load the Google Maps script
    const loadGoogleMaps = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyD1sFu241LbJZo6JpY-hoOLJ2pGGuaPWJo`;
      script.async = true;
      script.onload = () => initMap();
      document.head.appendChild(script);
    };

    // Initialize the map
    const initMap = () => {
      if (mapRef.current) {
        new window.google.maps.Map(mapRef.current, {
          center: { lat: 40.7128, lng: -74.006 }, // Default location: New York City
          zoom: 12,
        });
      }
    };

    loadGoogleMaps();
  }, []);

  return (
    <div>
      <h1>Google Map Integration</h1>
      <div
        ref={mapRef}
        style={{ width: "500px", height: "500px", margin: "20px 0" }}
      ></div>
    </div>
  );
};

export default MapPage;
