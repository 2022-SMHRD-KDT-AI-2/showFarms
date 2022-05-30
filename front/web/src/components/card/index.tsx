import React from "react";
import { CardContainer, CardContents, CardHeader } from "../../styles/element";
import useToggleModal from "../../hooks/useToggleModal";
import Modal from "../modal";
import Post from "../../pages/post";
import { ICard } from "../../types";
import { imageTarget } from "../../datas";
import { useNavigate } from "react-router";

const Card = ({
  img,
  title,
  seller,
  shipmentFee,
  price,
  contents,
  unit,
  category,
  postId,
  type,
}: ICard) => {
  const [view, , openView, closeView] = useToggleModal();
  const nav = useNavigate();
  const highlight = () => {
    return type == "Live" ? <div className="highlight">Live</div> : null;
  };
  return (
    <div
      style={{
        width: "23%",
        margin: "1rem",
      }}
    >
      <CardContainer
        onClick={type == "Live" ? () => nav(`/movies/${postId}`) : openView}
      >
        <img src={imageTarget + img} alt="" />
        <div>
          <CardContents>{seller}</CardContents>
          <CardHeader>{title}</CardHeader>
          <CardContents>{price}</CardContents>
          <CardContents>{shipmentFee}</CardContents>
        </div>
        {highlight()}
      </CardContainer>
      {view && (
        <Modal
          component={
            <Post
              img={img}
              title={title}
              price={price}
              postId={postId}
              category={category}
              contents={contents}
              unit={unit}
              shipping={shipmentFee}
              seller={seller}
              onClose={closeView}
            />
          }
          onCloseModal={closeView}
        />
      )}
    </div>
  );
};

export default Card;
