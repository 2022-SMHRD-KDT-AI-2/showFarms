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
                    <img
                        src={"http://127.0.0.1:8000/video"}/>
                    <div className="space1">
                        <text className="size1">스트리밍 제목 및 영상 제목</text>
                        <Button className="size2">상세보기</Button>
                    </div>
                    <div>
                        <text className="size2">2022.04.01</text>
                        <text className="size2">김창렬</text>
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
