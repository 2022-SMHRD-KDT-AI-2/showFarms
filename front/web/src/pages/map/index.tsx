import React, {useEffect, useState, useRef} from "react";
import {KaKaoMap, MapContainer} from "../../styles/layout";
import ShopList from "../../components/shopList";
import {Map, MapMarker} from "react-kakao-maps-sdk";
import Marker from "./marker";
import Header from "../../components/header";

export interface ICoord {
    lat: number;
    lng: number;
}

export default function KakaoMap() {
    const [coord, setCoord] = useState<ICoord>({
        lat: 0,
        lng: 0,
    });
    const [data, setData] = useState<kakao.maps.services.PlacesSearchResultItem[]>([]);

    function getLocation() {
        let lat: number, lng: number;
        if (navigator.geolocation) {
            // 위치 권한을 허용하면
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    lat = position.coords.latitude;
                    lng = position.coords.longitude;
                    setCoord((coord) => {
                        return {
                            ...coord,
                            lat,
                            lng,
                        };
                    });
                },
                function (error) {
                    console.error(error);
                },
                {
                    enableHighAccuracy: false,
                    maximumAge: 0,
                    timeout: Infinity,
                }
            );
        } else {
            alert("위치 설정을 허용해주세요!");
            return;
        }
    }

    useEffect(() => {
        getLocation();
    }, []);

    const onCreate = (map: kakao.maps.Map) => {
        const ps = new kakao.maps.services.Places(map);
        ps.categorySearch(
            "FD6" as kakao.maps.services.CategoryGroupCode,
            (res, status, pagination) => {
                if (status === kakao.maps.services.Status.OK) {
                    setData(res);
                }
            },
            {
                useMapBounds: true,
                location: new kakao.maps.LatLng(coord.lat, coord.lng),
            }
        );
    };

    return (
        <div>
            <Header/>
            <MapContainer>

                {coord ? (
                    <KaKaoMap>
                        <Map
                            onCreate={onCreate}
                            center={coord}
                            style={{width: "100%", height: "100%"}}
                            level={3}
                        >
                            {data.map((item, index) => {
                                return (
                                    <Marker
                                        key={index}
                                        data={{
                                            index: index,
                                            title: item.place_name,
                                            address: item.road_address_name,
                                            x: Number.parseFloat(item.x),
                                            y: Number.parseFloat(item.y),
                                        }}
                                    />
                                );
                            })}
                        </Map>
                    </KaKaoMap>
                ) : (
                    "loading..."
                )}

                <ShopList/>
            </MapContainer>
        </div>
    );
}
