import React from "react";
import {
    CardContainer,
    CardContents,
    CardHeader,
} from "../../styles/element";
import titleImg from "../../images/icons/title_img.png";

interface ICard {
    img: string;
    title: string;
    seller: string;
    discount: number;
    price: number;
    shipmentFee: string;
}

const Card = ({img, title, seller, discount, shipmentFee, price}: ICard) => {
    return (
        <CardContainer>
            <img src={titleImg}/>
            <div>
                <CardContents>판매자 : {seller}</CardContents>
                <CardHeader>{title}</CardHeader>
                <CardContents>{(price * (100 - discount)) / 100}</CardContents>
                <CardContents>{shipmentFee}</CardContents>
            </div>
        </CardContainer>
    );
};

export default Card;
