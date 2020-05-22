import React from "react"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles"; // @material-ui/icons

import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning"; // core components

import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/notificationsStyles.js";
const useStyles = makeStyles(styles);
export default function SectionNotifications() {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.section,
    id: "notifications"
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Notifications"))), /*#__PURE__*/React.createElement(SnackbarContent, {
    message: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "INFO ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "info",
    icon: "info_outline"
  }), /*#__PURE__*/React.createElement(SnackbarContent, {
    message: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "SUCCESS ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "success",
    icon: Check
  }), /*#__PURE__*/React.createElement(SnackbarContent, {
    message: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "WARNING ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "warning",
    icon: Warning
  }), /*#__PURE__*/React.createElement(SnackbarContent, {
    message: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "DANGER ALERT:"), " You", "'", "ve got some friends nearby, stop looking at your phone and find them..."),
    close: true,
    color: "danger",
    icon: "info_outline"
  }), /*#__PURE__*/React.createElement(Clearfix, null));
}