"use client";
import React, { useRef, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const MapBanner = ({ props }: { props: any }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = (await loader.importLibrary(
        "maps",
      )) as google.maps.MapsLibrary;
      const { Marker } = (await loader.importLibrary(
        "marker",
      )) as google.maps.MarkerLibrary;
      const position = {
        lat: props.lat,
        lng: props.lng,
      };

      const mapOptions = {
        center: position,
        zoom: 17,
        mapId: "PETRESCUE-1234",
      };

      const map = new Map(mapRef.current, mapOptions);
      const marker = new Marker({
        map: map,
        position: position,
        title: "Pet found here",
        animation: google.maps.Animation.DROP,
      });
    };
    initMap();
  }, []);

  return <div ref={mapRef} style={{ width: "100%" }} className="min-h-96" />;
};

export default MapBanner;
