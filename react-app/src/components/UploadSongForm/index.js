import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

const UploadSongForm = () => {
  const history = useHistory();
  const [isLoaded, setIsLoaded] = useState(false);
  const [song, setSong] = useState(null);
  const [songLoading, setSongLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(Date());
  // const [image, setImage] = useState(null);
  // const [imageLoading, setImageLoading] = useState(false);
  const genres = async () => {
    const res = await fetch("/api/songs/genres");
    const data = res.json();
    if (!data.ok) throw data;
    return data;
  };

  useEffect(() => {
    genres().then(setIsLoaded(true));
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("song", song);

    // // aws uploads can be a bit slow—displaying
    // // some sort of loading message is a good idea
    // setSongLoading(true);

    // const res = await fetch("/api/songs/upload", {
    //   method: "POST",
    //   body: formData,
    // });
    // if (res.ok) {
    //   await res.json();
    //   setSongLoading(false);
    //   history.push("/");
    // } else {
    //   setSongLoading(false);
    //   // a real app would probably use more advanced
    //   // error handling
    //   console.log("error");
    // }
  };

  const updateSong = (e) => {
    const file = e.target.files[0];
    setSong(file);
  };
  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  return (
    isLoaded && (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Song Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Release Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <select></select>
        </div>
        <div>
          <label>Upload a song file</label>
          <input type="file" accept="audio/*" onChange={updateSong} />
          {songLoading && <p>Loading...</p>}
        </div>
        <div>
          <label>Upload an album image</label>
          <input type="file" accept="image/*" onChange={updateImage} />
          {songLoading && <p>Loading...</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  );
};

export default UploadSongForm;
