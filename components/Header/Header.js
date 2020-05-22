import React from "react"; // nodejs library that concatenates classes

import classNames from "classnames"; // nodejs library to set properties for components

import PropTypes from "prop-types"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer"; // @material-ui/icons

import Menu from "@material-ui/icons/Menu"; // core components

import styles from "assets/jss/material-kit-react/components/headerStyle.js";
const useStyles = makeStyles(styles);
export default function Header(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }

    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = () => {
    const {
      color,
      changeColorOnScroll
    } = props;
    const windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName("header")[0].classList.remove(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName("header")[0].classList.add(classes[color]);
      document.body.getElementsByTagName("header")[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  const {
    color,
    rightLinks,
    leftLinks,
    brand,
    fixed,
    absolute
  } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });
  const brandComponent = /*#__PURE__*/React.createElement(Button, {
    className: classes.title
  }, brand);
  return /*#__PURE__*/React.createElement(AppBar, {
    className: appBarClasses
  }, /*#__PURE__*/React.createElement(Toolbar, {
    className: classes.container
  }, leftLinks !== undefined ? brandComponent : null, /*#__PURE__*/React.createElement("div", {
    className: classes.flex
  }, leftLinks !== undefined ? /*#__PURE__*/React.createElement(Hidden, {
    smDown: true,
    implementation: "css"
  }, leftLinks) : brandComponent), /*#__PURE__*/React.createElement(Hidden, {
    smDown: true,
    implementation: "css"
  }, rightLinks), /*#__PURE__*/React.createElement(Hidden, {
    mdUp: true
  }, /*#__PURE__*/React.createElement(IconButton, {
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerToggle
  }, /*#__PURE__*/React.createElement(Menu, null)))), /*#__PURE__*/React.createElement(Hidden, {
    mdUp: true,
    implementation: "js"
  }, /*#__PURE__*/React.createElement(Drawer, {
    variant: "temporary",
    anchor: "right",
    open: mobileOpen,
    classes: {
      paper: classes.drawerPaper
    },
    onClose: handleDrawerToggle
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.appResponsive
  }, leftLinks, rightLinks))));
}
Header.defaultProp = {
  color: "white"
};
Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger", "transparent", "white", "rose", "dark"]).isRequired
  })
};