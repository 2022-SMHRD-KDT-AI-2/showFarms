import React, { useRef, useState } from "react";
import { Line } from "../../styles/common";
import {
  CardGridContainer,
  CardGridContents,
  CardGridHeader,
} from "../../styles/element";
import Card from "../card";

interface ICardGrid {
  category: string;
}

const tempData = [
  {
    img: "",
    title: "asdf",
    seller: "asdf",
  },
  {
    img: "",
    title: "asdf",
    seller: "asdf",
  },
  {
    img: "",
    title: "asdf",
    seller: "asdf",
  },
  {
    img: "",
    title: "asdf",
    seller: "asdf",
  },
  {
    img: "",
    title: "asdf",
    seller: "asdf",
  },
];

const CardGrid = ({ category }: ICardGrid) => {
  return (
    <CardGridContainer>
      <CardGridHeader>{category}</CardGridHeader>
      <CardGridContents>
        {tempData.map((item, index) => {
          return (
            <Card
              title={item.title}
              img={item.img}
              seller={item.seller}
              key={index}
            />
          );
        })}
      </CardGridContents>
      <Line />
    </CardGridContainer>
  );
};

export default CardGrid;
