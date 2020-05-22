function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react"; // nodejs library that concatenates classes

import classNames from "classnames"; // nodejs library to set properties for components

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab"; // core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/components/navPillsStyle.js";
const useStyles = makeStyles(styles);
export default function NavPills(props) {
  const [active, setActive] = React.useState(props.active);

  const handleChange = (event, active) => {
    setActive(active);
  };

  const handleChangeIndex = index => {
    setActive(index);
  };

  const classes = useStyles();
  const {
    tabs,
    direction,
    color,
    horizontal,
    alignCenter
  } = props;
  const flexContainerClasses = classNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined
  });
  const tabButtons = /*#__PURE__*/React.createElement(Tabs, {
    classes: {
      root: classes.root,
      fixed: classes.fixed,
      flexContainer: flexContainerClasses,
      indicator: classes.displayNone
    },
    value: active,
    onChange: handleChange,
    centered: alignCenter
  }, tabs.map((prop, key) => {
    var icon = {};

    if (prop.tabIcon !== undefined) {
      icon["icon"] = /*#__PURE__*/React.createElement(prop.tabIcon, {
        className: classes.tabIcon
      });
    }

    const pillsClasses = classNames({
      [classes.pills]: true,
      [classes.horizontalPills]: horizontal !== undefined,
      [classes.pillsWithIcons]: prop.tabIcon !== undefined
    });
    return /*#__PURE__*/React.createElement(Tab, _extends({
      label: prop.tabButton,
      key: key
    }, icon, {
      classes: {
        root: pillsClasses,
        selected: classes[color],
        wrapper: classes.tabWrapper
      }
    }));
  }));
  const tabContent = /*#__PURE__*/React.createElement("div", {
    className: classes.contentWrapper
  }, /*#__PURE__*/React.createElement(SwipeableViews, {
    axis: direction === "rtl" ? "x-reverse" : "x",
    index: active,
    onChangeIndex: handleChangeIndex
  }, tabs.map((prop, key) => {
    return /*#__PURE__*/React.createElement("div", {
      className: classes.tabContent,
      key: key
    }, prop.tabContent);
  })));
  return horizontal !== undefined ? /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement(GridItem, horizontal.tabsGrid, tabButtons), /*#__PURE__*/React.createElement(GridItem, horizontal.contentGrid, tabContent)) : /*#__PURE__*/React.createElement("div", null, tabButtons, tabContent);
}
NavPills.defaultProps = {
  active: 0,
  color: "primary"
};
NavPills.propTypes = {
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    tabButton: PropTypes.string,
    tabIcon: PropTypes.object,
    tabContent: PropTypes.node
  })).isRequired,
  color: PropTypes.oneOf(["primary", "warning", "danger", "success", "info", "rose"]),
  direction: PropTypes.string,
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object
  }),
  alignCenter: PropTypes.bool
};