import React from "react"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles"; // @material-ui/icons

import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build"; // core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";
const useStyles = makeStyles(styles);
export default function SectionTabs() {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement("div", {
    id: "nav-tabs"
  }, /*#__PURE__*/React.createElement("h3", null, "Navigation Tabs"), /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("small", null, "Tabs with Icons on Card")), /*#__PURE__*/React.createElement(CustomTabs, {
    headerColor: "primary",
    tabs: [{
      tabName: "Profile",
      tabIcon: Face,
      tabContent: /*#__PURE__*/React.createElement("p", {
        className: classes.textCenter
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }, {
      tabName: "Messages",
      tabIcon: Chat,
      tabContent: /*#__PURE__*/React.createElement("p", {
        className: classes.textCenter
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")
    }, {
      tabName: "Settings",
      tabIcon: Build,
      tabContent: /*#__PURE__*/React.createElement("p", {
        className: classes.textCenter
      }, "think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }]
  })), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("small", null, "Tabs on Plain Card")), /*#__PURE__*/React.createElement(CustomTabs, {
    plainTabs: true,
    headerColor: "danger",
    tabs: [{
      tabName: "Home",
      tabContent: /*#__PURE__*/React.createElement("p", {
        className: classes.textCenter
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }, {
      tabName: "Updates",
      tabContent: /*#__PURE__*/React.createElement("p", {
        className: classes.textCenter
      }, "I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.")
    }, {
      tabName: "History",
      tabContent: /*#__PURE__*/React.createElement("p", {
        className: classes.textCenter
      }, "think that\u2019s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it\u2019s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.")
    }]
  }))))));
}