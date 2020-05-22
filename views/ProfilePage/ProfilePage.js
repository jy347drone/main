function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react"; // nodejs library that concatenates classes

import classNames from "classnames"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles"; // @material-ui/icons

import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite"; // core components

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import profile from "assets/img/faces/christian.jpg";
import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";
import styles from "assets/jss/material-kit-react/views/profilePage.js";
const useStyles = makeStyles(styles);
export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest
  } = props;
  const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, _extends({
    color: "transparent",
    brand: "Material Kit React",
    rightLinks: /*#__PURE__*/React.createElement(HeaderLinks, null),
    fixed: true,
    changeColorOnScroll: {
      height: 200,
      color: "white"
    }
  }, rest)), /*#__PURE__*/React.createElement(Parallax, {
    small: true,
    filter: true,
    image: require("assets/img/profile-bg.jpg")
  }), /*#__PURE__*/React.createElement("div", {
    className: classNames(classes.main, classes.mainRaised)
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement(GridContainer, {
    justify: "center"
  }, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.profile
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: profile,
    alt: "...",
    className: imageClasses
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.name
  }, /*#__PURE__*/React.createElement("h3", {
    className: classes.title
  }, "Christian Louboutin"), /*#__PURE__*/React.createElement("h6", null, "DESIGNER"), /*#__PURE__*/React.createElement(Button, {
    justIcon: true,
    link: true,
    className: classes.margin5
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-twitter"
  })), /*#__PURE__*/React.createElement(Button, {
    justIcon: true,
    link: true,
    className: classes.margin5
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-instagram"
  })), /*#__PURE__*/React.createElement(Button, {
    justIcon: true,
    link: true,
    className: classes.margin5
  }, /*#__PURE__*/React.createElement("i", {
    className: "fab fa-facebook"
  })))))), /*#__PURE__*/React.createElement("div", {
    className: classes.description
  }, /*#__PURE__*/React.createElement("p", null, "An artist of considerable range, Chet Faker \u2014 the name taken by Melbourne-raised, Brooklyn-based Nick Murphy \u2014 writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure.", " ")), /*#__PURE__*/React.createElement(GridContainer, {
    justify: "center"
  }, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 8,
    className: classes.navWrapper
  }, /*#__PURE__*/React.createElement(NavPills, {
    alignCenter: true,
    color: "primary",
    tabs: [{
      tabButton: "Studio",
      tabIcon: Camera,
      tabContent: /*#__PURE__*/React.createElement(GridContainer, {
        justify: "center"
      }, /*#__PURE__*/React.createElement(GridItem, {
        xs: 12,
        sm: 12,
        md: 4
      }, /*#__PURE__*/React.createElement("img", {
        alt: "...",
        src: studio1,
        className: navImageClasses
      }), /*#__PURE__*/React.createElement("img", {
        alt: "...",
        src: studio2,
        className: navImageClasses
      })), /*#__PURE__*/React.createElement(GridItem, {
        xs: 12,
        sm: 12,
        md: 4
      }, /*#__PURE__*/React.createElement("img", {
        alt: "...",
        src: studio5,
        className: navImageClasses
      }), /*#__PURE__*/React.createElement("img", {
        alt: "...",
        src: studio4,
        className: navImageClasses
      })))
    }, {
      tabButton: "Work",
      tabIcon: Palette,
      tabContent: /*#__PURE__*/React.createElement(GridContainer, {
        justify: "center"
      }, /*#__PURE__*/React.createElement(GridItem, {
        xs: 12,
        sm: 12,
        md: 4
      }, /*#__PURE__*/React.createElement("img", {
        alt: "...",
        src: work1,
        className: navImageClasses
      }), /*#__PURE__*/React.createElement("img", {
        alt: "...",
        src: work2,
        className: navImageClasses
      }), /*#__PURE__*/React.createElement("img", {
        alt: "...",
        src: work3,
        className: navImageClasses
      })), /*#__PURE__*/React.createElement(GridItem, {
        xs: 12,
        sm: 12,
        md: 4
      }, /*#__PURE__*/React.createElement("img", {
        alt: "...",
        src: work4,
        className: navImageClasses
      }), /*#__PURE__*/React.createElement("img", {
        alt: "...",
        src: work5,
        className: navImageClasses
      })))
    }, {
      tabButton: "Favorite",
      tabIcon: Favorite,
      tabContent: /*#__PURE__*/React.createElement(GridContainer, {
        justify: "center"
      }, /*#__PURE__*/React.createElement(GridItem, {
        xs: 12,
        sm: 12,
        md: 4
      }, /*#__PURE__*/React.createElement("img", {
        alt: "...",
        src: work4,
        className: navImageClasses
      }), /*#__PURE__*/React.createElement("img", {
        alt: "...",
        src: studio3,
        className: navImageClasses
      })), /*#__PURE__*/React.createElement(GridItem, {
        xs: 12,
        sm: 12,
        md: 4
      }, /*#__PURE__*/React.createElement("img", {
        alt: "...",
        src: work2,
        className: navImageClasses
      }), /*#__PURE__*/React.createElement("img", {
        alt: "...",
        src: work1,
        className: navImageClasses
      }), /*#__PURE__*/React.createElement("img", {
        alt: "...",
        src: studio1,
        className: navImageClasses
      })))
    }]
  })))))), /*#__PURE__*/React.createElement(Footer, null));
}