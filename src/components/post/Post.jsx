import React, { useContext } from "react";
import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "../comments/Comments";
import moment from "moment";
import { makeRequest } from "../../axios.jsx";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { AuthContext } from "../../Context/AuthContext.jsx";
import PinDropIcon from "@mui/icons-material/PinDrop";

function Post({ post, blood }) {
  const queryClient = useQueryClient();
  const { currentUser } = useContext(AuthContext);
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoading, error, data } = useQuery(["likes", post.id], () =>
    makeRequest.get("/likes?postId=" + post.id).then((res) => {
      return res.data;
    })
  );

  const {
    isLoading: cm,
    error: cmerr,
    data: cmdata,
  } = useQuery(["comments"], () =>
    makeRequest.get("/comments?postId=" + post.id).then((res) => {
      return res.data;
    })
  );

  const mutation = useMutation(
    (liked) => {
      if (liked) return makeRequest.delete("/likes?postId=" + post.id);
      return makeRequest.post("/likes", { postId: post.id });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["likes"]);
      },
    }
  );

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id));
  };
  const deleteMutation = useMutation(
    (postId) => {
      return makeRequest.delete("/posts/" + postId);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };

  return (
    <div className='post'>
      <div className={post.blood ? "container2" : "container"}>
        <div className='user'>
          <div className='userInfo'>
            <img src={`/images/${post.profilePic}`} alt='' />
            <div className='details'>
              <Link
                to={`/profile/${post.userid}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className='name'>{post.name}</div>
              </Link>
              <div className='date'>{moment(post.createdAt).fromNow()}</div>
            </div>
          </div>
          <div className="deleteIcon">
            {menuOpen && post.userid === currentUser.id && (
              <button
                style={{ border: "none", cursor: "pointer" }}
                onClick={handleDelete}
              >
                delete
              </button>
            )}
            <MoreHorizIcon
              style={{ cursor: "pointer" }}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
        <div className='content'>
          {post.blood ? (
            <>
              <p className='bloodGroup'>Blood Group: {post.bloodGroup}</p>
              <p className='location'>
                {" "}
                <PinDropIcon fontSize='small' /> {post.location}
              </p>
            </>
          ) : (
            ""
          )}
          <p>{post.description}</p>
          <img src={`/images/${post.img}`} alt='' />
        </div>
        <div className='info'>
          <div className='item'>
            {isLoading ? (
              "loading"
            ) : data.includes(currentUser.id) ? (
              <FavoriteOutlinedIcon
                style={{ color: "red" }}
                onClick={handleLike}
              />
            ) : (
              <FavoriteBorderOutlinedIcon onClick={handleLike} />
            )}
            {data?.length} Likes
            {/* {liked ? <FavoriteOutlinedIcon style={{color:"red"}} /> : <FavoriteBorderOutlinedIcon />}
            12 Likes */}
          </div>
          <div className='item' onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            {cmdata?.length} Comments
          </div>
          <div className='item'>
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments postId={post.id} />}
      </div>
    </div>
  );
}

export default Post;
