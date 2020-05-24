function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react"; // nodejs library that concatenates classes

import classNames from "classnames"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles"; // @material-ui/icons
// core components

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/home.js";
const dashboardRoutes = [];
const useStyles = makeStyles(styles);
export default function Home(props) {
  const classes = useStyles();
  const { ...rest
  } = props;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, _extends({
    color: "transparent",
    routes: dashboardRoutes,
    brand: "Gonie Dronie",
    rightLinks: /*#__PURE__*/React.createElement(HeaderLinks, null),
    fixed: true,
    changeColorOnScroll: {
      height: 400,
      color: "white"
    }
  }, rest)), /*#__PURE__*/React.createElement(Parallax, {
    filter: true,
    image: "https://lh3.google.com/u/2/d/18UnccCvcoogxg_JUQ1IkyuA0G6eu3Y1X=w3584-h1874-iv1"
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/React.createElement("h1", {
    className: classes.title
  }, "Gonie Dronie Studio"), /*#__PURE__*/React.createElement("h4", null, "Specialize in drone photography and videography"), /*#__PURE__*/React.createElement("br", null))))), /*#__PURE__*/React.createElement("div", {
    className: classNames(classes.main, classes.mainRaised)
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement("h1", null, "Hello World"), /*#__PURE__*/React.createElement("h1", null, "Hello World"), /*#__PURE__*/React.createElement("h1", null, "Hello World"), /*#__PURE__*/React.createElement("h1", null, "Hello World"), /*#__PURE__*/React.createElement("h1", null, "Hello World"), /*#__PURE__*/React.createElement("h1", null, "Hello World"))), /*#__PURE__*/React.createElement(Footer, null));
}