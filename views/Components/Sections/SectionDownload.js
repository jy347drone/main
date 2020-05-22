/*eslint-disable*/
import React from "react"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles"; // @material-ui/icons

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js"; // core components

import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";
const useStyles = makeStyles(styles);
export default function SectionDownload() {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement(GridContainer, {
    className: classes.textCenter,
    justify: "center"
  }, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/React.createElement("h2", null, "Do you love this UI Kit?"), /*#__PURE__*/React.createElement("h4", null, "Cause if you do, it can be yours for FREE. Hit the buttons below to navigate to our website where you can find the kit. We also have the Bootstrap 4 version on plain HTML. Start a new project or give an old Bootstrap project a new look!")), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 8,
    md: 6
  }, /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    size: "lg",
    href: "https://www.creative-tim.com/product/material-kit-react?ref=mkr-download-section",
    target: "_blank"
  }, "Free React Download"), /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    size: "lg",
    href: "https://www.creative-tim.com/product/material-kit?ref=mkr-download-section",
    target: "_blank"
  }, "Free HTML Downoad"))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(GridContainer, {
    className: classes.textCenter,
    justify: "center"
  }, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/React.createElement("h2", null, "Want more?"), /*#__PURE__*/React.createElement("h4", null, "We", "'", "ve launched", " ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-download-section",
    target: "_blank"
  }, "Material Kit PRO React", " "), ".It has a huge number of components, sections and example pages. Start Your Development With A Badass Material-UI nspired by Material Design.")), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 8,
    md: 6
  }, /*#__PURE__*/React.createElement(Button, {
    color: "rose",
    size: "lg",
    href: "https://www.creative-tim.com/product/material-kit-pro-react?ref=mkr-download-section",
    target: "_blank"
  }, "Material Kit PRO"), /*#__PURE__*/React.createElement(Button, {
    color: "rose",
    size: "lg",
    href: "https://www.creative-tim.com/product/material-dashboard-pro-react?ref=mkr-download-section",
    target: "_blank"
  }, "Material Dashboard PRO"))), /*#__PURE__*/React.createElement("div", {
    className: classes.textCenter + " " + classes.sharingArea
  }, /*#__PURE__*/React.createElement(GridContainer, {
    justify: "center"
  }, /*#__PURE__*/React.createElement("h3", null, "Thank you for supporting us!")), /*#__PURE__*/React.createElement(Button, {
    color: "twitter"
  }, /*#__PURE__*/React.createElement("i", {
    className: classes.socials + " fab fa-twitter"
  }), " Tweet"), /*#__PURE__*/React.createElement(Button, {
    color: "facebook"
  }, /*#__PURE__*/React.createElement("i", {
    className: classes.socials + " fab fa-facebook-square"
  }), " Share"), /*#__PURE__*/React.createElement(Button, {
    color: "google"
  }, /*#__PURE__*/React.createElement("i", {
    className: classes.socials + " fab fa-google-plus-g"
  }), "Share"), /*#__PURE__*/React.createElement(Button, {
    color: "github"
  }, /*#__PURE__*/React.createElement("i", {
    className: classes.socials + " fab fa-github"
  }), " Star"))));
}