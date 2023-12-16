import React from "react";
import "./posts.scss";
import Post from "../post/Post.jsx";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios.jsx";
import { createContext, useEffect, useState } from "react";

function Posts() {
  const { isLoading, error, data } = useQuery(["posts"], () =>
    makeRequest.get("/posts/").then((res) => {
      return res.data;
    })
  );
  console.log(data);
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
