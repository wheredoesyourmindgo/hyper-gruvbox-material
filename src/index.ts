import * as origPalette from "./palettes/original";
import * as mixPalette from "./palettes/mix";
import * as matPalette from "./palettes/material";

export const decorateConfig = config => {
  const {
    gruvboxTheme: gruvboxConfig = {},
    hypest: hypestConfig = {},
    ...rest
  } = config;
  const { colors: hypestColors, ...hypestConfigRest } = hypestConfig;
  const {
    accentColor: hypestAccentColor,
    ...hypestConfigForTheme
  } = hypestConfigRest;

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
  const black = gruvboxBlackColor;
  const red = gruvboxRedColor;
  const green = gruvboxGreenColor;
  const yellow = gruvboxYellowColor;
  const blue = gruvboxBlueColor;
  const magenta = gruvboxPurpleColor;
  const cyan = gruvboxAquaColor;
  const white = gruvboxWhiteColor;

  const darkThemeTerminalForeground = p.gruvboxLightColorOption1;
  const darkThemeTerminalBackgroundSoftContrast =
    p.gruvboxDarkColorSoftContrast;
  const darkThemeTerminalBackground = p.gruvboxDarkColor;
  const darkThemeTerminalBackgroundHardContrast =
    p.gruvboxDarkColorHardContrast;

  const lightThemeTerminalForeground = p.gruvboxDarkColorOption1;
  const lightThemeTerminalBackgroundSoftContrast =
    p.gruvboxLightColorSoftContrast;
  const lightThemeTerminalBackground = p.gruvboxLightColor;
  const lightThemeTerminalBackgroundHardContrast =
    p.gruvboxLightColorHardContrast;

  const colors = {
    black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white,
    lightBlack: black,
    lightRed: red,
    lightGreen: green,
    lightYellow: yellow,
    lightBlue: blue,
    lightMagenta: magenta,
    lightCyan: cyan,
    lightWhite: white
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

  const newConfig = {
    ...rest,
    foregroundColor,
    colors,
    cursorColor: gruvboxOrangeColor,
    // css: `
    //   ${config.css ?? ""}
    //   .tabs_list,
    //   .tab_tab,
    //   .tabs_borderShim {
    //     color: ${foregroundColor} !important;
    //     background-color: ${backgroundColor} !important;
    //     border-color: transparent !important;
    //   }
    //   .tab_active {
    //     background-color: ${backgroundColorForActiveTab} !important;
    //     box-shadow: 2px 0 0 0 ${gruvboxOrangeColor} inset;
    //   }
    // `,
    // termCSS: `
    //   ${config.termCSS ?? ""}
    //   .cursor-node {
    //     mix-blend-mode: ${cursorMixBlendMode};
    //   }
    // `,
    hypest: {
      accentColor: hypestAccentColor,
      colors: {
        ...colors,
        ...hypestColors
      },
      ...hypestConfigForTheme
    }
  };

  if (Object.keys(hypestConfig).length > 0) {
    return newConfig;
  }
  return {
    backgroundColor,
    ...newConfig
  };
};
