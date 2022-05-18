import React from "react";
import { useParams } from "react-router";
import { PostContainer } from "../../styles/layout";
import Aside from "../../components/aside";

const Post = () => {
  const { postId } = useParams();
  return (
    <PostContainer>
      <Aside />
    </PostContainer>
  );
};

export default Post;
