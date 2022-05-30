import React, { useEffect, useState } from "react";
import CardGrid from "../../components/cardGrid";
import { HomeContainer, Pagination } from "../../styles/layout";
import { Banner } from "../../components/banner";
import Header from "../../components/header";
import axiosInstance from "../../utils/AxiosInstance";
import { IPost } from "../../types";
import { useNavigate, useParams } from "react-router";

const Home = () => {
  const { page } = useParams();
  const nav = useNavigate();
  const [post, setPost] = useState<IPost[]>([]);
  const [live, setLive] = useState<IPost[]>([]);
  const [total, setTotal] = useState<number>(0);

  const getAllPost = () => {
    const url = `/posts/list?pageNum=${page}`;
    axiosInstance.get(url).then((res) => {
      if (res.data) {
        setPost(res.data.postList);
        setTotal(res.data.total);
      }
    });
  };

  const getLive = () => {
    axiosInstance.get("/live/list").then((res) => {
      setLive(res.data);
    });
  };

  useEffect(() => {
    getAllPost();
  }, [page]);

  useEffect(() => {
    getLive();
  }, []);

  const getPages = (): number[] => {
    const arr = [];
    for (let i = 0; i < total / 20; i += 1) {
      arr.push(i + 1);
    }
    return arr;
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Header />
      <Banner />
      <HomeContainer>
        <CardGrid category={"Live"} post={live} />
        <CardGrid category={"판매상품"} post={post} />
        <Pagination>
          {getPages().map((item) => {
            return (
              <button
                onClick={() => nav(`/main/${item}`)}
                value={item}
                key={item}
              >
                {item}
              </button>
            );
          })}
        </Pagination>
      </HomeContainer>
    </div>
  );
};

export default Home;
