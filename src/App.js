import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { USER_LOGOUT } from "./constants/userConstants";

import PageNotFoundScreen from "./screens/PageNotFound";
import HomeScreen from "./screens/Home";
import RegisterScreen from "./screens/RegisterScreen";
import VerifyScreen from "./screens/Verification";
import LoginScreen from "./screens/Login";

import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import { checkToken, logout } from "./actions/userActions";

const App = () => {
  const dispatch = useDispatch();

  const tokenCheck = useSelector((state) => state.tokenCheck);
  const { error, tokenChecked } = tokenCheck;

  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    let userInfoFromStorage = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
    if (userInfoFromStorage !== null) {
      dispatch(checkToken(userInfoFromStorage));
    }
  }, [userInfo]);

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
          <Route path="*" component={PageNotFoundScreen} />
        </Switch>
        <MyFooter />
      </Router>
    </>
  );
};

export default App;
