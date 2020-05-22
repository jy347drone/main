import React from "react"; // plugin that creates slider

import Slider from "nouislider"; // @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch"; // @material-ui/icons

import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord"; // core components

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
const useStyles = makeStyles(styles);
export default function SectionBasics() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  React.useEffect(() => {
    if (!document.getElementById("sliderRegular").classList.contains("noUi-target")) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [40],
        connect: [true, false],
        step: 1,
        range: {
          min: 0,
          max: 100
        }
      });
    }

    if (!document.getElementById("sliderDouble").classList.contains("noUi-target")) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: {
          min: 0,
          max: 100
        }
      });
    }

    return function cleanup() {};
  });

  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classes.sections
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h2", null, "Basic Elements")), /*#__PURE__*/React.createElement("div", {
    id: "buttons"
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Buttons", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("small", null, "Pick your style"))), /*#__PURE__*/React.createElement(GridContainer, {
    justify: "center"
  }, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/React.createElement(Button, {
    color: "primary"
  }, "Default"), /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    round: true
  }, "round"), /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    round: true
  }, /*#__PURE__*/React.createElement(Favorite, {
    className: classes.icons
  }), " with icon"), /*#__PURE__*/React.createElement(Button, {
    justIcon: true,
    round: true,
    color: "primary"
  }, /*#__PURE__*/React.createElement(Favorite, {
    className: classes.icons
  })), /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    simple: true
  }, "simple"))), /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("small", null, "Pick your size"))), /*#__PURE__*/React.createElement(GridContainer, {
    justify: "center"
  }, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    size: "sm"
  }, "Small"), /*#__PURE__*/React.createElement(Button, {
    color: "primary"
  }, "Regular"), /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    size: "lg"
  }, "Large"))), /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, /*#__PURE__*/React.createElement("small", null, "Pick your color"))), /*#__PURE__*/React.createElement(GridContainer, {
    justify: "center"
  }, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 8
  }, /*#__PURE__*/React.createElement(Button, null, "Default"), /*#__PURE__*/React.createElement(Button, {
    color: "primary"
  }, "Primary"), /*#__PURE__*/React.createElement(Button, {
    color: "info"
  }, "Info"), /*#__PURE__*/React.createElement(Button, {
    color: "success"
  }, "Success"), /*#__PURE__*/React.createElement(Button, {
    color: "warning"
  }, "Warning"), /*#__PURE__*/React.createElement(Button, {
    color: "danger"
  }, "Danger"), /*#__PURE__*/React.createElement(Button, {
    color: "rose"
  }, "Rose")))), /*#__PURE__*/React.createElement("div", {
    className: classes.space50
  }), /*#__PURE__*/React.createElement("div", {
    id: "inputs"
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Inputs")), /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/React.createElement(CustomInput, {
    id: "regular",
    inputProps: {
      placeholder: "Regular"
    },
    formControlProps: {
      fullWidth: true
    }
  })), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/React.createElement(CustomInput, {
    labelText: "With floating label",
    id: "float",
    formControlProps: {
      fullWidth: true
    }
  })), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/React.createElement(CustomInput, {
    labelText: "Success input",
    id: "success",
    success: true,
    formControlProps: {
      fullWidth: true
    }
  })), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/React.createElement(CustomInput, {
    labelText: "Error input",
    id: "error",
    error: true,
    formControlProps: {
      fullWidth: true
    }
  })), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/React.createElement(CustomInput, {
    labelText: "With material Icons",
    id: "material",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement(People, null))
    }
  })), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 3
  }, /*#__PURE__*/React.createElement(CustomInput, {
    labelText: "With Font Awesome Icons",
    id: "font-awesome",
    formControlProps: {
      fullWidth: true
    },
    inputProps: {
      endAdornment: /*#__PURE__*/React.createElement(InputAdornment, {
        position: "end"
      }, /*#__PURE__*/React.createElement("i", {
        className: "fas fa-users"
      }))
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: classes.space70
  }), /*#__PURE__*/React.createElement("div", {
    id: "checkRadios"
  }, /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Checkboxes")), /*#__PURE__*/React.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      tabIndex: -1,
      onClick: () => handleToggle(21),
      checkedIcon: /*#__PURE__*/React.createElement(Check, {
        className: classes.checkedIcon
      }),
      icon: /*#__PURE__*/React.createElement(Check, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Unchecked"
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      tabIndex: -1,
      onClick: () => handleToggle(22),
      checked: checked.indexOf(22) !== -1 ? true : false,
      checkedIcon: /*#__PURE__*/React.createElement(Check, {
        className: classes.checkedIcon
      }),
      icon: /*#__PURE__*/React.createElement(Check, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Checked"
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    disabled: true,
    control: /*#__PURE__*/React.createElement(Checkbox, {
      tabIndex: -1,
      checkedIcon: /*#__PURE__*/React.createElement(Check, {
        className: classes.checkedIcon
      }),
      icon: /*#__PURE__*/React.createElement(Check, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    classes: {
      label: classes.label,
      disabled: classes.disabledCheckboxAndRadio,
      root: classes.labelRoot
    },
    label: "Disabled Unchecked"
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    disabled: true,
    control: /*#__PURE__*/React.createElement(Checkbox, {
      tabIndex: -1,
      checked: checked.indexOf(24) !== -1 ? true : false,
      checkedIcon: /*#__PURE__*/React.createElement(Check, {
        className: classes.checkedIcon
      }),
      icon: /*#__PURE__*/React.createElement(Check, {
        className: classes.uncheckedIcon
      }),
      classes: {
        checked: classes.checked,
        root: classes.checkRoot
      }
    }),
    classes: {
      label: classes.label,
      disabled: classes.disabledCheckboxAndRadio,
      root: classes.labelRoot
    },
    label: "Disabled Checked"
  }))), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Radio Buttons")), /*#__PURE__*/React.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Radio, {
      checked: selectedEnabled === "a",
      onChange: () => setSelectedEnabled("a"),
      value: "a",
      name: "radio button enabled",
      "aria-label": "A",
      icon: /*#__PURE__*/React.createElement(FiberManualRecord, {
        className: classes.radioUnchecked
      }),
      checkedIcon: /*#__PURE__*/React.createElement(FiberManualRecord, {
        className: classes.radioChecked
      }),
      classes: {
        checked: classes.radio,
        root: classes.radioRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "First Radio"
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Radio, {
      checked: selectedEnabled === "b",
      onChange: () => setSelectedEnabled("b"),
      value: "b",
      name: "radio button enabled",
      "aria-label": "B",
      icon: /*#__PURE__*/React.createElement(FiberManualRecord, {
        className: classes.radioUnchecked
      }),
      checkedIcon: /*#__PURE__*/React.createElement(FiberManualRecord, {
        className: classes.radioChecked
      }),
      classes: {
        checked: classes.radio,
        root: classes.radioRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Second Radio"
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    disabled: true,
    control: /*#__PURE__*/React.createElement(Radio, {
      checked: false,
      value: "a",
      name: "radio button disabled",
      "aria-label": "B",
      icon: /*#__PURE__*/React.createElement(FiberManualRecord, {
        className: classes.radioUnchecked
      }),
      checkedIcon: /*#__PURE__*/React.createElement(FiberManualRecord, {
        className: classes.radioChecked
      }),
      classes: {
        checked: classes.radio,
        disabled: classes.disabledCheckboxAndRadio,
        root: classes.radioRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Disabled Unchecked Radio"
  })), /*#__PURE__*/React.createElement("div", {
    className: classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    disabled: true,
    control: /*#__PURE__*/React.createElement(Radio, {
      checked: true,
      value: "b",
      name: "radio button disabled",
      "aria-label": "B",
      icon: /*#__PURE__*/React.createElement(FiberManualRecord, {
        className: classes.radioUnchecked
      }),
      checkedIcon: /*#__PURE__*/React.createElement(FiberManualRecord, {
        className: classes.radioChecked
      }),
      classes: {
        checked: classes.radio,
        disabled: classes.disabledCheckboxAndRadio,
        root: classes.radioRoot
      }
    }),
    classes: {
      label: classes.label,
      root: classes.labelRoot
    },
    label: "Disabled Checked Radio"
  }))), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Toggle Buttons")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Switch, {
      checked: checkedA,
      onChange: event => setCheckedA(event.target.checked),
      value: "checkedA",
      classes: {
        switchBase: classes.switchBase,
        checked: classes.switchChecked,
        thumb: classes.switchIcon,
        track: classes.switchBar
      }
    }),
    classes: {
      label: classes.label
    },
    label: "Toggle is on"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Switch, {
      checked: checkedB,
      onChange: event => setCheckedB(event.target.checked),
      value: "checkedB",
      classes: {
        switchBase: classes.switchBase,
        checked: classes.switchChecked,
        thumb: classes.switchIcon,
        track: classes.switchBar
      }
    }),
    classes: {
      label: classes.label
    },
    label: "Toggle is off"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: classes.space70
  }), /*#__PURE__*/React.createElement("div", {
    id: "progress"
  }, /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Progress Bars")), /*#__PURE__*/React.createElement(CustomLinearProgress, {
    variant: "determinate",
    color: "primary",
    value: 30
  }), /*#__PURE__*/React.createElement(CustomLinearProgress, {
    variant: "determinate",
    color: "info",
    value: 60
  }), /*#__PURE__*/React.createElement(CustomLinearProgress, {
    variant: "determinate",
    color: "success",
    value: 100,
    style: {
      width: "35%",
      display: "inline-block"
    }
  }), /*#__PURE__*/React.createElement(CustomLinearProgress, {
    variant: "determinate",
    color: "warning",
    value: 100,
    style: {
      width: "20%",
      display: "inline-block"
    }
  }), /*#__PURE__*/React.createElement(CustomLinearProgress, {
    variant: "determinate",
    color: "danger",
    value: 25,
    style: {
      width: "45%",
      display: "inline-block"
    }
  })), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Pagination")), /*#__PURE__*/React.createElement(Paginations, {
    pages: [{
      text: 1
    }, {
      text: "..."
    }, {
      text: 5
    }, {
      text: 6
    }, {
      active: true,
      text: 7
    }, {
      text: 8
    }, {
      text: 9
    }, {
      text: "..."
    }, {
      text: 12
    }]
  }), /*#__PURE__*/React.createElement(Paginations, {
    pages: [{
      text: "PREV"
    }, {
      text: 1
    }, {
      text: 2
    }, {
      active: true,
      text: 3
    }, {
      text: 4
    }, {
      text: 5
    }, {
      text: "NEXT"
    }],
    color: "info"
  })))), /*#__PURE__*/React.createElement("div", {
    id: "sliders"
  }, /*#__PURE__*/React.createElement(GridContainer, null, /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Sliders")), /*#__PURE__*/React.createElement("div", {
    id: "sliderRegular",
    className: "slider-primary"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    id: "sliderDouble",
    className: "slider-info"
  })), /*#__PURE__*/React.createElement(GridItem, {
    xs: 12,
    sm: 12,
    md: 6
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.title
  }, /*#__PURE__*/React.createElement("h3", null, "Badges")), /*#__PURE__*/React.createElement(Badge, null, "default"), /*#__PURE__*/React.createElement(Badge, {
    color: "primary"
  }, "primary"), /*#__PURE__*/React.createElement(Badge, {
    color: "info"
  }, "info"), /*#__PURE__*/React.createElement(Badge, {
    color: "success"
  }, "success"), /*#__PURE__*/React.createElement(Badge, {
    color: "warning"
  }, "warning"), /*#__PURE__*/React.createElement(Badge, {
    color: "danger"
  }, "danger"), /*#__PURE__*/React.createElement(Badge, {
    color: "rose"
  }, "rose"))))));
}