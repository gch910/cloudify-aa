const ALL_SONGS = "/songs/allSongs";
const USER_SONGS = "/songs/userSongs";
const SONG = "/songs/song";

const allSongs = (songs) => {
  return {
    type: ALL_SONGS,
    songs: songs,
  };
};
const userSongs = (songs) => {
    return {
        type: USER_SONGS,
        songs: songs,
    }
}
const song = (song) => {
    return {
        type: SONG,
        song: song,
    }
}
  return {
    type: USER_SONGS,
    songs: songs,
  };
};


export const getAllSongs = () => async (dispatch) => {
  const res = await fetch("/api/songs");

  const data = await res.json();

  dispatch(allSongs(data.songs));

  return data;
};
export const getUserSongs = (userId) => async (dispatch) => {
    const res = await fetch(`/api/users/songs/${userId}`)
    
    const data = await res.json();
    console.log("data from thunk", data)
    dispatch(userSongs(data.songs))

    return data
}
export const getSong = (songId) => async (dispatch) => {
    const res = await fetch(`/api/songs/${songId}`)
    const data = await res.json();
    dispatch(song(data.song))

    return data
};

const initialState = {};

const songsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ALL_SONGS: {
      const allSongs = {};
      const songs = action.songs;
      console.log(songs);
      songs.forEach((song) => (allSongs[song.id] = song));
      return allSongs;
    }
    case USER_SONGS: {
      newState = { ...state };
      // const userSongs = newState.user_songs = {}
      const songs = action.songs;
      const newObj = {};
      songs.forEach((song) => (newObj[song.id] = song));
      // newState.user_songs = {...action.songs}
      newState.user_songs = newObj;
      return newState;
    }
    case SONG: {
      newState = {...state}
      // const userSongs = newState.user_songs = {}
      const song = action.song
      newState.currentSong = song;
      return newState;
    }
    default:
      return state;
  }
};

export default songsReducer;
