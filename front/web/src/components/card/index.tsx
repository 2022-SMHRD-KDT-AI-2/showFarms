import React from "react";
import { FlexColumnDiv, FlexRowDiv } from "../../styles/common";
import {
  CardContainer,
  CardContents,
  CardHeader,
  CardImg,
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

const Card = ({ img, title, seller, discount, shipmentFee, price }: ICard) => {
  return (
    <CardContainer>
      <CardImg src={titleImg} />
      <FlexColumnDiv>
        <CardContents>판매자 : {seller}</CardContents>
        <CardHeader>{title}</CardHeader>
        <CardContents>{(price * (100 - discount)) / 100}</CardContents>
        <CardContents>{shipmentFee}</CardContents>
      </FlexColumnDiv>
    </CardContainer>
  );
};

export default Card;
