import React from "react"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon"; // @material-ui/icons

import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email"; // core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";
const useStyles = makeStyles(styles);
export default function SectionLogin() {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement(GridContainer, {
    justify: "center"
  }, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("form", {
    className: classes.form
  }, /*#__PURE__*/React.createElement(CardHeader, {
    color: "primary",
    className: classes.cardHeader
  }, /*#__PURE__*/React.createElement("h4", null, "Login"), /*#__PURE__*/React.createElement("div", {
    className: classes.socialLine
  }, /*#__PURE__*/React.createElement(Button, {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("i", {
    className: classes.socialIcons + " fab fa-twitter"
  })), /*#__PURE__*/React.createElement(Button, {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("i", {
    className: classes.socialIcons + " fab fa-facebook"
  })), /*#__PURE__*/React.createElement(Button, {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("i", {
    className: classes.socialIcons + " fab fa-google-plus-g"
  })))), /*#__PURE__*/React.createElement("p", {
    className: classes.divider
  }, "Or Be Classical"), /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement(CustomInput, {
    labelText: "First Name...",
    id: "first",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "text",
      endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement(People, {
        className: classes.inputIconsColor
      }))
    }
  }), /*#__PURE__*/React.createElement(CustomInput, {
    labelText: "Email...",
    id: "email",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "email",
      endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement(Email, {
        className: classes.inputIconsColor
      }))
    }
  }), /*#__PURE__*/React.createElement(CustomInput, {
    labelText: "Password",
    id: "pass",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      type: "password",
      endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement(Icon, {
        className: classes.inputIconsColor
      }, "lock_outline")),
      autoComplete: "off"
    }
  })), /*#__PURE__*/React.createElement(CardFooter, {
    className: classes.cardFooter
  }, /*#__PURE__*/React.createElement(Button, {
    simple: true,
    color: "primary",
    size: "lg"
  }, "Get started"))))))));
}