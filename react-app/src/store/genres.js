const SET_GENRES = "errors/SET_GENRES";

export const setAuthErrors = (genres) => ({
  type: SET_GENRES,
  genres,
});

const initialState = {
  auth: [],
};

export const loadGenres = () => async (dispatch) => {};

const genreReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_GENRES: {
      newState = { ...state };
      newState.auth = action.genres;
      return newState;
    }
    default:
      return state;
  }
};

export default genreReducer;
