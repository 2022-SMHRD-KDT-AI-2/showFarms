import React, {useEffect, useState, useRef} from "react";
import {KaKaoMap, MapContainer} from "../../styles/layout";
import {coordState, ICoord} from "../../atom/common";
import {useRecoilValue} from "recoil";
import ShopList from "../../components/shopList";

declare global {
    interface Window {
        kakao: any;
    }
}

const {kakao} = window;

export default function Map() {
    const coordination = useRecoilValue(coordState);
    const [map, setMap] = useState(null);
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (coordination) {
            setMap(
                new kakao.maps.Map(mapRef.current, {
                    center: new kakao.maps.LatLng(coordination.lat, coordination.long),
                    level: 4,
                })
            );
        }
    }, [coordination]);

    console.log(map)
    return (
        <MapContainer>
            <KaKaoMap id="container" ref={mapRef}/>
            <ShopList/>
        </MapContainer>
    );
}
