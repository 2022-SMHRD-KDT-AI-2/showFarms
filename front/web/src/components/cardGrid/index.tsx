import React from "react";
import {
  CardGridContainer,
  CardGridContents,
  CardGridHeader,
  GirdHeader,
  Link,
} from "../../styles/element";
import Card from "../card";
import { ICardGrid } from "../../types";

const CardGrid = ({ category, post }: ICardGrid) => {
  return (
    <CardGridContainer>
      <GirdHeader>
        <CardGridHeader>{category}</CardGridHeader>
        <Link>더보기</Link>
      </GirdHeader>
      <CardGridContents>
        {category == "Live"
          ? post.slice(0, 4).map((item, index) => {
              return (
                <Card
                  title={item.post_title}
                  img={item.post_img}
                  seller={item.mb_id}
                  price={item.post_price}
                  shipmentFee={item.post_shipping}
                  contents={item.post_content}
                  category={item.post_category}
                  unit={item.post_unit}
                  postId={item.post_id}
                  key={index}
                />
              );
            })
          : post.map((item, index) => {
              return (
                <Card
                  title={item.post_title}
                  img={item.post_img}
                  seller={item.mb_id}
                  price={item.post_price}
                  shipmentFee={item.post_shipping}
                  contents={item.post_content}
                  category={item.post_category}
                  unit={item.post_unit}
                  postId={item.post_id}
                  key={index}
                />
              );
            })}
      </CardGridContents>
    </CardGridContainer>
  );
};

export default CardGrid;
