import React from "react";
import { MovieContainer } from "../../styles/layout";
import { useParams } from "react-router";

const Movies = () => {
  const { movieId } = useParams();
  return <MovieContainer>{movieId}</MovieContainer>;
};

export default Movies;
