function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react"; // nodejs library that concatenates classes

import classNames from "classnames"; // nodejs library to set properties for components

import PropTypes from "prop-types"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Icon from "@material-ui/core/Icon";
import Popper from "@material-ui/core/Popper"; // core components

import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/customDropdownStyle.js";
const useStyles = makeStyles(styles);
export default function CustomDropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = param => {
    setAnchorEl(null);

    if (props && props.onClick) {
      props.onClick(param);
    }
  };

  const handleCloseAway = event => {
    if (anchorEl.contains(event.target)) {
      return;
    }

    setAnchorEl(null);
  };

  const classes = useStyles();
  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    left,
    rtlActive,
    noLiPadding
  } = props;
  const caretClasses = classNames({
    [classes.caret]: true,
    [classes.caretActive]: Boolean(anchorEl),
    [classes.caretRTL]: rtlActive
  });
  const dropdownItem = classNames({
    [classes.dropdownItem]: true,
    [classes[hoverColor + "Hover"]]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive
  });
  let icon = null;

  switch (typeof buttonIcon) {
    case "object":
      icon = /*#__PURE__*/React.createElement(props.buttonIcon, {
        className: classes.buttonIcon
      });
      break;

    case "string":
      icon = /*#__PURE__*/React.createElement(Icon, {
        className: classes.buttonIcon
      }, props.buttonIcon);
      break;

    default:
      icon = null;
      break;
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, _extends({
    "aria-label": "Notifications",
    "aria-owns": anchorEl ? "menu-list" : null,
    "aria-haspopup": "true"
  }, buttonProps, {
    onClick: handleClick
  }), icon, buttonText !== undefined ? buttonText : null, caret ? /*#__PURE__*/React.createElement("b", {
    className: caretClasses
  }) : null)), /*#__PURE__*/React.createElement(Popper, {
    open: Boolean(anchorEl),
    anchorEl: anchorEl,
    transition: true,
    disablePortal: true,
    placement: dropup ? left ? "top-start" : "top" : left ? "bottom-start" : "bottom",
    className: classNames({
      [classes.popperClose]: !anchorEl,
      [classes.popperResponsive]: true
    })
  }, () => /*#__PURE__*/React.createElement(Grow, {
    in: Boolean(anchorEl),
    id: "menu-list",
    style: dropup ? {
      transformOrigin: "0 100% 0"
    } : {
      transformOrigin: "0 0 0"
    }
  }, /*#__PURE__*/React.createElement(Paper, {
    className: classes.dropdown
  }, /*#__PURE__*/React.createElement(ClickAwayListener, {
    onClickAway: handleCloseAway
  }, /*#__PURE__*/React.createElement(MenuList, {
    role: "menu",
    className: classes.menuList
  }, dropdownHeader !== undefined ? /*#__PURE__*/React.createElement(MenuItem, {
    onClick: () => handleClose(dropdownHeader),
    className: classes.dropdownHeader
  }, dropdownHeader) : null, dropdownList.map((prop, key) => {
    if (prop.divider) {
      return /*#__PURE__*/React.createElement(Divider, {
        key: key,
        onClick: () => handleClose("divider"),
        className: classes.dropdownDividerItem
      });
    }

    return /*#__PURE__*/React.createElement(MenuItem, {
      key: key,
      onClick: () => handleClose(prop),
      className: dropdownItem
    }, prop);
  })))))));
}
CustomDropdown.defaultProps = {
  caret: true,
  hoverColor: "primary"
};
CustomDropdown.propTypes = {
  hoverColor: PropTypes.oneOf(["black", "primary", "info", "success", "warning", "danger", "rose"]),
  buttonText: PropTypes.node,
  buttonIcon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  dropdownList: PropTypes.array,
  buttonProps: PropTypes.object,
  dropup: PropTypes.bool,
  dropdownHeader: PropTypes.node,
  rtlActive: PropTypes.bool,
  caret: PropTypes.bool,
  left: PropTypes.bool,
  noLiPadding: PropTypes.bool,
  // function that retuns the selected item
  onClick: PropTypes.func
};