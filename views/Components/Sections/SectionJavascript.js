function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react"; // react plugin for creating date-time-picker

import Datetime from "react-datetime"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover"; // @material-ui/icons

import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close"; // core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";
const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return /*#__PURE__*/React.createElement(Slide, _extends({
    direction: "down",
    ref: ref
  }, props));
});
Transition.displayName = "Transition";
export default function SectionJavascript() {
  const classes = useStyles();
  const [anchorElLeft, setAnchorElLeft] = React.useState(null);
  const [anchorElTop, setAnchorElTop] = React.useState(null);
  const [anchorElBottom, setAnchorElBottom] = React.useState(null);
  const [anchorElRight, setAnchorElRight] = React.useState(null);
  const [classicModal, setClassicModal] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h2", null, "Javascript components")), /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Modal")), /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6,
    lg: 4
  }, /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    block: true,
    onClick: () => setClassicModal(true)
  }, /*#__PURE__*/React.createElement(LibraryBooks, {
    className: classes.icon
  }), "Classic"), /*#__PURE__*/React.createElement(Dialog, {
    classes: {
      root: classes.center,
      paper: classes.modal
    },
    open: classicModal,
    TransitionComponent: Transition,
    keepMounted: true,
    onClose: () => setClassicModal(false),
    "aria-labelledby": "classic-modal-slide-title",
    "aria-describedby": "classic-modal-slide-description"
  }, /*#__PURE__*/React.createElement(DialogTitle, {
    id: "classic-modal-slide-title",
    disableTypography: true,
    className: classes.modalHeader
  }, /*#__PURE__*/React.createElement(IconButton, {
    className: classes.modalCloseButton,
    key: "close",
    "aria-label": "Close",
    color: "inherit",
    onClick: () => setClassicModal(false)
  }, /*#__PURE__*/React.createElement(Close, {
    className: classes.modalClose
  })), /*#__PURE__*/React.createElement("h4", {
    className: classes.modalTitle
  }, "Modal title")), /*#__PURE__*/React.createElement(DialogContent, {
    id: "classic-modal-slide-description",
    className: classes.modalBody
  }, /*#__PURE__*/React.createElement("p", null, "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.")), /*#__PURE__*/React.createElement(DialogActions, {
    className: classes.modalFooter
  }, /*#__PURE__*/React.createElement(Button, {
    color: "transparent",
    simple: true
  }, "Nice Button"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setClassicModal(false),
    color: "danger",
    simple: true
  }, "Close"))))), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 12
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Datetime Picker")), /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/React.createElement(InputLabel, {
    className: classes.label
  }, "Datetime Picker"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(FormControl, {
    fullWidth: true
  }, /*#__PURE__*/React.createElement(Datetime, {
    inputProps: {
      placeholder: "Datetime Picker Here"
    }
  })))))), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Popovers")), /*#__PURE__*/React.createElement(Button, {
    onClick: event => setAnchorElLeft(event.currentTarget)
  }, "On left"), /*#__PURE__*/React.createElement(Popover, {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElLeft),
    anchorEl: anchorElLeft,
    onClose: () => setAnchorElLeft(null),
    anchorOrigin: {
      vertical: "center",
      horizontal: "left"
    },
    transformOrigin: {
      vertical: "center",
      horizontal: "right"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: classes.popoverHeader
  }, "Popover on left"), /*#__PURE__*/React.createElement("div", {
    className: classes.popoverBody
  }, "Here will be some very useful information about his popover. Here will be some very useful information about his popover.")), /*#__PURE__*/React.createElement(Button, {
    onClick: event => setAnchorElTop(event.currentTarget)
  }, "On top"), /*#__PURE__*/React.createElement(Popover, {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElTop),
    anchorEl: anchorElTop,
    onClose: () => setAnchorElTop(null),
    anchorOrigin: {
      vertical: "top",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "bottom",
      horizontal: "center"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: classes.popoverHeader
  }, "Popover on top"), /*#__PURE__*/React.createElement("div", {
    className: classes.popoverBody
  }, "Here will be some very useful information about his popover.")), /*#__PURE__*/React.createElement(Button, {
    onClick: event => setAnchorElBottom(event.currentTarget)
  }, "On bottom"), /*#__PURE__*/React.createElement(Popover, {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElBottom),
    anchorEl: anchorElBottom,
    onClose: () => setAnchorElBottom(null),
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: classes.popoverHeader
  }, "Popover on bottom"), /*#__PURE__*/React.createElement("div", {
    className: classes.popoverBody
  }, "Here will be some very useful information about his popover.")), /*#__PURE__*/React.createElement(Button, {
    onClick: event => setAnchorElRight(event.currentTarget)
  }, "On right"), /*#__PURE__*/React.createElement(Popover, {
    classes: {
      paper: classes.popover
    },
    open: Boolean(anchorElRight),
    anchorEl: anchorElRight,
    onClose: () => setAnchorElRight(null),
    anchorOrigin: {
      vertical: "center",
      horizontal: "right"
    },
    transformOrigin: {
      vertical: "center",
      horizontal: "left"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: classes.popoverHeader
  }, "Popover on right"), /*#__PURE__*/React.createElement("div", {
    className: classes.popoverBody
  }, "Here will be some very useful information about his popover.")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Tooltips")), /*#__PURE__*/React.createElement(Tooltip, {
    id: "tooltip-left",
    title: "Tooltip on left",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, /*#__PURE__*/React.createElement(Button, null, "On left")), /*#__PURE__*/React.createElement(Tooltip, {
    id: "tooltip-top",
    title: "Tooltip on top",
    placement: "top",
    classes: {
      tooltip: classes.tooltip
    }
  }, /*#__PURE__*/React.createElement(Button, null, "On top")), /*#__PURE__*/React.createElement(Tooltip, {
    id: "tooltip-bottom",
    title: "Tooltip on bottom",
    placement: "bottom",
    classes: {
      tooltip: classes.tooltip
    }
  }, /*#__PURE__*/React.createElement(Button, null, "On bottom")), /*#__PURE__*/React.createElement(Tooltip, {
    id: "tooltip-right",
    title: "Tooltip on right",
    placement: "right",
    classes: {
      tooltip: classes.tooltip
    }
  }, /*#__PURE__*/React.createElement(Button, null, "On right")))), /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Carousel"))));
}