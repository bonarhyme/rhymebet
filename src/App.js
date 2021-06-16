import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PageNotFoundScreen from "./screens/PageNotFound";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="*" component={PageNotFoundScreen} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
