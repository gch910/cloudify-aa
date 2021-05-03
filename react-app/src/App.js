import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Home from "./components/Home";
import PlayBar from "./components/PlayBar";
import Navigation from "./components/Navigation";
import ProfilePage from "./components/ProfilePage";
import SongPage from "./components/SongPage";
import ArtistsPage from "./components/ArtistsPage";
import { restoreUser } from "./store/session";
import UploadSongForm from "./components/UploadSongForm";
import ProfileImageUpload from "./components/ProfileImageUpload";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.user);
  const isPlaying = useSelector((state) => state.playing?.song);
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
      <Switch>
        <Route path="/login" exact={true}>
          <LoginFormPage
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
        <Route path={"/profile/:userId"} exact={true}>
          <ProfilePage />
        </Route>
        <Route path="/artists">
          <ArtistsPage />
        </Route>
        <Route path={"/song/:songId"}>
          <SongPage />
        </Route>
        <Route path="/profile-image/upload/:userId">
          <ProfileImageUpload />
        </Route>
        <ProtectedRoute
          path="/upload/:userId"
          exact={true}
          authenticated={authenticated}
          user={sessionUser.user}
        >
          <UploadSongForm />
        </ProtectedRoute>
        <Route path="/not-found">
          <NotFoundPage />
        </Route>
      </Switch>
      {isPlaying ? <PlayBar /> : ""}
    </BrowserRouter>
  );
}

export default App;
