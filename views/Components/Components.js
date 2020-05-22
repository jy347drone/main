function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react"; // nodejs library that concatenates classes

import classNames from "classnames"; // react components for routing our app without refresh

import { Link } from "react-router-dom"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles"; // @material-ui/icons
// core components

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js"; // sections for this page

import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
import styles from "assets/jss/material-kit-react/views/components.js";
const useStyles = makeStyles(styles);
export default function Components(props) {
  const classes = useStyles();
  const { ...rest
  } = props;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, _extends({
    brand: "Material Kit React",
    rightLinks: /*#__PURE__*/React.createElement(HeaderLinks, null),
    fixed: true,
    color: "transparent",
    changeColorOnScroll: {
      height: 400,
      color: "white"
    }
  }, rest)), /*#__PURE__*/React.createElement(Parallax, {
    image: require("assets/img/bg4.jpg")
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement(GridItem, null, /*#__PURE__*/React.createElement("div", {
    className: classes.brand
  }, /*#__PURE__*/React.createElement("h1", {
    className: classes.title
  }, "Material Kit React."), /*#__PURE__*/React.createElement("h3", {
    className: classes.subtitle
  }, "A Badass Material-UI Kit based on Material Design.")))))), /*#__PURE__*/React.createElement("div", {
    className: classNames(classes.main, classes.mainRaised)
  }, /*#__PURE__*/React.createElement(SectionBasics, null), /*#__PURE__*/React.createElement(SectionNavbars, null), /*#__PURE__*/React.createElement(SectionTabs, null), /*#__PURE__*/React.createElement(SectionPills, null), /*#__PURE__*/React.createElement(SectionNotifications, null), /*#__PURE__*/React.createElement(SectionTypography, null), /*#__PURE__*/React.createElement(SectionJavascript, null), /*#__PURE__*/React.createElement(SectionCarousel, null), /*#__PURE__*/React.createElement(SectionCompletedExamples, null), /*#__PURE__*/React.createElement(SectionLogin, null), /*#__PURE__*/React.createElement(GridItem, {
    md: 12,
    className: classes.textCenter
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/login-page",
    className: classes.link
  }, /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    size: "lg",
    simple: true
  }, "View Login Page"))), /*#__PURE__*/React.createElement(SectionExamples, null), /*#__PURE__*/React.createElement(SectionDownload, null)), /*#__PURE__*/React.createElement(Footer, null));
}