import React from "react"; // nodejs library that concatenates classes

import classNames from "classnames"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles"; // @material-ui/icons
// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";
import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";
const useStyles = makeStyles(styles);
export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  return /*#__PURE__*/React.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/React.createElement("h2", {
    className: classes.title
  }, "Here is our team"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/React.createElement(Card, {
    plain: true
  }, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6,
    className: classes.itemGrid
  }, /*#__PURE__*/React.createElement("img", {
    src: team1,
    alt: "...",
    className: imageClasses
  })), /*#__PURE__*/React.createElement("h4", {
    className: classes.cardTitle
  }, "Gigi Hadid", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("small", {
    className: classes.smallTitle
  }, "Model")), /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement("p", {
    className: classes.description
  }, "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ", /*#__PURE__*/React.createElement("a", {
    href: "#pablo"
  }, "links"), " for people to be able to follow them outside the site.")), /*#__PURE__*/React.createElement(CardFooter, {
    className: classes.justifyCenter
  }, /*#__PURE__*/React.createElement(Button, {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, /*#__PURE__*/React.createElement("i", {
    className: classes.socials + " fab fa-twitter"
  })), /*#__PURE__*/React.createElement(Button, {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, /*#__PURE__*/React.createElement("i", {
    className: classes.socials + " fab fa-instagram"
  })), /*#__PURE__*/React.createElement(Button, {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, /*#__PURE__*/React.createElement("i", {
    className: classes.socials + " fab fa-facebook"
  }))))), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/React.createElement(Card, {
    plain: true
  }, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6,
    className: classes.itemGrid
  }, /*#__PURE__*/React.createElement("img", {
    src: team2,
    alt: "...",
    className: imageClasses
  })), /*#__PURE__*/React.createElement("h4", {
    className: classes.cardTitle
  }, "Christian Louboutin", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("small", {
    className: classes.smallTitle
  }, "Designer")), /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement("p", {
    className: classes.description
  }, "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ", /*#__PURE__*/React.createElement("a", {
    href: "#pablo"
  }, "links"), " for people to be able to follow them outside the site.")), /*#__PURE__*/React.createElement(CardFooter, {
    className: classes.justifyCenter
  }, /*#__PURE__*/React.createElement(Button, {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, /*#__PURE__*/React.createElement("i", {
    className: classes.socials + " fab fa-twitter"
  })), /*#__PURE__*/React.createElement(Button, {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, /*#__PURE__*/React.createElement("i", {
    className: classes.socials + " fab fa-linkedin"
  }))))), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 4
  }, /*#__PURE__*/React.createElement(Card, {
    plain: true
  }, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6,
    className: classes.itemGrid
  }, /*#__PURE__*/React.createElement("img", {
    src: team3,
    alt: "...",
    className: imageClasses
  })), /*#__PURE__*/React.createElement("h4", {
    className: classes.cardTitle
  }, "Kendall Jenner", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("small", {
    className: classes.smallTitle
  }, "Model")), /*#__PURE__*/React.createElement(CardBody, null, /*#__PURE__*/React.createElement("p", {
    className: classes.description
  }, "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some ", /*#__PURE__*/React.createElement("a", {
    href: "#pablo"
  }, "links"), " for people to be able to follow them outside the site.")), /*#__PURE__*/React.createElement(CardFooter, {
    className: classes.justifyCenter
  }, /*#__PURE__*/React.createElement(Button, {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, /*#__PURE__*/React.createElement("i", {
    className: classes.socials + " fab fa-twitter"
  })), /*#__PURE__*/React.createElement(Button, {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, /*#__PURE__*/React.createElement("i", {
    className: classes.socials + " fab fa-instagram"
  })), /*#__PURE__*/React.createElement(Button, {
    justIcon: true,
    color: "transparent",
    className: classes.margin5
  }, /*#__PURE__*/React.createElement("i", {
    className: classes.socials + " fab fa-facebook"
  }))))))));
}