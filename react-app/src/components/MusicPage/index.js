import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongs } from "../../store/songs";
import { Link } from "react-router-dom";
import "./MusicPage.css";

const MusicPage = () => {
    const dispatch = useDispatch();
    const songs = useSelector((state) => state.songs);
    const [isLoaded, setIsLoaded] = useState(false);

    let allSongs;

    useEffect(() => {
        dispatch(getAllSongs()).then(() => setIsLoaded(true));
    }, [dispatch]);

    isLoaded ? allSongs = songs : allSongs = null;

    console.log('SONGS', allSongs)

    return (
        isLoaded && (
            <>
                <div>Recently Uploaded</div>

            </>
        ))
}

export default MusicPage;

