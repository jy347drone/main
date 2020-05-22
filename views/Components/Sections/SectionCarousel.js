import React from "react"; // react component for creating beautiful carousel

import Carousel from "react-slick"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles"; // @material-ui/icons

import LocationOn from "@material-ui/icons/LocationOn"; // core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";
import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
const useStyles = makeStyles(styles);
export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 8,
    className: classes.marginAuto
  }, /*#__PURE__*/React.createElement(Card, {
    carousel: true
  }, /*#__PURE__*/React.createElement(Carousel, settings, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: image1,
    alt: "First slide",
    className: "slick-image"
  }), /*#__PURE__*/React.createElement("div", {
    className: "slick-caption"
  }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(LocationOn, {
    className: "slick-icons"
  }), "Yellowstone National Park, United States"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: image2,
    alt: "Second slide",
    className: "slick-image"
  }), /*#__PURE__*/React.createElement("div", {
    className: "slick-caption"
  }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(LocationOn, {
    className: "slick-icons"
  }), "Somewhere Beyond, United States"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: image3,
    alt: "Third slide",
    className: "slick-image"
  }), /*#__PURE__*/React.createElement("div", {
    className: "slick-caption"
  }, /*#__PURE__*/React.createElement("h4", null, /*#__PURE__*/React.createElement(LocationOn, {
    className: "slick-icons"
  }), "Yellowstone National Park, United States")))))))));
}