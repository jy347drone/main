import React from "react"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles"; // @material-ui/icons
// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
const useStyles = makeStyles(styles);
export default function WorkSection() {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/React.createElement(GridContainer, {
    justify: "center"
  }, /*#__PURE__*/React.createElement(GridItem, {
    cs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/React.createElement("h2", {
    className: classes.title
  }, "Work with us"), /*#__PURE__*/React.createElement("h4", {
    className: classes.description
  }, "Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours."), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/React.createElement(CustomInput, {
    labelText: "Your Name",
    id: "name",
    formControlProps: {
      fullWidth: true
    }
  })), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/React.createElement(CustomInput, {
    labelText: "Your Email",
    id: "email",
    formControlProps: {
      fullWidth: true
    }
  })), /*#__PURE__*/React.createElement(CustomInput, {
    labelText: "Your Message",
    id: "message",
    formControlProps: {
      fullWidth: true,
      className: classes.textArea
    },
    inputProps: {
      multiline: true,
      rows: 5
    }
  }), /*#__PURE__*/React.createElement(GridContainer, {
    justify: "center"
  }, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 4,
    className: classes.textCenter
  }, /*#__PURE__*/React.createElement(Button, {
    color: "primary"
  }, "Send Message"))))))));
}