import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserSongs, getAllSongs } from "../../store/songs";
import { useParams } from "react-router-dom";

const ProfileSongs = () => {
    const { userId } = useParams();
    const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch();
    const userSongs = useSelector((state) => state.songs.user_songs);
    // const allSongs = useSelector((state) => state.songs);

    // const userSongsObject = Object.values(userSongs)

    // console.log("all songs:", allSongs)
    // if(userSongs) console.log("user songs", Object.values(userSongs))
    let userSongsValues
    isLoaded ? userSongsValues = Object.values(userSongs) : userSongsValues = null;

    console.log("user Id", userId)
    useEffect(() => {
        dispatch(getUserSongs(userId)).then((req) => setIsLoaded(true))
        // dispatch(getAllSongs())
    }, [dispatch])


    
    return isLoaded && (
        <div>
           {userSongsValues.map((song, idx) => (
               <div>{song.title}</div>
           ))}
        </div>
    )
    
}

export default ProfileSongs;