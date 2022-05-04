import React from "react";
import {AsideContainer, Category} from "../../styles/element";

const Aside = () => {
  const onClickCategory = () => {

  }
  return (
      <AsideContainer>
        {["1", "2", "3", "4"].map((item: string, index: number) => {
          return <Category key={index} onClick={onClickCategory}>{item}</Category>;
        })}
      </AsideContainer>
  );
};

export default Aside;
