import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginFormModal/LoginForm";
import SignUpForm from "./components/SignUpFormModal/SignUpForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Home from "./components/Home";
import PlayBar from "./components/PlayBar";
import Navigation from "./components/Navigation";
import ProfilePage from "./components/ProfilePage";
import SongPage from "./components/SongPage";
import { restoreUser } from "./store/session";

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.user);
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    (async () => {
      const user = await dispatch(restoreUser());
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  let navId;

  if (sessionUser.user) {
    navId = "logged-in-nav";
  } else {
    navId = "logged-out-nav";
  }

  return (
    <BrowserRouter>
      <Navigation setAuthenticated={setAuthenticated} navId={navId} />
      <PlayBar />
      <Switch>
        {/* <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route> */}
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <ProtectedRoute
          path="/users"
          exact={true}
          authenticated={authenticated}
        >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute
          path="/users/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <User />
        </ProtectedRoute>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <ProtectedRoute
          path={"/profile/:userId"}
          exact={true}
          authenticated={authenticated}
        >
          <ProfilePage />
        </ProtectedRoute>
        <Route path={"/song/:songId"}>
          <SongPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
