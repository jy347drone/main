function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react"; // nodejs library to set properties for components

import PropTypes from "prop-types"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};
const useStyles = makeStyles(styles);
export default function GridContainer(props) {
  const classes = useStyles();
  const {
    children,
    className,
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Grid, _extends({
    container: true
  }, rest, {
    className: classes.grid + " " + className
  }), children);
}
GridContainer.defaultProps = {
  className: ""
};
GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};