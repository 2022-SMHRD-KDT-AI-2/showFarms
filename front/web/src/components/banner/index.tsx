import React from "react";
import { BannerContainer } from "../../styles/layout";
import { BannerItem } from "../../styles/common";
import banner01 from "../../images/banners/banner01.png";
import { ArrowLeft, ArrowRight } from "../../styles/element";
import arrow1 from "../../images/icons/arrow1.png";

export const Banner = () => {
  return (
    <>
      <BannerContainer>
        <BannerItem src={banner01} />
        <ArrowRight src={arrow1} />
        <ArrowLeft src={arrow1} />
      </BannerContainer>
    </>
  );
};
