import React from "react";
import { CardContainer, CardContents, CardHeader } from "../../styles/element";
import useToggleModal from "../../hooks/useToggleModal";
import Modal from "../modal";
import Post from "../../pages/post";
import { ICard } from "../../types";
import { imageTarget } from "../../datas";

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
}: ICard) => {
  const [view, , openView, closeView] = useToggleModal();

  return (
    <div
      style={{
        width: "23%",
        margin: "1rem",
      }}
    >
      <CardContainer onClick={openView}>
        <img src={imageTarget + img} alt="" />
        <div>
          <CardContents>{seller}</CardContents>
          <CardHeader>{title}</CardHeader>
          <CardContents>{price}</CardContents>
          <CardContents>{shipmentFee}</CardContents>
        </div>
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
