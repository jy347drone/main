import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.8.0"; // pages for this product

import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Home from "views/Home/Home.js";
var hist = createBrowserHistory();

const getPath = route => {
  console.log('process env: ', process.env.PUBLIC_URL);
  return process.env.PUBLIC_URL + '/' + route;
};

ReactDOM.render( /*#__PURE__*/React.createElement(Router, {
  history: hist
}, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
  path: getPath(""),
  component: Home
}), /*#__PURE__*/React.createElement(Route, {
  path: getPath("landing-page"),
  component: LandingPage
}), /*#__PURE__*/React.createElement(Route, {
  path: getPath("profile-page"),
  component: ProfilePage
}), /*#__PURE__*/React.createElement(Route, {
  path: getPath("login-page"),
  component: LoginPage
}), /*#__PURE__*/React.createElement(Route, {
  path: getPath("components"),
  component: Components
}))), document.getElementById("root"));