import React from "react";
import {
  ShopItemImg,
  ShopItemInfo,
  ShopListContainer,
  ShopListItem,
} from "../../styles/layout";
import { CardContents, CardHeader } from "../../styles/element";
import { IPost } from "../../types";
import { imageTarget } from "../../datas";
import Modal from "../modal";
import Post from "../../pages/post";
import useToggleModal from "../../hooks/useToggleModal";

const ShopList = ({ data }: { data: IPost[] }) => {
  const [view, , openView, closeView] = useToggleModal();
  return (
    <ShopListContainer>
      {data.map((item, index) => {
        return (
          <div>
            <ShopListItem key={index} onClick={openView}>
              <ShopItemImg src={imageTarget + item.post_img} />
              <ShopItemInfo>
                <CardContents>판매자 : {item.mb_id}</CardContents>
                <div>
                  <CardHeader>{item.post_title}</CardHeader>
                </div>
                <CardContents>
                  {item.post_price + " / " + item.post_unit}
                </CardContents>
                <CardContents>{item.post_shipping}</CardContents>
              </ShopItemInfo>
            </ShopListItem>
            {view && (
              <Modal
                component={
                  <Post
                    img={item.post_img}
                    title={item.post_title}
                    price={item.post_price}
                    postId={item.post_id}
                    category={item.post_category}
                    contents={item.post_content}
                    unit={item.post_content}
                    shipping={item.post_shipping}
                    seller={item.mb_id}
                    onClose={closeView}
                  />
                }
                onCloseModal={closeView}
              />
            )}
          </div>
        );
      })}
    </ShopListContainer>
  );
};

export default ShopList;
