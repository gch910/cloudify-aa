import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import songsReducer from "./songs";
import sessionReducer from "./session";
import { errorReducer } from "./errors";
import playingReducer from "./playing";
import usersReducer from "./users";

const rootReducer = combineReducers({
  songs: songsReducer,
  user: sessionReducer,
  errors: errorReducer,
  playing: playingReducer,
  users: usersReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
