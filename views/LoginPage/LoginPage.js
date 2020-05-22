function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon"; // @material-ui/icons

import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People"; // core components

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";
const useStyles = makeStyles(styles);
export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest
  } = props;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, _extends({
    absolute: true,
    color: "transparent",
    brand: "Material Kit React",
    rightLinks: /*#__PURE__*/React.createElement(HeaderLinks, null)
  }, rest)), /*#__PURE__*/React.createElement("div", {
    className: classes.pageHeader,
    style: {
      backgroundImage: "url(" + image + ")",
      backgroundSize: "cover",
      backgroundPosition: "top center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement(GridContainer, {
    justify: "center"
  }, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/React.createElement(Card, {
    className: classes[cardAnimaton]
  }, /*#__PURE__*/React.createElement("form", {
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
    className: "fab fa-twitter"
  })), /*#__PURE__*/React.createElement(Button, {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-facebook"
  })), /*#__PURE__*/React.createElement(Button, {
    justIcon: true,
    href: "#pablo",
    target: "_blank",
    color: "transparent",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-google-plus-g"
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
  }, "Get started"))))))), /*#__PURE__*/React.createElement(Footer, {
    whiteFont: true
  })));
}