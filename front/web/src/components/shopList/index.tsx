import React from "react";
import {
  ShopItemImg,
  ShopItemInfo,
  ShopListContainer,
  ShopListItem,
} from "../../styles/layout";
import { CardContents, CardHeader } from "../../styles/element";

const ShopList = () => {
  return (
    <ShopListContainer>
      {["1234", "1234,", "1234", "1234"].map((item: string, index: number) => {
        return (
          <ShopListItem key={index}>
            <ShopItemImg />
            <ShopItemInfo>
              <CardContents>판매자 : {"asdf"}</CardContents>
              <div>
                <CardHeader>
                  asdasdasdasdadfdfdfdfdfsaddfasdffasdfasdfasdasdasdasdasasdf
                </CardHeader>
              </div>
              <CardContents>{12345}</CardContents>
              <CardContents>{"free"}</CardContents>
            </ShopItemInfo>
          </ShopListItem>
        );
      })}
    </ShopListContainer>
  );
};

export default ShopList;
