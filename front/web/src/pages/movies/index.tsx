import React from "react";
import { MovieContainer } from "../../styles/layout";
import { useParams } from "react-router";
import Aside from "../../components/aside";

const Movies = () => {
  const { movieId } = useParams();
  return (
    <MovieContainer>
      <Aside />
    </MovieContainer>
  );
};

export default Movies;
