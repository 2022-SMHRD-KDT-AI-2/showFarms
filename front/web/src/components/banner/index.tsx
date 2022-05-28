import React from "react";
import {BannerContainer} from "../../styles/layout";
import {BannerItem} from "../../styles/common";
import banner01 from "../../images/banners/banner01.png";

export const Banner = () => {
    return (

        <BannerContainer>
            <BannerItem src={banner01}/>
        </BannerContainer>

    );
};
