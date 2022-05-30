import React, { useEffect, useState } from "react";
import CardGrid from "../../components/cardGrid";
import { HomeContainer } from "../../styles/layout";
import Header from "../../components/header";
import axiosInstance from "../../utils/AxiosInstance";
import { useParams } from "react-router";
import { IPost } from "../../types";

const Search: React.FC = () => {
  const { search } = useParams();
  const [searched, setSearched] = useState<IPost[]>([]);
  const onSubmitSearch = () => {
    axiosInstance.get(`/posts/search/${search}`).then((res) => {
      if (res.data) {
        setSearched(res.data);
      }
    });
  };
  useEffect(() => {
    onSubmitSearch();
  }, []);
  return (
    <div>
      <Header />
      <HomeContainer>
        <CardGrid category={"검색결과"} post={searched} />
      </HomeContainer>
    </div>
  );
};

export default Search;
