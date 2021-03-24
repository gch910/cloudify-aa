import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const UploadSongForm = () => {
  const history = useHistory();
  const user = useSelector((state) => state.user.user);
  const [selectgenres, setSelectGenres] = useState([]);
  const [genre, setGenre] = useState("");
  const [song, setSong] = useState(null);
  const [songLoading, setSongLoading] = useState(false);
  const [image, setImage] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("2021-03-24");

  useEffect(() => {
    fetch("/api/songs/genres")
      .then((response) => response.json())
      .then((data) => setSelectGenres(data.genres));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const song_path = new FormData();
    song_path.append("song", song);
    song_path.append("image", image);

    // const newSong = {
    //   title,
    //   release_date: date,
    //   user_id: user.id,
    //   genre_id: genre,
    // };

    /* aws uploads can be a bit slow—displaying
    some sort of loading message is a good idea*/
    // setSongLoading(true);
    // setImageLoading(true);

    const res = await fetch("/api/songs/upload", {
      method: "POST",
      body: song_path,
    });
    // if (res.ok) {
    //   await res.json();
    //   setSongLoading(false);
    //   setImageLoading(false);
    //   history.push("/");
    // } else {
    //   setSongLoading(false);
    //   setImageLoading(false);
    /* a real app would probably use more advanced
       error handling*/
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
    selectgenres.length && (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Song Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Release Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label>Select a genre</label>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          >
            {selectgenres.map((el, idx) => {
              return (
                <option key={idx} value={el.id}>
                  {el.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label>Upload a song file</label>
          <input type="file" accept="audio/*" onChange={updateSong} required />
          {songLoading && <p>Loading...</p>}
        </div>
        <div>
          <label>Upload an album image</label>
          <input type="file" accept="image/*" onChange={updateImage} />
          {imageLoading && <p>Loading...</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  );
};

export default UploadSongForm;
