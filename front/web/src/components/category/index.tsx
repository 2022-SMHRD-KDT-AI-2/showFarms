import React from "react";
import {CategoryContainer} from "../../styles/layout";

import apple from "../../images/category/apple.png";
import orange from "../../images/category/orange.png";
import watermelon from "../../images/category/watermelon.png";
import strawberry from "../../images/category/strawberry.png";

export const Category = () => {
  const iconList = [apple, orange, watermelon, strawberry];
  const onClickCategory = () => {

  }
  return (
      <CategoryContainer>
        {iconList.map((item, index) => {
          return <img src={item} key={index} onClick={onClickCategory}/>;
        })}
      </CategoryContainer>
  );
};
