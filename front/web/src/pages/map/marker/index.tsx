import React from "react";
import { CustomOverlayMap } from "react-kakao-maps-sdk";
import { MapMarker } from "../../../styles/element";

interface IMarker {
  data: {
    index: number;
    title: string;
    address: string;
    isHover?: boolean;
    y: number;
    x: number;
  };
}

const Marker = ({ data }: IMarker) => {
  return (
    <CustomOverlayMap position={{ lat: data.x, lng: data.y }}>
      <MapMarker>{data.index}</MapMarker>
    </CustomOverlayMap>
  );
};

export default Marker;
