import "./share.scss";
import Image from "../../../public/images/img.png";
import Map from "../../../public/images/map.png";
import Friend from "../../../public/images/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
const Share = ({ blood }) => {
  const [file, setFile] = useState(null);
  const [description, setDesc] = useState("");
  const [bloodGroup, setbloodGroup] = useState("");
  const [location, setlocation] = useState("");
  
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts/add/", newPost);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    if(blood){
      let bloodFlag = 1;
      mutation.mutate({ description, img: imgUrl, bloodGroup, location, blood:bloodFlag });
    }else{
      let bloodFlag = 0;
      mutation.mutate({ description, img: imgUrl, bloodGroup, location, blood:bloodFlag });
    }
    setDesc("");
    setFile(null);
  };

  return (
    <div className='share'>
      <div className='container'>
        <div className='top'>
          <div className='left'>
            <img src={`/images/${currentUser.profilePic}`} alt='' />
            <input
              type='text'
              placeholder={
                blood ? `Need Blood, Post a Request` : `What's on your mind`
              }
              onChange={(e) => setDesc(e.target.value)}
              value={description}
            />
          </div>
          <div className='right'>
            {file && (
              <img className='file' alt='' src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>
        <hr />
        {blood ? (
          <div className='middle'>
            <div className='blood'>
              <input
                type='text'
                placeholder={"Blood Group"}
                onChange={(e) => setbloodGroup(e.target.value)}
              />
              <input
                type='text'
                placeholder={"Enter Location"}
                onChange={(e) => setlocation(e.target.value)}
              />
            </div>
          </div>
        ) : (
          ""
        )}
        <div className='bottom'>
          <div className='left'>
            <input
              type='file'
              id='file'
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor='file'>
              <div className='item'>
                <img src={Image} alt='' />
                <span>Add Image</span>
              </div>
            </label>
            <div className='item'>
              <img src={Map} alt='' />
              <span>Add Place</span>
            </div>
            <div className='item'>
              <img src={Friend} alt='' />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className='right'>
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
