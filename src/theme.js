const colorNames = {
  oxfordBlue: "#343F51",
  whitesmoke: "#f5f5f5",
  grey: "#ADADAD",
  hover: "#3d4f66",
  lightGrey: "#6E747C",
  boxGrey: "#8E9195",
  arrowGrey: "ccc",
  red: "#A51818"
};

export const theme = {
  color: {
    primary: colorNames.whitesmoke,
    secondary: colorNames.oxfordBlue,
    tertiary: colorNames.grey,
  },
  button: {
    hover: colorNames.hover,
  },
  accent: {
    clock: colorNames.lightGrey,
    selectArrow: colorNames.arrowGrey,
    shadowSelect: colorNames.boxGrey,
    failure: colorNames.red,
  },
  breakpoint: {
    mobile: "320px",
    tablet: "768px",
  },
};
