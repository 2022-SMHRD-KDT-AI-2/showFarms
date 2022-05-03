import React from "react";
import CardGrid from "../../components/cardGrid";
import { HomeContainer } from "../../styles/layout";

const Home = () => {
  return (
    <HomeContainer>
      <CardGrid category={"Live"} />
    </HomeContainer>
  );
};

export default Home;
