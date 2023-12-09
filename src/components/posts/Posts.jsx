import React from "react";
import "./posts.scss";
import Post from '../post/Post.jsx';

function Posts() {

    const posts = [
        {
            id:1,
            name: "Fahim",
            userId: 1,
            profilePic: "../../../public/images/login.jpg",
            desc: "Social  design using React, HTML, and CSS. React social media app using React Hooks, Context API, Dark Mode, Responsive design",
            pic: "../../../public/images/register.jpg"
        },
        {
            id:2,
            name: "Fahim",
            userId: 2,
            profilePic: "../../../public/images/1.png",
            desc: "Social  design using React, HTML, and CSS. React social media app using React Hooks, Context API, Dark Mode, Responsive design",
            pic: "../../../public/images/register.jpg"
        },
        {
            id:3,
            name: "Fahim",
            userId: 3,
            profilePic: "../../../public/images/1.png",
            desc: "Social  design using React, HTML, and CSS. React social media app using React Hooks, Context API, Dark Mode, Responsive design",
            pic: "../../../public/images/register.jpg"
        },
        {
            id:4,
            name: "Fahim",
            userId: 4,
            profilePic: "../../../public/images/1.png",
            desc: "Social  design using React, HTML, and CSS. React social media app using React Hooks, Context API, Dark Mode, Responsive design",
            pic: "../../../public/images/register.jpg"
        },
        {
            id:5,
            name: "Fahim",
            userId: 5,
            profilePic: "../../../public/images/1.png",
            desc: "Social  design using React, HTML, and CSS. React social media app using React Hooks, Context API, Dark Mode, Responsive design",
            pic: "../../../public/images/register.jpg"
        },
    ];
  return <div className="post">
        {posts.map(post=>(
            <Post key={post.id} post={post}/>
        ))}
  </div>;
}

export default Posts;
