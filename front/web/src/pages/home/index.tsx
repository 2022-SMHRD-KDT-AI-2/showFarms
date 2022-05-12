import React from "react";
import CardGrid from "../../components/cardGrid";
import { HomeContainer } from "../../styles/layout";
import { Banner } from "../../components/banner";
import { Category } from "../../components/category";

const Home = () => {
  return (
    <HomeContainer>
      <Banner />
      <Category />
      <CardGrid category={"Live"} />
      <CardGrid category={"Live"} />
      <CardGrid category={"Live"} />
      <CardGrid category={"Live"} />
      <CardGrid category={"Live"} />
      <CardGrid category={"Live"} />
    </HomeContainer>
  );
};

export default Home;
