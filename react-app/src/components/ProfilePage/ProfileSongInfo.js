import React from "react";

const ProfileSongInfo = ({song}) => {
    const releaseDate = song.release_date.split(" ").slice(0, 4).join(" ")
    console.log("song path",song.song_path)
    return (
        <div id="profile-song-info">
            {song.title}
            <audio controls src={song.song_path}></audio>
            <img id="profile-song-image" src={song.image_path} alt="song image" />
            <h3>Release Date: {releaseDate}</h3>
        </div>
    )
}

export default ProfileSongInfo;