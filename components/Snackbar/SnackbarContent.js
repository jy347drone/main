import React from "react"; // nodejs library to set properties for components

import PropTypes from "prop-types"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";
import Snack from "@material-ui/core/SnackbarContent";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon"; // @material-ui/icons

import Close from "@material-ui/icons/Close"; // core components

import styles from "assets/jss/material-kit-react/components/snackbarContentStyle.js";
const useStyles = makeStyles(styles);
export default function SnackbarContent(props) {
  const {
    message,
    color,
    close,
    icon
  } = props;
  const classes = useStyles();
  var action = [];

  const closeAlert = () => {
    setAlert(null);
  };

  if (close !== undefined) {
    action = [/*#__PURE__*/React.createElement(IconButton, {
      className: classes.iconButton,
      key: "close",
      "aria-label": "Close",
      color: "inherit",
      onClick: closeAlert
    }, /*#__PURE__*/React.createElement(Close, {
      className: classes.close
    }))];
  }

  let snackIcon = null;

  switch (typeof icon) {
    case "object":
      snackIcon = /*#__PURE__*/React.createElement(props.icon, {
        className: classes.icon
      });
      break;

    case "string":
      snackIcon = /*#__PURE__*/React.createElement(Icon, {
        className: classes.icon
      }, props.icon);
      break;

    default:
      snackIcon = null;
      break;
  }

  const [alert, setAlert] = React.useState( /*#__PURE__*/React.createElement(Snack, {
    message: /*#__PURE__*/React.createElement("div", null, snackIcon, message, close !== undefined ? action : null),
    classes: {
      root: classes.root + " " + classes[color],
      message: classes.message + " " + classes.container
    }
  }));
  return alert;
}
SnackbarContent.propTypes = {
  message: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};