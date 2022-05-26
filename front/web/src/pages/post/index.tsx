import React from "react";
import {useParams} from "react-router";
import {Button, Input} from "../../styles/element";
import {PostContainer} from "../../styles/layout";
import {imageTarget} from "../../datas";
import axiosInstance from "../../utils/AxiosInstance";
import useInput from "../../hooks/useInput";

interface IPost {
    img: string,
    title: string,
    price: number,
    category: string,
    contents: string,
    unit: string,
    shipping: string
    seller: string,
    onClose: () => void,
    postId: number
}

const Post = ({img, title, price, category, contents, shipping, postId, unit, seller, onClose}: IPost) => {

    const [amount, onChangeAmount] = useInput(0)
    // img title price category contents unit shipping
    // buy amount / button
    const onSubmit = () => {
        axiosInstance.post("/trade/new", {
            "trade_price": price,
            "vol": amount,
            "mb_id": seller,
            "buyer_id": "test",
            "post_id": postId,
            "post_title": title
        }).then((res) => {
            console.log(res.data)
        })
    }
    return (
        <PostContainer onClick={(e) => e.stopPropagation()}>
            <img src={imageTarget + img}/>
            <text className="size1"> {title}</text>
            <span>
                <text>품목 :{category}</text>
                <text>판매자 :{seller}</text>
            </span>
            <span>
                <text>가격 :{price}</text>
                <text>단위 :{unit}</text>
                <text>배송비 :{shipping}</text>
            </span>
            <div>
                <Input value={amount} onChange={onChangeAmount} width={"80%"}/>
                <Button onClick={onSubmit}>구매</Button>
            </div>
            <text>{contents}</text>
            <div>
                <Button onClick={onClose}>닫기</Button>
            </div>
        </PostContainer>
    );
};

export default Post;
