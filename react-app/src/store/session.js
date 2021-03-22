import { authenticate, logout } from "../services/auth";


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
  const res = await authenticate();
  dispatch(setUser(res));
  return res;
};

export const logoutUser = () => async (dispatch) => {
  const res = await logout();
  // if(!res.ok) throw res
  dispatch(deleteSession())
  return res
}

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
    case REMOVE_USER:
      newState = Object.assign({}, state)
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
