import React from "react";
import { WriteContainer } from "../../styles/layout";
import { useParams } from "react-router";
import "draft-js/dist/Draft.css";
import TextEditor from "./textEditor";

const Write = () => {
  const { userId } = useParams();

  return (
    <WriteContainer>
      <TextEditor />
    </WriteContainer>
  );
};

export default Write;
