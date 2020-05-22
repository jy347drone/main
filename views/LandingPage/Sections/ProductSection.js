import React from "react"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles"; // @material-ui/icons

import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint"; // core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
const useStyles = makeStyles(styles);
export default function ProductSection() {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/React.createElement(GridContainer, {
    justify: "center"
  }, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/React.createElement("h2", {
    className: classes.title
  }, "Let", "'", "s talk product"), /*#__PURE__*/React.createElement("h5", {
    className: classes.description
  }, "This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn", "'", "t scroll to get here. Add a button if you want the user to see more."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/React.createElement(InfoArea, {
    title: "Free Chat",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: Chat,
    iconColor: "info",
    vertical: true
  })), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/React.createElement(InfoArea, {
    title: "Verified Users",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: VerifiedUser,
    iconColor: "success",
    vertical: true
  })), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/React.createElement(InfoArea, {
    title: "Fingerprint",
    description: "Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.",
    icon: Fingerprint,
    iconColor: "danger",
    vertical: true
  })))));
}