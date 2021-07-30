import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { USER_LOGOUT } from "./constants/userConstants";

import PageNotFoundScreen from "./screens/PageNotFound";
import HomeScreen from "./screens/Home";
import RegisterScreen from "./screens/RegisterScreen";
import VerifyScreen from "./screens/Verification";
import LoginScreen from "./screens/Login";
import ForgotPasswordScreen from "./screens/ForgotPassword";
import ResetPasswordScreen from "./screens/ResetPassword";
import ProfileScreen from "./screens/Profile";
import AdminGamesScreen from "./screens/AdminGames";

import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import { checkToken } from "./actions/userActions";
import CreateGameScreen from "./screens/CreateGame";

const App = () => {
  const dispatch = useDispatch();

  const tokenCheck = useSelector((state) => state.tokenCheck);
  const { error } = tokenCheck;

  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    let userInfoFromStorage = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
    if (userInfoFromStorage !== null) {
      dispatch(checkToken(userInfoFromStorage));
    }
  }, [userInfo, dispatch]);

  useEffect(() => {
    if (error) {
      localStorage.clear();
      dispatch({ type: USER_LOGOUT });
      document.location.href = "/login";
    }
  }, [userInfo, error, dispatch]);

  return (
    <>
      <Router>
        <MyNavbar />
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route
            path="/register"
            component={!userInfo ? RegisterScreen : HomeScreen}
            exact
          />
          <Route
            path="/verify"
            component={!userInfo ? VerifyScreen : HomeScreen}
            exact
          />
          <Route
            path="/login"
            component={!userInfo ? LoginScreen : HomeScreen}
            exact
          />

          <Route
            path="/forgot-password"
            component={!userInfo ? ForgotPasswordScreen : HomeScreen}
            exact
          />
          <Route
            path="/reset/password/:token"
            component={!userInfo ? ResetPasswordScreen : HomeScreen}
            exact
          />
          {userInfo && (
            <Route
              path="/user/profile"
              component={userInfo ? ProfileScreen : HomeScreen}
              exact
            />
          )}
          {userInfo && userInfo.admin && (
            <Route
              path="/admin/games"
              component={
                userInfo && userInfo.isAdmin ? AdminGamesScreen : HomeScreen
              }
              exact
            />
          )}
          {userInfo && userInfo.admin && (
            <Route
              path="/admin/games/create-game"
              component={
                userInfo && userInfo.isAdmin ? CreateGameScreen : HomeScreen
              }
              exact
            />
          )}
          <Route path="*" component={PageNotFoundScreen} />
        </Switch>
        <MyFooter />
      </Router>
    </>
  );
};

export default App;
