import React from "react";
import {
    ShopItemImg,
    ShopItemInfo,
    ShopListContainer,
    ShopListItem,
} from "../../styles/layout";
import {CardContents, CardHeader} from "../../styles/element";

const ShopList = () => {
    return (
        <ShopListContainer>
            {["1234", "1234,", "1234", "1234"].map((item: string, index: number) => {
                return (
                    <ShopListItem key={index}>
                        <ShopItemImg/>
                        <ShopItemInfo>
                            <CardContents>판매자 : {"김영신"}</CardContents>
                            <div>
                                <CardHeader>
                                    [햇사과] 당도높은 산청사과!
                                </CardHeader>
                            </div>
                            <CardContents>{"35000 (10KG 당)"}</CardContents>
                            <CardContents>{"배송비 무료"}</CardContents>
                        </ShopItemInfo>
                    </ShopListItem>
                );
            })}
        </ShopListContainer>
    );
};

export default ShopList;
