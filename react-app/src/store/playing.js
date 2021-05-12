const SET_SONG = "playing/setSong";
const SET_STATUS = "playing/setStatus";

const setSong = (song) => ({
  type: SET_SONG,
  song,
});

const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const setSongPlaying = () => async (dispatch) => {
  return dispatch(setStatus(true));
};

export const setSongPause = () => async (dispatch) => {
  return dispatch(setStatus(false));
};

export const setCurrentSong = (song) => async (dispatch) => {
  dispatch(setSong(song));
  dispatch(setStatus(true));
};
let initialState = {};
const playingReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_SONG: {
      newState = { ...state };
      newState.song = action.song;
      return newState;
    }
    case SET_STATUS: {
      newState = { ...state };
      newState.status = action.status;
      return newState;
    }
    default:
      return state;
  }
};

export default playingReducer;
