import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { newUpload } from "../../store/upload";
import "./UploadSongForm.css";

const UploadSongForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [selectgenres, setSelectGenres] = useState([]);
  const [genre, setGenre] = useState(1);
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
    const songAttributes = {
      title,
      release_date: date,
      user_id: user.id,
      genre_id: genre,
    };
    setSongLoading(true);
    setImageLoading(true);
    const res = await dispatch(newUpload(song_path, songAttributes));
    /* aws uploads can be a bit slow—displaying
    some sort of loading message is a good idea*/

    if (res.ok) {
      await res.json();
      setSongLoading(false);
      setImageLoading(false);
      history.push("/");
    } else {
      setSongLoading(false);
      setImageLoading(false);
      /* a real app would probably use more advanced
       error handling*/
    }
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
      <div id="upload-form-div">
        <form id="upload-form" onSubmit={handleSubmit}>
          <h1 id="upload-h1">Upload a Song</h1>
          <div>
            <label className="upload-label">Song Title</label>
            <input
              className="upload-field"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="upload-label">Release Date</label>
            <input
              className="upload-field"
              type="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              required
            />
          </div>
          <div>
            <label className="upload-label">Select a genre</label>
            <select
              className="upload-field"
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
            <label className="upload-label">Upload a song file</label>
            <input
              className="upload-field"
              type="file"
              accept="audio/*"
              onChange={updateSong}
              required
            />
            {songLoading && <p>Loading...</p>}
          </div>
          <div>
            <label className="upload-label">Upload an album image</label>
            <input
              className="upload-field"
              type="file"
              accept="image/*"
              onChange={updateImage}
            />
            {imageLoading && <p>Loading...</p>}
          </div>
          <div id="upload-submit-button-div">
            <button id="upload-submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  );
};

export default UploadSongForm;
