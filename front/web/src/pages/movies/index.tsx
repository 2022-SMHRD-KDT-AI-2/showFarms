import React from "react";
import { MovieContainer } from "../../styles/layout";

import "video.js/dist/video-js.css";
import { Button, MovieItem, MovieList } from "../../styles/element";
import Header from "../../components/header";
import { useParams } from "react-router";

const Movies: React.FC<any> = () => {
  const { postid } = useParams();
  return (
    <div>
      <Header />
      <MovieContainer>
        <MovieItem>
          <img src={`http://localhost:8000/video/${postid}`} />
          <div className="space1">
            <span className="size1">스트리밍 제목 및 영상 제목</span>
            <Button className="size2">상세보기</Button>
          </div>
          <div>
            <span className="size2">2022.04.01</span>
            <span className="size2">김창렬</span>
            <span className="size2">37000 / 1 BOX</span>
          </div>
        </MovieItem>
        <MovieList>{/*<ShopList/>*/}</MovieList>
      </MovieContainer>
    </div>
  );
};

export default Movies;
