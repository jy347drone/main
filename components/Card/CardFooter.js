function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react"; // nodejs library that concatenates classes

import classNames from "classnames"; // nodejs library to set properties for components

import PropTypes from "prop-types"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles"; // @material-ui/icons
// core components

import styles from "assets/jss/material-kit-react/components/cardFooterStyle.js";
const useStyles = makeStyles(styles);
export default function CardFooter(props) {
  const classes = useStyles();
  const {
    className,
    children,
    ...rest
  } = props;
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [className]: className !== undefined
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cardFooterClasses
  }, rest), children);
}
CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};