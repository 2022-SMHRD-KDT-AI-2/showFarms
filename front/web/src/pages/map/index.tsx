import React, {useEffect, useState, useRef} from "react";
import {MapContainer} from "../../styles/layout";

declare global {
  interface Window {
    kakao: any;
  }
}

const {kakao} = window;

export default function KakaoMap() {
  const [map, setMap] = useState(null);

  const mapRef = useRef(null);

  useEffect(() => {
    const options = {
      center: new kakao.maps.LatLng(37.50802, 127.062835),
      level: 3,
    };
    setMap(new kakao.maps.Map(mapRef.current, options));
  }, []);

  return <MapContainer id="container" ref={mapRef}/>;
}
