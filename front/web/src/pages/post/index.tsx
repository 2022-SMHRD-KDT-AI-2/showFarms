import React from "react";
import {useParams} from "react-router";
import {PostContainer} from "../../styles/layout";

const Post = () => {
    const {postId} = useParams();
    return (
        <PostContainer>

        </PostContainer>
    );
};

export default Post;
