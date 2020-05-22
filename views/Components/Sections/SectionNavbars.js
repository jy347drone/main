import React from "react"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon"; // @material-ui/icons

import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore"; // core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";
import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";
import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
const useStyles = makeStyles(styles);
export default function SectionNavbars() {
  const classes = useStyles();
  return /*#__PURE__*/React.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Menu")), /*#__PURE__*/React.createElement(Header, {
    brand: "Menu",
    color: "primary",
    leftLinks: /*#__PURE__*/React.createElement(List, {
      className: classes.list
    }, /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Link")), /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Link")), /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(CustomDropdown, {
      buttonText: "Dropdown",
      dropdownHeader: "Dropdown Header",
      buttonProps: {
        className: classes.navLink,
        color: "transparent"
      },
      dropdownList: ["Action", "Another action", "Something else here", {
        divider: true
      }, "Separated link", {
        divider: true
      }, "One more separated link"]
    })))
  })), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Menu with Icons")), /*#__PURE__*/React.createElement(Header, {
    brand: "Icons",
    color: "info",
    rightLinks: /*#__PURE__*/React.createElement(List, {
      className: classes.list
    }, /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      color: "transparent",
      className: classes.navLink
    }, /*#__PURE__*/React.createElement(Email, {
      className: classes.icons
    }))), /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      color: "transparent",
      className: classes.navLink
    }, /*#__PURE__*/React.createElement(Face, {
      className: classes.icons
    }))), /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(CustomDropdown, {
      left: true,
      hoverColor: "info",
      dropdownHeader: "Dropdown Header",
      buttonIcon: "settings",
      buttonProps: {
        className: classes.navLink,
        color: "transparent"
      },
      dropdownList: ["Action", "Another action", "Something else here", {
        divider: true
      }, "Separated link", {
        divider: true
      }, "One more separated link"]
    })))
  }))), /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Navigation"))), /*#__PURE__*/React.createElement("div", {
    id: "navbar",
    className: classes.navbar
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.navigation,
    style: {
      backgroundImage: "url(" + image + ")"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    brand: "Brand",
    color: "rose",
    leftLinks: /*#__PURE__*/React.createElement(List, {
      className: classes.list
    }, /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Link")), /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Link"))),
    rightLinks: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CustomInput, {
      white: true,
      inputRootCustomClasses: classes.inputRootCustomClasses,
      formControlProps: {
        className: classes.formControl
      },
      inputProps: {
        placeholder: "Search",
        inputProps: {
          "aria-label": "Search",
          className: classes.searchInput
        }
      }
    }), /*#__PURE__*/React.createElement(Button, {
      justIcon: true,
      round: true,
      color: "white"
    }, /*#__PURE__*/React.createElement(Search, {
      className: classes.searchIcon
    })))
  }), /*#__PURE__*/React.createElement(Header, {
    brand: "Info Color",
    color: "info",
    rightLinks: /*#__PURE__*/React.createElement(List, {
      className: classes.list
    }, /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      href: "#pablo",
      className: classes.navLink + " " + classes.navLinkActive,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Discover")), /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Profile")), /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Settings")))
  }), /*#__PURE__*/React.createElement(Header, {
    brand: "Primary Color",
    color: "primary",
    rightLinks: /*#__PURE__*/React.createElement(List, {
      className: classes.list
    }, /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      href: "#pablo",
      className: classes.navLink + " " + classes.navLinkActive,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, /*#__PURE__*/React.createElement(Explore, {
      className: classes.icons
    }), " Discover")), /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, /*#__PURE__*/React.createElement(AccountCircle, {
      className: classes.icons
    }), " Profile")), /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, /*#__PURE__*/React.createElement(Icon, {
      className: classes.icons
    }, "settings"), " Settings")))
  }), /*#__PURE__*/React.createElement(Header, {
    brand: "Navbar with notifications",
    color: "dark",
    rightLinks: /*#__PURE__*/React.createElement(List, {
      className: classes.list
    }, /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Discover")), /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Wishlist")), /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      justIcon: true,
      round: true,
      href: "#pablo",
      className: classes.notificationNavLink,
      onClick: e => e.preventDefault(),
      color: "rose"
    }, /*#__PURE__*/React.createElement(Email, {
      className: classes.icons
    }))), /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(CustomDropdown, {
      left: true,
      caret: false,
      hoverColor: "black",
      dropdownHeader: "Dropdown Header",
      buttonText: /*#__PURE__*/React.createElement("img", {
        src: profileImage,
        className: classes.img,
        alt: "profile"
      }),
      buttonProps: {
        className: classes.navLink + " " + classes.imageDropdownButton,
        color: "transparent"
      },
      dropdownList: ["Me", "Settings and other stuff", "Sign out"]
    })))
  }), /*#__PURE__*/React.createElement(Header, {
    brand: "Navbar with profile",
    rightLinks: /*#__PURE__*/React.createElement(List, {
      className: classes.list
    }, /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Discover")), /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      href: "#pablo",
      className: classes.navLink,
      onClick: e => e.preventDefault(),
      color: "transparent"
    }, "Wishlist")), /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      href: "#pablo",
      className: classes.registerNavLink,
      onClick: e => e.preventDefault(),
      color: "rose",
      round: true
    }, "Register")))
  }), /*#__PURE__*/React.createElement(Header, {
    brand: "Transparent",
    color: "transparent",
    rightLinks: /*#__PURE__*/React.createElement(List, {
      className: classes.list
    }, /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      color: "transparent",
      className: classes.navLink + " " + classes.socialIconsButton
    }, /*#__PURE__*/React.createElement("i", {
      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-twitter"
    }), " ", "Twitter")), /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      color: "transparent",
      className: classes.navLink + " " + classes.socialIconsButton
    }, /*#__PURE__*/React.createElement("i", {
      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-facebook"
    }), " ", "Facebook")), /*#__PURE__*/React.createElement(ListItem, {
      className: classes.listItem
    }, /*#__PURE__*/React.createElement(Button, {
      color: "transparent",
      className: classes.navLink + " " + classes.socialIconsButton
    }, /*#__PURE__*/React.createElement("i", {
      className: classes.socialIcons + " " + classes.marginRight5 + " fab fa-instagram"
    }), " ", "Instagram")))
  }))));
}