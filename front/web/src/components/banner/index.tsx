import React from "react";
import { BannerContainer } from "../../styles/layout";
import { BannerItem } from "../../styles/common";
import banner4 from "../../images/banner4.png";
import banner2 from "../../images/banner2.png";
import { ArrowLeft, ArrowRight } from "../../styles/element";
import arrow1 from "../../images/arrow1.png";

export const Banner = () => {
  return (
    <>
      <BannerContainer>
        <BannerItem src={banner2} />
        <ArrowRight src={arrow1} />
        <ArrowLeft src={arrow1} />
      </BannerContainer>
    </>
  );
};
