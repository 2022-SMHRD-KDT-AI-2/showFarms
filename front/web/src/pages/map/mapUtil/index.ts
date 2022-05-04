import React from "react";
import { ICoord } from "../../../atom/common";

const { kakao } = window;

export const createMarker = (
  map: React.RefObject<HTMLDivElement>,
  arr: ICoord[]
) => {
  if (map) {
    arr.forEach((item) => {
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(item.lat, item.long),
      });
      marker.setMap(map.current);
    });
  }
  // marker.setMap(null) >> 삭제
};
