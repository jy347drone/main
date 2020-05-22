import React from "react"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles"; // @material-ui/icons
// core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";
import image from "assets/img/faces/avatar.jpg";
import styles from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.js";
const useStyles = makeStyles(styles);
export default function SectionTypography() {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement("div", {
    id: "typography"
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h2", null, "Typography")), /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Header 1"), /*#__PURE__*/React.createElement("h1", null, "The Life of Material Kit")), /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Header 2"), /*#__PURE__*/React.createElement("h2", null, "The Life of Material Kit")), /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Header 3"), /*#__PURE__*/React.createElement("h3", null, "The Life of Material Kit")), /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Header 4"), /*#__PURE__*/React.createElement("h4", null, "The Life of Material Kit")), /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Header 5"), /*#__PURE__*/React.createElement("h5", null, "The Life of Material Kit")), /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Header 6"), /*#__PURE__*/React.createElement("h6", null, "The Life of Material Kit")), /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Header 1"), /*#__PURE__*/React.createElement("h1", {
    className: classes.title
  }, "The Life of Material Kit")), /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Header 2"), /*#__PURE__*/React.createElement("h2", {
    className: classes.title
  }, "The Life of Material Kit")), /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Header 3"), /*#__PURE__*/React.createElement("h3", {
    className: classes.title
  }, "The Life of Material Kit")), /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Header 4"), /*#__PURE__*/React.createElement("h4", {
    className: classes.title
  }, "The Life of Material Kit")), /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Paragraph"), /*#__PURE__*/React.createElement("p", null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")), /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Quote"), /*#__PURE__*/React.createElement(Quote, {
    text: "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.",
    author: " Kanye West, Musician"
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Muted Text"), /*#__PURE__*/React.createElement(Muted, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Primary Text"), /*#__PURE__*/React.createElement(Primary, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Info Text"), /*#__PURE__*/React.createElement(Info, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Success Text"), /*#__PURE__*/React.createElement(Success, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Warning Text"), /*#__PURE__*/React.createElement(Warning, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Danger Text"), /*#__PURE__*/React.createElement(Danger, null, "I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...")), /*#__PURE__*/React.createElement("div", {
    className: classes.typo
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.note
  }, "Small Tag"), /*#__PURE__*/React.createElement("h2", null, "Header with small subtitle", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Small, null, "Use ", '"Small"', " tag for the headers"))))), /*#__PURE__*/React.createElement("div", {
    className: classes.space50
  }), /*#__PURE__*/React.createElement("div", {
    id: "images"
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h2", null, "Images")), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 2
  }, /*#__PURE__*/React.createElement("h4", null, "Rounded Image"), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "...",
    className: classes.imgRounded + " " + classes.imgFluid
  })), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 2,
    className: classes.marginLeft
  }, /*#__PURE__*/React.createElement("h4", null, "Circle Image"), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "...",
    className: classes.imgRoundedCircle + " " + classes.imgFluid
  })), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 2,
    className: classes.marginLeft
  }, /*#__PURE__*/React.createElement("h4", null, "Rounded Raised"), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
  })), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 2,
    className: classes.marginLeft
  }, /*#__PURE__*/React.createElement("h4", null, "Circle Raised"), /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "...",
    className: classes.imgRaised + " " + classes.imgRoundedCircle + " " + classes.imgFluid
  }))), /*#__PURE__*/React.createElement(GridContainer, null)), /*#__PURE__*/React.createElement("div", {
    className: classes.space50
  })));
}