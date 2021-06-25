import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import PageNotFoundScreen from "./screens/PageNotFound";
import HomeScreen from "./screens/Home";
import RegisterScreen from "./screens/RegisterScreen";
import VerifyScreen from "./screens/Verification";
import LoginScreen from "./screens/Login";

import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";

const App = () => {
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  return (
    <>
      <Router>
        <MyNavbar />
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route
            path="/register"
            component={userInfo ? RegisterScreen : HomeScreen}
            exact
          />
          <Route
            path="/verify"
            component={userInfo ? VerifyScreen : HomeScreen}
            exact
          />
          <Route
            path="/login"
            component={userInfo ? LoginScreen : HomeScreen}
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
