import React, {useEffect, useMemo, useState} from "react";
import {MovieContainer} from "../../styles/layout";
import {useParams} from "react-router";
import Aside from "../../components/aside";

import "video.js/dist/video-js.css";
import {MovieItem, MovieList} from "../../styles/element";

const Movies: React.FC<any> = () => {
    return (
        <MovieContainer>
            <Aside/>
            <MovieItem>
                <img src={"http://localhost:8000/video"}/>
                <h1>title</h1>
                <h1>seller</h1>
                <h1>date</h1>
                <h1>length</h1>
                <h1>price</h1>
                <h1>link</h1>
            </MovieItem>
            <MovieList>asdf</MovieList>
        </MovieContainer>
    );
};

export default Movies;
