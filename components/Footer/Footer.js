/*eslint-disable*/
import React from "react"; // nodejs library to set properties for components

import PropTypes from "prop-types"; // nodejs library that concatenates classes

import classNames from "classnames"; // material-ui core components

import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"; // @material-ui/icons

import Favorite from "@material-ui/icons/Favorite";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";
const useStyles = makeStyles(styles);
export default function Footer(props) {
  const classes = useStyles();
  const {
    whiteFont
  } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return /*#__PURE__*/React.createElement("footer", {
    className: footerClasses
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.left
  }, /*#__PURE__*/React.createElement(List, {
    className: classes.list
  }, /*#__PURE__*/React.createElement(ListItem, {
    className: classes.inlineBlock
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.creative-tim.com/?ref=mkr-footer",
    className: classes.block,
    target: "_blank"
  }, "Creative Tim")), /*#__PURE__*/React.createElement(ListItem, {
    className: classes.inlineBlock
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.creative-tim.com/presentation?ref=mkr-footer",
    className: classes.block,
    target: "_blank"
  }, "About us")), /*#__PURE__*/React.createElement(ListItem, {
    className: classes.inlineBlock
  }, /*#__PURE__*/React.createElement("a", {
    href: "http://blog.creative-tim.com/?ref=mkr-footer",
    className: classes.block,
    target: "_blank"
  }, "Blog")), /*#__PURE__*/React.createElement(ListItem, {
    className: classes.inlineBlock
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.creative-tim.com/license?ref=mkr-footer",
    className: classes.block,
    target: "_blank"
  }, "Licenses")))), /*#__PURE__*/React.createElement("div", {
    className: classes.right
  }, "\xA9 ", 1900 + new Date().getYear(), " , made with", " ", /*#__PURE__*/React.createElement(Favorite, {
    className: classes.icon
  }), " by", " ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.creative-tim.com?ref=mkr-footer",
    className: aClasses,
    target: "_blank"
  }, "Creative Tim"), " ", "for a better web.")));
}
Footer.propTypes = {
  whiteFont: PropTypes.bool
};