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
  const darkThemeTerminalBlack = p.gruvboxDarkColor;
  const darkThemeTerminalRed = p.gruvboxRedColor;
  const darkThemeTerminalGreen = p.gruvboxGreenColor;
  const darkThemeTerminalYellow = p.gruvboxYellowColor;
  const darkThemeTerminalBlue = p.gruvboxBlueColor;
  const darkThemeTerminalMagenta = p.gruvboxPurpleColor;
  const darkThemeTerminalCyan = p.gruvboxAquaColor;
  const darkThemeTerminalWhite = p.gruvboxLightGreyColor;

  const darkThemeTerminalBrightBlack = p.gruvboxGreyColor;
  const darkThemeTerminalBrightRed = p.gruvboxLightRedColor;
  const darkThemeTerminalBrightGreen = p.gruvboxLightGreenColor;
  const darkThemeTerminalBrightYellow = p.gruvboxLightYellowColor;
  const darkThemeTerminalBrightBlue = p.gruvboxLightBlueColor;
  const darkThemeTerminalBrightMagenta = p.gruvboxLightPurpleColor;
  const darkThemeTerminalBrightCyan = p.gruvboxLightAquaColor;
  const darkThemeTerminalBrightWhite = p.gruvboxLightColorOption1;

  const darkThemeTerminalForeground = p.gruvboxLightColorOption1;
  const darkThemeTerminalBackgroundSoftContrast =
    p.gruvboxDarkColorSoftContrast;
  const darkThemeTerminalBackground = p.gruvboxDarkColor;
  const darkThemeTerminalBackgroundHardContrast =
    p.gruvboxDarkColorHardContrast;

  const lightThemeTerminalBlack = p.gruvboxLightColor;
  const lightThemeTerminalRed = p.gruvboxRedColor;
  const lightThemeTerminalGreen = p.gruvboxGreenColor;
  const lightThemeTerminalYellow = p.gruvboxYellowColor;
  const lightThemeTerminalBlue = p.gruvboxBlueColor;
  const lightThemeTerminalMagenta = p.gruvboxPurpleColor;
  const lightThemeTerminalCyan = p.gruvboxAquaColor;
  const lightThemeTerminalWhite = p.gruvboxDarkGreyColor;

  const lightThemeTerminalBrightBlack = p.gruvboxGreyColor;
  const lightThemeTerminalBrightRed = p.gruvboxDarkRedColor;
  const lightThemeTerminalBrightGreen = p.gruvboxDarkGreenColor;
  const lightThemeTerminalBrightYellow = p.gruvboxDarkYellowColor;
  const lightThemeTerminalBrightBlue = p.gruvboxDarkBlueColor;
  const lightThemeTerminalBrightMagenta = p.gruvboxDarkPurpleColor;
  const lightThemeTerminalBrightCyan = p.gruvboxDarkAquaColor;
  const lightThemeTerminalBrightWhite = p.gruvboxDarkColorOption1;

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
    cursorColor: p.gruvboxOrangeColor,
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
        box-shadow: 2px 0 0 0 ${p.gruvboxOrangeColor} inset;
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