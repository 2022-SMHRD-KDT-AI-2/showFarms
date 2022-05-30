import React, { useEffect, useState } from "react";
import { MovieContainer } from "../../styles/layout";

import "video.js/dist/video-js.css";
import { Button, MovieItem } from "../../styles/element";
import Header from "../../components/header";
import { useParams } from "react-router";
import { IPost } from "../../types";
import axiosInstance from "../../utils/AxiosInstance";
import Modal from "../../components/modal";
import Post from "../post";
import useToggleModal from "../../hooks/useToggleModal";

const Movies: React.FC<any> = () => {
  const { postid } = useParams();
  const [data, setData] = useState<IPost>();
  const [view, , openView, closeView] = useToggleModal();
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
            <Button className="size2" onClick={openView}>
              상세보기
            </Button>
          </div>
          <div>
            <span className="size2">{`${data?.post_dt.toString()}`}</span>
            <span className="size2">{data?.mb_id}</span>
            <span className="size2">{`${data?.post_price} / ${data?.post_unit}`}</span>
          </div>
        </MovieItem>
        {/*<MovieList>/!*<ShopList/>*!/</MovieList>*/}
      </MovieContainer>
      {view && data && (
        <Modal
          component={
            <Post
              img={data.post_img}
              title={data.post_title}
              price={data.post_price}
              postId={data.post_id}
              category={data.post_category}
              contents={data.post_content}
              unit={data.post_unit}
              shipping={data.post_shipping}
              seller={data.mb_id}
              onClose={closeView}
            />
          }
          onCloseModal={closeView}
        />
      )}
    </div>
  );
};

export default Movies;
