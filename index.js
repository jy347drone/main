import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.8.0"; // pages for this product

import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
var hist = createBrowserHistory();
ReactDOM.render( /*#__PURE__*/React.createElement(Router, {
  history: hist
}, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
  path: "/landing-page",
  component: LandingPage
}), /*#__PURE__*/React.createElement(Route, {
  path: "/profile-page",
  component: ProfilePage
}), /*#__PURE__*/React.createElement(Route, {
  path: "/login-page",
  component: LoginPage
}), /*#__PURE__*/React.createElement(Route, {
  path: "/",
  component: Components
}))), document.getElementById("root"));