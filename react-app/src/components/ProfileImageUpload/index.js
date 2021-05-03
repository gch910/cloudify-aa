import React, { useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";


import "./ProfileImageUpload.css";

const ProfileImageUpload = () => {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.user.user);
  const [image, setImage] = useState("");
  const [success, setSucces] = useState(false);

  const updateImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImage(file);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const img = new FormData();
    img.append("image", image);

    const res = await fetch(`/api/users/image/upload/${sessionUser?.id}`, {
      method: "POST",
      body: img,
    });

    const data = await res.json();
    if (res.ok) {
      setSucces(true);
      setTimeout(() => {
        history.push(`/users/${sessionUser?.id}`);
      }, 1000);
    }
  };

  return (
    <form id="image-upload-form" onSubmit={onSubmit}>
      <h1 id="upload-image-h1">Upload Image</h1>
      <input
        // name="image"
        className="upload-field no-outline"
        type="file"
        // accept="image/*"
        onChange={updateImage}
      />
      <div id="upload-image-button-div">
        <button variant="contained" id="upload-image-button" type="submit">
          {success ? "Success!" : "Upload"}
        </button>
      </div>
    </form>
  );
};

export default ProfileImageUpload;