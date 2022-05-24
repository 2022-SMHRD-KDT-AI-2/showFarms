import React, {useEffect, useMemo, useState} from "react";
import {MovieContainer} from "../../styles/layout";

import "video.js/dist/video-js.css";
import {Button, MovieItem, MovieList} from "../../styles/element";
import Header from "../../components/header";
import ShopList from "../../components/shopList";
import banner from "../../images/banners/banner4.png"

const Movies: React.FC<any> = () => {
    return (
        <div>
            <Header/>
            <MovieContainer>
                <MovieItem>
                    <img src={banner}/>
                    <div className="space1">
                        <text className="size1">제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목</text>
                        <Button className="size2">상세보기</Button>
                    </div>
                    <div>
                        <text className="size2">2022.04.01</text>
                        <text className="size2">seller</text>
                        <text className="size2">37000 / 1 BOX</text>
                    </div>
                </MovieItem>
                <MovieList>
                    <ShopList/>
                </MovieList>
            </MovieContainer>
        </div>
    );
};

export default Movies;
