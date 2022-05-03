import React from "react";
import { useParams } from "react-router";
import { MyPagesContainer } from "../../styles/layout";

const MyPages = () => {
  const { userType } = useParams();
  return <MyPagesContainer>{userType}</MyPagesContainer>;
};

export default MyPages;
