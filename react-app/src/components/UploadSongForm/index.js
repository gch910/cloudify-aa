import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const UploadSongForm = () => {
  const history = useHistory();
  const [song, setSong] = useState(null);
  const [songLoading, setSongLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("song", song);

    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea
    setSongLoading(true);

    const res = await fetch("/api/songs/upload", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      await res.json();
      setSongLoading(false);
      history.push("/");
    } else {
      setSongLoading(false);
      // a real app would probably use more advanced
      // error handling
      console.log("error");
    }
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    setSong(file);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="audio/*" onChange={updateImage} />
      <button type="submit">Submit</button>
      {songLoading && <p>Loading...</p>}
    </form>
  );
};

export default UploadSongForm;
