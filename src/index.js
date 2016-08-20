import "purecss/build/pure.css";
import "font-awesome/css/font-awesome.css";
import "./style.css";

import React from "react";
import {render} from "react-dom";
import AppRouter from "./containers/AppRouter";

import {Provider} from "react-redux";
import store from "./store";


render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("App")
);
