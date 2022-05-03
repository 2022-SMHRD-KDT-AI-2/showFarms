import React from "react";
import {
  CardContainer,
  CardContents,
  CardHeader,
  CardImg,
} from "../../styles/element";

interface ICard {
  img: string;
  title: string;
  seller: string;
}

const Card = ({ img, title, seller }: ICard) => {
  return (
    <CardContainer>
      <CardImg src={img} />
      <CardHeader>{title}</CardHeader>
      <CardContents>{seller}</CardContents>
    </CardContainer>
  );
};

export default Card;
