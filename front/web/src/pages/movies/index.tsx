import React, { useEffect, useState } from "react";
import { MovieContainer } from "../../styles/layout";

import "video.js/dist/video-js.css";
import { Button, MovieItem, MovieList } from "../../styles/element";
import Header from "../../components/header";
import { useParams } from "react-router";
import { IPost } from "../../types";
import axiosInstance from "../../utils/AxiosInstance";

const Movies: React.FC<any> = () => {
  const { postid } = useParams();
  const [data, setData] = useState<IPost>();
  useEffect(() => {
    axiosInstance.get(`/posts/${postid}`).then((res) => {
      if (res.data) {
        setData(res.data);
      }
    });
  }, []);
  return (
    <div>
      <Header />
      <MovieContainer>
        <MovieItem>
          <img src={`http://localhost:8000/video/${postid}`} />
          <div className="space1">
            <span className="size1">{data?.post_title}</span>
            <Button className="size2">상세보기</Button>
          </div>
          <div>
            <span className="size2">{`${data?.post_dt.toString()}`}</span>
            <span className="size2">{data?.mb_id}</span>
            <span className="size2">{`${data?.post_price} / ${data?.post_unit}`}</span>
          </div>
        </MovieItem>
        <MovieList>{/*<ShopList/>*/}</MovieList>
      </MovieContainer>
    </div>
  );
};

export default Movies;
