import * as origPalette from "./palettes/original";
import * as mixPalette from "./palettes/mix";
import * as matPalette from "./palettes/material";

export const decorateConfig = config => {
  const { gruvboxTheme: gruvboxConfig = {}, ...rest } = config;
  const {
    style: themeStyle = "dark",
    contrast: themeContrast = "normal",
    palette: themePalette = "material"
  } = gruvboxConfig;
  const { ...p } =
    themePalette === "original"
      ? origPalette
      : themePalette === "mix"
      ? mixPalette
      : matPalette;
  /* Temporary */

  const gruvboxRedColor =
    themeStyle === "light" ? p.gruvboxDarkRedColor : p.gruvboxLightRedColor;
  const gruvboxOrangeColor =
    themeStyle === "light"
      ? p.gruvboxDarkOrangeColor
      : p.gruvboxLightOrangeColor;
  const gruvboxYellowColor =
    themeStyle === "light"
      ? p.gruvboxDarkYellowColor
      : p.gruvboxLightYellowColor;
  const gruvboxGreenColor =
    themeStyle === "light" ? p.gruvboxDarkGreenColor : p.gruvboxLightGreenColor;
  const gruvboxAquaColor =
    themeStyle === "light" ? p.gruvboxDarkAquaColor : p.gruvboxLightAquaColor;
  const gruvboxBlueColor =
    themeStyle === "light" ? p.gruvboxDarkBlueColor : p.gruvboxLightBlueColor;
  const gruvboxPurpleColor =
    themeStyle === "light"
      ? p.gruvboxDarkPurpleColor
      : p.gruvboxLightPurpleColor;
  const gruvboxBlackColor =
    themeStyle === "light" ? p.gruvboxDarkBlackColor : p.gruvboxLightBlackColor;
  const gruvboxWhiteColor =
    themeStyle === "light" ? p.gruvboxDarkWhiteColor : p.gruvboxLightWhiteColor;
  // const gruvboxGreyColor =
  //   themeStyle === 'light' ? p.gruvboxDarkGreyColor : p.gruvboxLightGreyColor;
  /* */
  const darkThemeTerminalBlack = gruvboxBlackColor;
  const darkThemeTerminalRed = gruvboxRedColor;
  const darkThemeTerminalGreen = gruvboxGreenColor;
  const darkThemeTerminalYellow = gruvboxYellowColor;
  const darkThemeTerminalBlue = gruvboxBlueColor;
  const darkThemeTerminalMagenta = gruvboxPurpleColor;
  const darkThemeTerminalCyan = gruvboxAquaColor;
  const darkThemeTerminalWhite = gruvboxWhiteColor;

  // const darkThemeTerminalBrightBlack = gruvboxGreyColor;
  // const darkThemeTerminalBrightRed = p.gruvboxLightRedColor;
  // const darkThemeTerminalBrightGreen = p.gruvboxLightGreenColor;
  // const darkThemeTerminalBrightYellow = p.gruvboxLightYellowColor;
  // const darkThemeTerminalBrightBlue = p.gruvboxLightBlueColor;
  // const darkThemeTerminalBrightMagenta = p.gruvboxLightPurpleColor;
  // const darkThemeTerminalBrightCyan = p.gruvboxLightAquaColor;
  // const darkThemeTerminalBrightWhite = p.gruvboxLightColorOption1;
  const darkThemeTerminalBrightBlack = gruvboxBlackColor;
  const darkThemeTerminalBrightRed = gruvboxRedColor;
  const darkThemeTerminalBrightGreen = gruvboxGreenColor;
  const darkThemeTerminalBrightYellow = gruvboxYellowColor;
  const darkThemeTerminalBrightBlue = gruvboxBlueColor;
  const darkThemeTerminalBrightMagenta = gruvboxPurpleColor;
  const darkThemeTerminalBrightCyan = gruvboxAquaColor;
  const darkThemeTerminalBrightWhite = gruvboxWhiteColor;

  const darkThemeTerminalForeground = p.gruvboxLightColorOption1;
  const darkThemeTerminalBackgroundSoftContrast =
    p.gruvboxDarkColorSoftContrast;
  const darkThemeTerminalBackground = p.gruvboxDarkColor;
  const darkThemeTerminalBackgroundHardContrast =
    p.gruvboxDarkColorHardContrast;

  const lightThemeTerminalBlack = gruvboxBlackColor;
  const lightThemeTerminalRed = gruvboxRedColor;
  const lightThemeTerminalGreen = gruvboxGreenColor;
  const lightThemeTerminalYellow = gruvboxYellowColor;
  const lightThemeTerminalBlue = gruvboxBlueColor;
  const lightThemeTerminalMagenta = gruvboxPurpleColor;
  const lightThemeTerminalCyan = gruvboxAquaColor;
  const lightThemeTerminalWhite = gruvboxWhiteColor;

  // const lightThemeTerminalBrightBlack = gruvboxGreyColor;
  // const lightThemeTerminalBrightRed = .gruvboxDarkRedColor;
  // const lightThemeTerminalBrightGreen = p.gruvboxDarkGreenColor;
  // const lightThemeTerminalBrightYellow = p.gruvboxDarkYellowColor;
  // const lightThemeTerminalBrightBlue = p.gruvboxDarkBlueColor;
  // const lightThemeTerminalBrightMagenta = p.gruvboxDarkPurpleColor;
  // const lightThemeTerminalBrightCyan = p.gruvboxDarkAquaColor;
  // const lightThemeTerminalBrightWhite = p.gruvboxDarkColorOption1;

  const lightThemeTerminalBrightBlack = gruvboxBlackColor;
  const lightThemeTerminalBrightRed = gruvboxRedColor;
  const lightThemeTerminalBrightGreen = gruvboxGreenColor;
  const lightThemeTerminalBrightYellow = gruvboxYellowColor;
  const lightThemeTerminalBrightBlue = gruvboxBlueColor;
  const lightThemeTerminalBrightMagenta = gruvboxPurpleColor;
  const lightThemeTerminalBrightCyan = gruvboxAquaColor;
  const lightThemeTerminalBrightWhite = gruvboxWhiteColor;

  const lightThemeTerminalForeground = p.gruvboxDarkColorOption1;
  const lightThemeTerminalBackgroundSoftContrast =
    p.gruvboxLightColorSoftContrast;
  const lightThemeTerminalBackground = p.gruvboxLightColor;
  const lightThemeTerminalBackgroundHardContrast =
    p.gruvboxLightColorHardContrast;

  const terminalColors = {
    dark: {
      black: darkThemeTerminalBlack,
      red: darkThemeTerminalRed,
      green: darkThemeTerminalGreen,
      yellow: darkThemeTerminalYellow,
      blue: darkThemeTerminalBlue,
      magenta: darkThemeTerminalMagenta,
      cyan: darkThemeTerminalCyan,
      white: darkThemeTerminalWhite,
      lightBlack: darkThemeTerminalBrightBlack,
      lightRed: darkThemeTerminalBrightRed,
      lightGreen: darkThemeTerminalBrightGreen,
      lightYellow: darkThemeTerminalBrightYellow,
      lightBlue: darkThemeTerminalBrightBlue,
      lightMagenta: darkThemeTerminalBrightMagenta,
      lightCyan: darkThemeTerminalBrightCyan,
      lightWhite: darkThemeTerminalBrightWhite
    },
    light: {
      black: lightThemeTerminalBlack,
      red: lightThemeTerminalRed,
      green: lightThemeTerminalGreen,
      yellow: lightThemeTerminalYellow,
      blue: lightThemeTerminalBlue,
      magenta: lightThemeTerminalMagenta,
      cyan: lightThemeTerminalCyan,
      white: lightThemeTerminalWhite,
      lightBlack: lightThemeTerminalBrightBlack,
      lightRed: lightThemeTerminalBrightRed,
      lightGreen: lightThemeTerminalBrightGreen,
      lightYellow: lightThemeTerminalBrightYellow,
      lightBlue: lightThemeTerminalBrightBlue,
      lightMagenta: lightThemeTerminalBrightMagenta,
      lightCyan: lightThemeTerminalBrightCyan,
      lightWhite: lightThemeTerminalBrightWhite
    }
  };

  const terminalBackgrounds = {
    dark: {
      soft: darkThemeTerminalBackgroundSoftContrast,
      normal: darkThemeTerminalBackground,
      hard: darkThemeTerminalBackgroundHardContrast
    },
    light: {
      soft: lightThemeTerminalBackgroundSoftContrast,
      normal: lightThemeTerminalBackground,
      hard: lightThemeTerminalBackgroundHardContrast
    }
  };

  const terminalForegrounds = {
    dark: darkThemeTerminalForeground,
    light: lightThemeTerminalForeground
  };

  const backgroundColorOptions = {
    dark: {
      option1: p.gruvboxDarkColorOption1,
      option2: p.gruvboxDarkColorOption2,
      option3: p.gruvboxDarkColorOption3,
      option4: p.gruvboxDarkColorOption4
    },
    light: {
      option1: p.gruvboxLightColorOption1,
      option2: p.gruvboxLightColorOption2,
      option3: p.gruvboxLightColorOption3,
      option4: p.gruvboxLightColorOption4
    }
  };

  const foregroundColor = terminalForegrounds[themeStyle];
  const backgroundColor = terminalBackgrounds[themeStyle][themeContrast];
  const backgroundColors = backgroundColorOptions[themeStyle];
  const backgroundColorForActiveTab = backgroundColors.option1;
  const cursorMixBlendMode = themeStyle == "dark" ? "lighten" : "darken";

  return {
    ...rest,
    foregroundColor,
    backgroundColor,
    colors: terminalColors[themeStyle],
    cursorColor: gruvboxOrangeColor,
    css: `
      ${config.css ?? ""}
      .tabs_list,
      .tab_tab,
      .tabs_borderShim {
        color: ${foregroundColor} !important;
        background-color: ${backgroundColor} !important;
        border-color: transparent !important;
      }
      .tab_active {
        background-color: ${backgroundColorForActiveTab} !important;
        box-shadow: 2px 0 0 0 ${gruvboxOrangeColor} inset;
      }
    `,
    termCSS: `
      ${config.termCSS ?? ""}
      .cursor-node {
        mix-blend-mode: ${cursorMixBlendMode};
      }
    `
  };
};
