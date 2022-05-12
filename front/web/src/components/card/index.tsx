import React from "react";
import { FlexColumnDiv, FlexRowDiv } from "../../styles/common";
import {
  CardContainer,
  CardContents,
  CardDiscount,
  CardHeader,
  CardImg,
  CardPrevPrice,
} from "../../styles/element";

interface ICard {
  img: string;
  title: string;
  seller: string;
  discount: number;
  price: number;
  shipmentFee: string;
}

const Card = ({ img, title, seller, discount, shipmentFee, price }: ICard) => {
  return (
    <CardContainer>
      <CardImg src={img} />
      <FlexColumnDiv>
        <CardContents>{seller}</CardContents>
        <CardHeader>{title}</CardHeader>
        <FlexRowDiv>
          <CardDiscount>{discount + "%"}</CardDiscount>
          <CardPrevPrice>{price}</CardPrevPrice>
          <CardContents>{"->"}</CardContents>
          <CardContents>{(price * (100 - discount)) / 100}</CardContents>
        </FlexRowDiv>
        <CardContents>{shipmentFee}</CardContents>
      </FlexColumnDiv>
    </CardContainer>
  );
};

export default Card;
