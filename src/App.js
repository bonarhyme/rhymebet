import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageNotFoundScreen from "./screens/PageNotFound";
import HomeScreen from "./screens/Home";

import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";

const App = () => {
  return (
    <>
      <Router>
        <MyNavbar />
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="*" component={PageNotFoundScreen} />
        </Switch>
        <MyFooter />
      </Router>
    </>
  );
};

export default App;
