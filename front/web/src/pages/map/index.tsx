import React, { useEffect, useState } from "react";
import { KaKaoMap, MapContainer } from "../../styles/layout";
import ShopList from "../../components/shopList";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import Header from "../../components/header";
import axiosInstance from "../../utils/AxiosInstance";
import { ICoord, IPost, IUser } from "../../types";

export default function KakaoMap() {
  const [coord, setCoord] = useState<ICoord>({
    lat: 0,
    lng: 0,
  });
  const [data, setData] = useState<IUser[]>([]);
  const [post, setPost] = useState<IPost[]>([]);
  const [show, setShow] = useState<IPost[]>([]);

  useEffect(() => {
    const lat = window.localStorage.getItem("lat");
    const long = window.localStorage.getItem("long");
    axiosInstance
      .post("/users/location", {
        mb_id: window.localStorage.getItem("id"),
        mb_lati: lat,
        mb_longi: long,
      })
      .then((res) => {
        if (res.data) {
          setData(res.data.userList);
          setPost(res.data.postList);
        }
        console.log(res.data);
      });
    if (lat && long) setCoord({ lat: parseFloat(lat), lng: parseFloat(long) });
  }, []);

  const getSellerItem = (id: string) => {
    return post.filter(
      (item) =>
        item.mb_id == id && item.mb_id != window.localStorage.getItem("id")
    );
  };

  return (
    <div>
      <Header />
      <MapContainer>
        {coord ? (
          <KaKaoMap>
            <Map
              center={coord}
              style={{ width: "100%", height: "100%" }}
              level={3}
            >
              {data.map((item, index) => {
                return (
                  <MapMarker
                    key={index}
                    position={{ lat: item.mb_lati, lng: item.mb_longi }}
                    clickable={true}
                    onClick={() => {
                      if (item.mb_id != null) {
                        setShow(getSellerItem(item.mb_id));
                      }
                    }}
                  />
                );
              })}
            </Map>
          </KaKaoMap>
        ) : (
          "loading..."
        )}
        <ShopList data={show} />
      </MapContainer>
    </div>
  );
}
