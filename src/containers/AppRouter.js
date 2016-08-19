import React from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import {connect} from "react-redux";

import App from "./App";
import ActiveTodos from "./ActiveTodos";
import Archive from "./Archive";
import TodoPage from "../components/TodoPage";

import {bindedChooseTodo} from "../actions";

function AppRouter() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ActiveTodos} />
        <Route path="archive" component={Archive} />
        <Route path="todos/:id" component={TodoPage} onEnter={({params}) => bindedChooseTodo(Number(params.id))} />
        <Route path="todos" onEnter={(nextState, replace) => replace("/")} />
      </Route>
    </Router>
  );
}

export default AppRouter;
