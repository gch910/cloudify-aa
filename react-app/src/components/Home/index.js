import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { getAllSongs } from "../../store/songs"

const Home = () => {
    const dispatch = useDispatch();
    const songs = useSelector(state => Object.values(state.songs))
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if(isLoaded) dispatch(getAllSongs())
    }, [dispatch, isLoaded])

    return (
        <h1>My Home </h1>
    )
}

export default Home