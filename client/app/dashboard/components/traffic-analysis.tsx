"use client";
import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { Chart } from "react-google-charts";

const TrafficMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsRendererFastest, setDirectionsRendererFastest] =
    useState<google.maps.DirectionsRenderer | null>(null);
  const [directionsRendererShortest, setDirectionsRendererShortest] =
    useState<google.maps.DirectionsRenderer | null>(null);
  const [congestionData, setCongestionData] = useState<(string | number)[][]>([
    ["Time", "Congestion Level"],
  ]);

  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (typeof window === "undefined" || !API_KEY) return;

    const initMap = () => {
      if (!mapRef.current || typeof google === "undefined") return;

      const newMap = new google.maps.Map(mapRef.current, {
        center: { lat: 19.076, lng: 72.8777 }, // Mumbai
        zoom: 12,
      });

      setMap(newMap);

      const trafficLayer = new google.maps.TrafficLayer();
      trafficLayer.setMap(newMap);

      const rendererFastest = new google.maps.DirectionsRenderer({
        polylineOptions: { strokeColor: "blue" },
      });
      rendererFastest.setMap(newMap);
      setDirectionsRendererFastest(rendererFastest);

      const rendererShortest = new google.maps.DirectionsRenderer({
        polylineOptions: { strokeColor: "red" },
      });
      rendererShortest.setMap(newMap);
      setDirectionsRendererShortest(rendererShortest);

      fetchTrafficRoute(); // Fetch traffic data on mount
    };

    const loadGoogleMapsScript = () => {
      if (typeof google !== "undefined" && google.maps) {
        initMap();
      } else {
        // Load script dynamically and set a callback
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap&libraries=places`;
        script.async = true;
        document.body.appendChild(script);

        // Set the callback to initialize the map once the script is loaded
        window.initMap = initMap;
      }
    };

    loadGoogleMapsScript();

    const interval = setInterval(fetchTrafficRoute, 300000); // Refresh every 5 mins
    return () => clearInterval(interval);
  }, [API_KEY]);

  const fetchTrafficRoute = async () => {
    if (
      !map ||
      !directionsRendererFastest ||
      !directionsRendererShortest ||
      !API_KEY
    )
      return;

    const url = `https://routes.googleapis.com/directions/v2:computeRoutes?key=${API_KEY}`;

    const requestBodyFastest = {
      origin: {
        location: { latLng: { latitude: 19.076, longitude: 72.8777 } },
      },
      destination: {
        location: { latLng: { latitude: 19.2183, longitude: 72.9781 } },
      },
      travelMode: "DRIVE",
      routingPreference: "TRAFFIC_AWARE_OPTIMAL",
      departureTime: new Date().toISOString(),
    };

    const requestBodyShortest = {
      ...requestBodyFastest,
      routingPreference: "SHORTEST",
    };

    try {
      const [fastestResponse, shortestResponse] = await Promise.all([
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBodyFastest),
        }),
        fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBodyShortest),
        }),
      ]);

      const fastestData = await fastestResponse.json();
      const shortestData = await shortestResponse.json();

      console.log("Fastest Route Response:", fastestData);
      console.log("Shortest Route Response:", shortestData);

      if (fastestData.routes?.length && shortestData.routes?.length) {
        plotRoute(fastestData.routes[0], directionsRendererFastest);
        plotRoute(shortestData.routes[0], directionsRendererShortest);
        updateCongestionData(fastestData.routes[0].travelAdvisory?.delay ?? 0);
      }
    } catch (error) {
      console.error("Error fetching traffic-aware routes:", error);
    }
  };

  const plotRoute = (
    route: any,
    renderer: google.maps.DirectionsRenderer | null
  ) => {
    if (!renderer || !map) return;
    const directionsService = new google.maps.DirectionsService();
    directionsService.route(
      {
        origin: { lat: 19.076, lng: 72.8777 },
        destination: { lat: 19.2183, lng: 72.9781 },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          renderer.setDirections(result);
        } else {
          console.error("Directions request failed:", status);
        }
      }
    );
  };

  const updateCongestionData = (delay: number) => {
    setCongestionData((prev) => [
      ...prev,
      [new Date().toLocaleTimeString(), delay],
    ]);
  };

  return (
    <div>
      {/* Google Maps Script */}
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap&libraries=places`}
        strategy="beforeInteractive"
      />

      <button onClick={fetchTrafficRoute} style={{ marginBottom: "10px" }}>
        Refresh Traffic Data
      </button>

      {/* Map Container */}
      <div
        ref={mapRef}
        style={{ width: "100%", height: "500px", minHeight: "400px" }}
      />

      <Chart
        width={"100%"}
        height={"400px"}
        chartType="LineChart"
        loader={<div>Loading Chart...</div>}
        data={congestionData}
        options={{
          hAxis: { title: "Time" },
          vAxis: { title: "Congestion Level (Seconds Delay)" },
          colors: ["#FF5733"],
          legend: { position: "bottom" },
        }}
      />
    </div>
  );
};

export default TrafficMap;
