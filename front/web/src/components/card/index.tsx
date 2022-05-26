import React from "react";
import {
    CardContainer,
    CardContents,
    CardHeader,
} from "../../styles/element";
import useToggleModal from "../../hooks/useToggleModal";
import Modal from "../modal";
import Post from "../../pages/post";

interface ICard {
    img: string;
    title: string;
    seller: string;
    price: number;
    shipmentFee: string;
    unit: string,
    category: string,
    contents: string,
    postId: number
}

const Card = ({img, title, seller, shipmentFee, price, contents, unit, category, postId}: ICard) => {
    const [view, , openView, closeView] = useToggleModal()

    return (
        <CardContainer onClick={openView}>
            <img src={`http://121.147.185.200:8081/images/${img}`} alt=""/>
            <div>
                <CardContents>{seller}</CardContents>
                <CardHeader>{title}</CardHeader>
                <CardContents>{price}</CardContents>
                <CardContents>{shipmentFee}</CardContents>
            </div>
            {
                view && <Modal component={
                    <Post
                        img={img} title={title} price={price} postId={postId}
                        category={category} contents={contents} unit={unit}
                        shipping={shipmentFee} seller={seller} onClose={closeView}/>
                } onCloseModal={closeView}/>
            }
        </CardContainer>
    );
};

export default Card;
