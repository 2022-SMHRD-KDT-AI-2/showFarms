import React, { useRef, useState } from "react";
import { FlexRowDiv, Line } from "../../styles/common";
import {
  CardGridContainer,
  CardGridContents,
  CardGridHeader,
  GirdHeader,
  Link,
  MoreView,
} from "../../styles/element";
import Card from "../card";

interface ICardGrid {
  category: string;
}

const tempData = [
  {
    img: "",
    title: "제목제목제목제목제목제목제목제목",
    seller: "김덕순",
    discount: 10,
    price: 15000,
    shipmentFee: "free",
  },
  {
    img: "",
    title: "제목제목제목제목제목제목제목제목",
    seller: "김덕순",
    discount: 10,
    price: 15000,
    shipmentFee: "free",
  },
  {
    img: "",
    title: "제목제목제목제목제목제목제목제목",
    seller: "김덕순",
    discount: 10,
    price: 15000,
    shipmentFee: "free",
  },
  {
    img: "",
    title: "제목제목제목제목제목제목제목제목",
    seller: "김덕순",
    discount: 10,
    price: 15000,
    shipmentFee: "free",
  },
  {
    img: "",
    title: "제목제목제목제목제목제목제목제목",
    seller: "김덕순",
    discount: 10,
    price: 15000,
    shipmentFee: "free",
  },
];

const CardGrid = ({ category }: ICardGrid) => {
  return (
    <CardGridContainer>
      <GirdHeader>
        <CardGridHeader>{category}</CardGridHeader>
        <Link>더보기</Link>
      </GirdHeader>

      <CardGridContents>
        {tempData.map((item, index) => {
          return (
            <Card
              title={item.title}
              img={item.img}
              seller={item.seller}
              discount={item.discount}
              price={item.price}
              shipmentFee={item.shipmentFee}
              key={index}
            />
          );
        })}
      </CardGridContents>
    </CardGridContainer>
  );
};

export default CardGrid;
