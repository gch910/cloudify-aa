import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSongs } from "../../store/songs";
import { Link } from 'react-router-dom'

import "./MusicPage.css";

const MusicPage = () => {
    const dispatch = useDispatch();
    const songs = useSelector((state) => state.songs);
    const [isLoaded, setIsLoaded] = useState(false);

    let allSongs;

    useEffect(() => {
        dispatch(getAllSongs()).then(() => setIsLoaded(true));
    }, [dispatch]);

    isLoaded ? (allSongs = Object.values(songs)) : (allSongs = null);

    console.log('SONGS', allSongs)

    return (
        isLoaded && (
            <>
                <div className='center' style={{ alignItems: 'flex-start' }}>
                    <div className='home-inner-div' style={{ width: '100%' }}>
                        <div className='MusicHeader'>Recently Uploaded</div>
                        <div className='MusicContainer'>
                            {allSongs.map((song, idx) => (
                                <li key={idx} className='Song'>
                                    <img alt='CoverArt' className='CoverArt' src={song.image_path}></img>
                                    <span>{idx + 1}</span>
                                    <div className='Artist_MP'>
                                        <Link to={`/profile/${song.user.id}`}>{song.user.username}</Link>
                                    </div>
                                    <span>-</span>
                                    <div className='Title_MP'>
                                        <Link to={`/song/${song.id}`}>{song.title}</Link>
                                    </div>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        ))
}

export default MusicPage;

