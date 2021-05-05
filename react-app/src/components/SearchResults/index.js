import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchResults } from "../../store/songs";
import { Link } from "react-router-dom";

import "../MusicPage/MusicPage.css";
import "./SearchResults.css";

const SearchResults = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state?.songs?.search_results?.songs);
  const artists = useSelector((state) => state?.songs?.search_results?.artists);

  const [isLoaded, setIsLoaded] = useState(false);

  let allSongs;

  useEffect(() => {
    setIsLoaded(true);
  }, [dispatch]);

  // isLoaded ? (allSongs = Object.values(songs)) : (allSongs = null);

  // console.log('SONGS', allSongs)

  return (
    isLoaded && (
      <>
        {songs?.length ? (
          <div className="center" style={{ alignItems: "flex-start" }}>
            <div className="home-inner-div song-search-div" style={{ width: "100%" }}>
              <div className="MusicHeader">Song Results</div>
              <div className="MusicContainer">
                {songs.map((song, idx) => (
                  <li key={idx} className="Song">
                    <img
                      alt="CoverArt"
                      className="CoverArt"
                      src={song.image_path}
                    ></img>
                    <span>{idx + 1}</span>
                    <div className="Artist_MP">
                      <Link to={`/profile/${song.user.id}`}>
                        {song.user.username}
                      </Link>
                    </div>
                    <span>-</span>
                    <div className="Title_MP">
                      <Link to={`/song/${song.id}`}>{song.title}</Link>
                    </div>
                  </li>
                ))}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {artists?.length && (
          <div id="artist-search-outer" className="center">
            <div id="artists-page-div" className="artist-search-div">
              <div className="MusicHeader" id="artist-results-h1">
                Artist Results
              </div>
              {artists?.map((user, idx) => (
                <div key={idx} id="artist-div">
                  <Link to={`/profile/${user.id}`}>
                    <img id="artists-img" src={user.img} />
                  </Link>
                  <div id="artist-username-div">
                    <Link id="artist-username" to={`/profile/${user.id}`}>
                      {user.username}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    )
  );
};

export default SearchResults;
