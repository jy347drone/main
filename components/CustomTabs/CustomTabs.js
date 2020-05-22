function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react"; // nodejs library that concatenates classes

import classNames from "classnames"; // nodejs library to set properties for components

import PropTypes from "prop-types"; // material-ui components

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Icon from "@material-ui/core/Icon"; // core components

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import styles from "assets/jss/material-kit-react/components/customTabsStyle.js";
const useStyles = makeStyles(styles);
export default function CustomTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  };

  const classes = useStyles();
  const {
    headerColor,
    plainTabs,
    tabs,
    title,
    rtlActive
  } = props;
  const cardTitle = classNames({
    [classes.cardTitle]: true,
    [classes.cardTitleRTL]: rtlActive
  });
  return /*#__PURE__*/React.createElement(Card, {
    plain: plainTabs
  }, /*#__PURE__*/React.createElement(CardHeader, {
    color: headerColor,
    plain: plainTabs
  }, title !== undefined ? /*#__PURE__*/React.createElement("div", {
    className: cardTitle
  }, title) : null, /*#__PURE__*/React.createElement(Tabs, {
    value: value,
    onChange: handleChange,
    classes: {
      root: classes.tabsRoot,
      indicator: classes.displayNone
    }
  }, tabs.map((prop, key) => {
    var icon = {};

    if (prop.tabIcon) {
      icon = {
        icon: typeof prop.tabIcon === "string" ? /*#__PURE__*/React.createElement(Icon, null, prop.tabIcon) : /*#__PURE__*/React.createElement(prop.tabIcon, null)
      };
    }

    return /*#__PURE__*/React.createElement(Tab, _extends({
      classes: {
        root: classes.tabRootButton,
        label: classes.tabLabel,
        selected: classes.tabSelected,
        wrapper: classes.tabWrapper
      },
      key: key,
      label: prop.tabName
    }, icon));
  }))), /*#__PURE__*/React.createElement(CardBody, null, tabs.map((prop, key) => {
    if (key === value) {
      return /*#__PURE__*/React.createElement("div", {
        key: key
      }, prop.tabContent);
    }

    return null;
  })));
}
CustomTabs.propTypes = {
  headerColor: PropTypes.oneOf(["warning", "success", "danger", "info", "primary", "rose"]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    tabName: PropTypes.string.isRequired,
    tabIcon: PropTypes.object,
    tabContent: PropTypes.node.isRequired
  })),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool
};