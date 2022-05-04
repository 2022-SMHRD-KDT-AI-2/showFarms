import React from "react";
import { ShopListContainer, ShopListItem } from "../../styles/layout";

const ShopList = () => {
  return (
    <ShopListContainer>
      {["1234", "1234,", "1234", "1234"].map((item: string, index: number) => {
        return <ShopListItem key={index}>{item}</ShopListItem>;
      })}
    </ShopListContainer>
  );
};

export default ShopList;
