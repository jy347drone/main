import React from "react"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles"; // @material-ui/icons
// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";
const useStyles = makeStyles(styles);
export default function SectionCompletedExamples() {
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
    md: 8
  }, /*#__PURE__*/React.createElement("h2", null, "Completed with examples"), /*#__PURE__*/React.createElement("h4", null, "The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you", "'", "re good to go. More importantly, looking at them will give you a picture of what you can build with this powerful kit.")))));
}