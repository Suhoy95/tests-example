import React from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

import App from "./App";
import Home from "../components/Home";
import About from "../components/About";

function AppRouter() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  );
}

export default AppRouter;
