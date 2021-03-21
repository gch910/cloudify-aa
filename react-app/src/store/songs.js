const ALL_SONGS = "/songs/allSongs"

const allSongs = (songs) => {
    return {
        type: ALL_SONGS,
        payload: songs
    }
}

export const getAllSongs = () => async (dispatch) => {
    const res = await fetch("/api/songs")

    const { data } = await res.json();

    dispatch(allSongs(data))

    return data
}

const initialState = {}

const songsReducer = (state=initialState, action) => {
  switch(action.type) {
    case ALL_SONGS: {
      const allSongs = {}
      const { songs } = action
      songs.forEach(song => allSongs[songs.id] = song);
      return allSongs
    }
    default:
      return state
  }  
}

export default songsReducer;