import React from "react"; // nodejs library to set properties for components

import PropTypes from "prop-types"; // nodejs library that concatenates classes

import classNames from "classnames"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/infoStyle.js";
const useStyles = makeStyles(styles);
export default function InfoArea(props) {
  const classes = useStyles();
  const {
    title,
    description,
    iconColor,
    vertical
  } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  return /*#__PURE__*/React.createElement("div", {
    className: classes.infoArea
  }, /*#__PURE__*/React.createElement("div", {
    className: iconWrapper
  }, /*#__PURE__*/React.createElement(props.icon, {
    className: iconClasses
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.descriptionWrapper
  }, /*#__PURE__*/React.createElement("h4", {
    className: classes.title
  }, title), /*#__PURE__*/React.createElement("p", {
    className: classes.description
  }, description)));
}
InfoArea.defaultProps = {
  iconColor: "gray"
};
InfoArea.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf(["primary", "warning", "danger", "success", "info", "rose", "gray"]),
  vertical: PropTypes.bool
};