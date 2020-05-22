import React from "react"; // react components for routing our app without refresh

import { Link } from "react-router-dom"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles"; // @material-ui/icons
// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import landing from "assets/img/landing.jpg";
import profile from "assets/img/profile.jpg";
import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";
const useStyles = makeStyles(styles);
export default function SectionExamples() {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement(GridContainer, {
    justify: "center"
  }, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/React.createElement(Link, {
    to: "landing-page",
    className: classes.link
  }, /*#__PURE__*/React.createElement("img", {
    src: landing,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
  }), /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    size: "lg",
    simple: true
  }, "View landing page"))), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/React.createElement(Link, {
    to: "profile-page",
    className: classes.link
  }, /*#__PURE__*/React.createElement("img", {
    src: profile,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
  }), /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    size: "lg",
    simple: true
  }, "View profile page"))))));
}