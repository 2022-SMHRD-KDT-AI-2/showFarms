import React from "react";
import { Button, Input } from "../../styles/element";
import { PostContainer } from "../../styles/layout";
import { imageTarget } from "../../datas";
import axiosInstance from "../../utils/AxiosInstance";
import useInput from "../../hooks/useInput";
import { IPostItem } from "../../types";

const Post = ({
  img,
  title,
  price,
  category,
  contents,
  shipping,
  postId,
  unit,
  seller,
  onClose,
}: IPostItem) => {
  const [amount, onChangeAmount] = useInput(0);
  const onSubmit = () => {
    if (amount !== 0) {
      axiosInstance
        .post("/trade/new", {
          trade_price: price,
          vol: amount,
          mb_id: seller,
          buyer_id: "test",
          post_id: postId,
          post_title: title,
        })
        .then((res) => {
          if (res.data) onClose();
        });
    } else {
      alert("수량을 입력해주세요!");
    }
  };
  return (
    <PostContainer onClick={(e) => e.stopPropagation()}>
      <img src={imageTarget + img} alt="" />
      <span className="size1"> {title}</span>
      <span>
        <span>
          <span>품목 : {category}</span>
          <span>판매자 : {seller}</span>
        </span>
      </span>
      <span className="space">
        <span>
          <span>가격 : {price}</span>
          <span>단위 : {unit}</span>
          <span>배송비 : {shipping}</span>
        </span>
        <span>
          <Input value={amount} onChange={onChangeAmount} width={"10rem"} />
          <Button onClick={onSubmit}>구매</Button>
        </span>
      </span>
      <div className="contents">{contents}</div>
      <div>
        <Button onClick={onClose}>닫기</Button>
      </div>
    </PostContainer>
  );
};

export default Post;
