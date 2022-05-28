import React, { useCallback, useEffect, useState } from "react";
import CardGrid from "../../components/cardGrid";
import { HomeContainer, Pagination } from "../../styles/layout";
import { Banner } from "../../components/banner";
import Header from "../../components/header";
import axiosInstance from "../../utils/AxiosInstance";
import { IPost } from "../../types";

const Home = () => {
  const [post, setPost] = useState<IPost[]>([]);
  const [page, setPage] = useState<number>(1);
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

  const changePage = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      setPage(parseInt(e.currentTarget.value));
    },
    [page]
  );

  useEffect(() => {
    getAllPost();
    console.log(page, post);
  }, [page]);

  const getPages = (): number[] => {
    const arr = [];
    for (let i = 0; i < total % 20; i += 1) {
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
        {/*<CardGrid category={"Live"} />*/}
        <CardGrid category={"판매상품"} post={post} />
        {total > 20 ?? (
          <Pagination>
            {getPages().map((item) => {
              return (
                <button onClick={changePage} value={item} key={item}>
                  {item}
                </button>
              );
            })}
          </Pagination>
        )}
      </HomeContainer>
    </div>
  );
};

export default Home;
