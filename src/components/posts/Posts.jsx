import React from "react";
import "./posts.scss";
import Post from "../post/Post.jsx";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios.jsx";
import { createContext, useEffect, useState } from "react";

function Posts({userId}) {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts/?userId="+userId).then((res) => {
      return res.data;
    })
  );
  return (
    <div className='post'>
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
}

export default Posts;
