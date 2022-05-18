import React from "react";
import CardGrid from "../../components/cardGrid";
import { HomeContainer } from "../../styles/layout";
import { Banner } from "../../components/banner";
import Aside from "../../components/aside";

const Home = () => {
  return (
    <>
      <Aside />
      <Banner />
      <HomeContainer>
        <CardGrid category={"Live"} />
        <CardGrid category={"판매상품"} />
      </HomeContainer>
    </>
  );
};

export default Home;
