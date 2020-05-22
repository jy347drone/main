import React from "react"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles"; // @material-ui/icons

import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List"; // core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";
const useStyles = makeStyles(styles);
export default function SectionPills() {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement("div", {
    id: "navigation-pills"
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Navigation Pills")), /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("small", null, "With Icons"))), /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 8,
    lg: 6
  }, /*#__PURE__*/React.createElement(NavPills, {
    color: "primary",
    tabs: [{
      tabButton: "Dashboard",
      tabIcon: Dashboard,
      tabContent: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("p", null, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }, {
      tabButton: "Schedule",
      tabIcon: Schedule,
      tabContent: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("p", null, "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }, {
      tabButton: "Tasks",
      tabIcon: List,
      tabContent: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("p", null, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }]
  })), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6
  }, /*#__PURE__*/React.createElement(NavPills, {
    color: "rose",
    horizontal: {
      tabsGrid: {
        xs: 12,
        sm: 4,
        md: 4
      },
      contentGrid: {
        xs: 12,
        sm: 8,
        md: 8
      }
    },
    tabs: [{
      tabButton: "Dashboard",
      tabIcon: Dashboard,
      tabContent: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("p", null, "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }, {
      tabButton: "Schedule",
      tabIcon: Schedule,
      tabContent: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("p", null, "Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas."), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "Dramatically maintain clicks-and-mortar solutions without functional solutions. Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits."))
    }]
  }))))));
}