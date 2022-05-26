import React, {useEffect, useRef, useState} from "react";
import {FlexRowDiv, Line} from "../../styles/common";
import {
    CardGridContainer,
    CardGridContents,
    CardGridHeader,
    GirdHeader,
    Link,
} from "../../styles/element";
import Card from "../card";
import axiosInstance from "../../utils/AxiosInstance";

interface ICardGrid {
    category: string;
}

const tempData = [
    {
        img: "",
        title: "dfasdfasdfasd",
        seller: "김덕순",
        discount: 10,
        price: 15000,
        shipmentFee: "free",
    },
    {
        img: "",
        title: "제목제목제목제목제목제목제목제목",
        seller: "김덕순",
        discount: 10,
        price: 15000,
        shipmentFee: "free",
    },
    {
        img: "",
        title: "제목제목제목제목제목제목제목제목",
        seller: "김덕순",
        discount: 10,
        price: 15000,
        shipmentFee: "free",
    },
    {
        img: "",
        title: "제목제목제목제목제목제목제목제목",
        seller: "김덕순",
        discount: 10,
        price: 15000,
        shipmentFee: "free",
    },
];

interface IPost {
    mb_id: string,
    post_title: string,
    post_content: string,
    post_price: number,
    post_unit: string,
    post_category: string,
    post_shipping: string,
    post_dt: string,
    post_base64: string,
    post_img: string,
    post_id: number
}

const CardGrid = ({category}: ICardGrid) => {
    const [post, setPost] = useState<IPost[]>([])
    const getAllPost = () => {
        axiosInstance.get("/posts/list").then((res) => {
            setPost(res.data)
            console.log(res.data)
        })
    }
    useEffect(() => {
        getAllPost()
    }, [])
    return (
        <CardGridContainer>
            <GirdHeader>
                <CardGridHeader>{category}</CardGridHeader>
                <Link>더보기</Link>
            </GirdHeader>
            <CardGridContents>
                {post.map((item, index) => {
                    return (
                        <Card
                            title={item.post_title}
                            img={item.post_img}
                            seller={item.mb_id}
                            price={item.post_price}
                            shipmentFee={item.post_shipping}
                            contents={item.post_content}
                            category={item.post_category}
                            unit={item.post_unit}
                            postId={item.post_id}
                            key={index}
                        />
                    );
                })}
            </CardGridContents>
        </CardGridContainer>
    );
};

export default CardGrid;
