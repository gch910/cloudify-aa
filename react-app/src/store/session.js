import { authenticate } from "../services/auth";

const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

const setUser = (user) => ({
  type: SET_USER,
  user,
});

const deleteSession = () => ({
  type: REMOVE_USER,
});

export const restoreUser = () => async (dispatch) => {
  const data = await authenticate();
  dispatch(setUser(data));
  return data;
};

const initialState = {
  user: null,
};

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.user;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
