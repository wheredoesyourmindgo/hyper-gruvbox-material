import * as origPalette from "./palettes/original";
import * as mixPalette from "./palettes/mix";
import * as matPalette from "./palettes/material";

let onWindow;
let decorateBrowserOptions;
const decorateConfig = config => {
  const { gruvboxTheme: gruvboxConfig = {}, ...rest } = config;

  const {
    style: themeStyle = "dark",
    contrast: themeContrast = "normal",
    palette: themePalette = "material",
    vibrancy: isVibrant = false,
    accentColor = "yellow",
    borders = false,
    hideControls = false,
    tabHeight: themeTabHeight = 37,
    backgroundOpacity = 0.6
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

  const isDarkMode = themeStyle === "dark";

  if (isVibrant) {
    if (isDarkMode) {
      onWindow = browserWindow => browserWindow.setVibrancy("ultra-dark");
    } else {
      onWindow = browserWindow => browserWindow.setVibrancy("light");
    }
  }

  if (hideControls === true) {
    decorateBrowserOptions = defaults => {
      return Object.assign({}, defaults, {
        titleBarStyle: "",
        transparent: true,
        frame: false
      });
    };
  }

  let background = backgroundColor;
  if (isVibrant) {
    background = `${backgroundColor}${hexOpacity(backgroundOpacity)}`;
  }

  let tabBorder, tabActiveBorder, activeTabEdges;

  if (!isDarkMode && borders === true) {
    tabBorder = `
      background: rgba(0, 0, 0, .075);
    `;
    tabActiveBorder = `
      background: rgba(255, 255, 255, .4);
    `;
    activeTabEdges = `
      box-shadow: -1px 0 0 rgba(0, 0, 0, .075), 1px 0 0 rgba(0, 0, 0, .075);
    `;
  } else if (isDarkMode && borders === true) {
    tabBorder = `
      background: rgba(255, 255, 255, .1);
    `;
    tabActiveBorder = `
      background: rgba(0, 0, 0, 0);
    `;
    activeTabEdges = `
      box-shadow: -1px 0 0 rgba(255, 255, 255, .1), 1px 0 0 rgba(255, 255, 255, .1);
    `;
  } else {
    tabBorder = "box-shadow: none;";
    tabActiveBorder = "box-shadow: none;";
    activeTabEdges = "box-shadow: none;";
  }

  let tabBackground, tabShim;

  if (!isDarkMode) {
    if (isVibrant) {
      tabBackground = `
        background: rgba(0, 0, 0, .03);
      `;
      tabShim = `
        box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .075);
        background: rgba(0, 0, 0, .03);
      `;
    } else {
      tabBackground = `
        background: rgba(0, 0, 0, .06);
      `;
      tabShim = `
        box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .075);
        background: rgba(0, 0, 0, .06);
      `;
    }
  } else {
    if (isVibrant) {
      tabBackground = `
        background: rgba(0, 0, 0, .2);
      `;
      tabShim = `
        box-shadow: inset 0 -1px 0 rgba(255, 255, 255, .1);
        background: rgba(0, 0, 0, .2);
      `;
    } else {
      tabBackground = `
        background: rgba(0, 0, 0, .2);
      `;
      tabShim = `
        box-shadow: inset 0 -1px 0 rgba(255, 255, 255, .1);
        background: rgba(0, 0, 0, .2);
      `;
    }
  }

  const cursorColor = colors[accentColor];

  const selectionColor = colors[accentColor] + "32";
  const shadowColor = colors[accentColor] + "00";
  const shadowColorRing = colors[accentColor] + "28";
  const shadowColorBorder = colors[accentColor] + "CC";

  const tabHeight = `${themeTabHeight}px`;

  return {
    ...rest,
    backgroundColor: background,
    foregroundColor,
    cursorColor: cursorColor,
    selectionColor: selectionColor,
    colors,
    css: `${config.css || ""}
    .hyper_main {
      background: ${background};
      border: none !important;
    }
    .hyper_main::before {
      content: '';
      position: absolute;
      top: ${tabHeight};
      left: 0;
      right: 0;
      bottom: 0;
      background: ${
        isDarkMode ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, .4)"
      };
    }
    .splitpane_divider {
      background-color: ${
        isDarkMode ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .05)"
      } !important;
    }
    .header_header {
      top: 0;
      left: 0;
      right: 0;
      background-color: transparent !important;
    }
    .terms_termsNotShifted {
      margin-top: ${tabHeight};
    }
    .tabs_borderShim {
      display: ${hideControls ? "none" : "block"};
      top: 0;
      bottom: 0;
      width: 79px;
      border: 0 !important;
      ${tabShim}
      ${!borders ? "box-shadow: none !important;" : ""}
    }
    .tabs_list {
      overflow-x: auto;
      overflow-y: hidden;
      height: ${tabHeight};
      max-height: ${tabHeight};
      padding-left: ${hideControls ? "0" : "1px"};
      margin-left: ${hideControls ? "0" : "78px"};
    }
    .tabs_nav {
      height: ${tabHeight};
      line-height: ${tabHeight};
    }
    .tab_first {
      padding-left: 0;
    }
    .tab_tab {
      border: 0;
      min-width: 90px;
      padding-left: 0;
      height: ${tabHeight};
      border: 0 !important;
      transition: border ease .1s;
      ${tabBackground}
    }
    .tab_tab:last-child {
      margin: 0;
    }
    .tab_tab::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      display: block;
      height: 1px;
      ${tabBorder}
    }
    .tab_tab:hover {
      z-index: 1;
      background: transparent;
    }
    .tab_tab.tab_active {
      z-index: 2;
      height: calc(${tabHeight} - 1px);
      background: rgba(0, 0, 0, 0);
      ${activeTabEdges}
    }
    .tab_tab.tab_active::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -1px;
      display: block;
      height: 1px;
      ${tabActiveBorder}
    }
    .tab_tab.tab_active:hover {
      background: ${isDarkMode ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, 0)"};
    }
    .tab_text {
      font-weight: 500;
      color: ${foregroundColor + "66"};
      height: calc(${tabHeight} - ${borders === true ? "1px" : "0px"});
      transition: color ease .1s, background ease .1s;
    }
    .tab_tab:hover .tab_text {
      color: ${isDarkMode ? foregroundColor + "CC" : foregroundColor + "99"};
      background: ${
        isDarkMode ? "rgba(255, 255, 255, .02)" : "rgba(255, 255, 255, .2)"
      };
    }
    .tab_textActive, .tabs_title {
      color: ${foregroundColor}CC !important;
      background: ${
        isDarkMode ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, .4)"
      } !important;
    }
    .tab_active:hover .tab_textActive {
      color: ${isDarkMode ? "rgba(255, 255, 255, .8)" : "rgba(0, 0, 0, .8)"};
      background: ${
        isDarkMode ? "rgba(0, 0, 0, 0)" : "rgba(255, 255, 255, .4)"
      } !important;
    }
    .tab_textInner {
      left: 28px;
      right: 28px;
    }
    .tabs_title {
      font-weight: 500;
      height: ${tabHeight};
    }
    .tab_icon {
      color: ${foregroundColor};
      width: 17px !important;
      height: 17px !important;
      top: 10px;
      right: 9px;
      border-radius: 15px !important;
    }
    .tab_icon:hover {
      background: ${
        isDarkMode ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .05)"
      } !important;
    }
    .tab_icon svg {
      display: none;
    }
    .tab_icon::before {
      display: none !important;
    }
    .tab_icon::after {
      content: '';
      position: absolute;
      top: 5px;
      left: 5px;
      width: 7px;
      height: 7px;
      opacity: .8;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='7' height='7' viewBox='0 0 7 7'%3E%3Cpath fill='${
        isDarkMode ? "%23FFF" : "%23222"
      }' fill-rule='evenodd' d='M6.03554572,6.83548509 L3.49504595,4.29706594 L0.957967343,6.8322625 C0.737166863,7.05059545 0.381074894,7.04870051 0.162613563,6.82802976 C-0.0542099399,6.60901359 -0.0542037584,6.25637092 0.162627533,6.03736121 L2.69981853,3.50227698 L0.163273785,0.967810534 C-0.0531566711,0.745171539 -0.0480175614,0.389339098 0.174752389,0.173036435 C0.392961119,-0.0388380703 0.740197748,-0.038868679 0.958445534,0.172967337 L3.49513077,2.7074057 L6.03476629,0.169878382 C6.25148385,-0.0524814282 6.60753114,-0.0571583867 6.83002172,0.15943183 C7.05251229,0.376022046 7.057192,0.731860103 6.84047442,0.954219926 C6.83700871,0.957775874 6.833496,0.961285769 6.82993722,0.964748713 L4.29049839,3.50227603 L6.83083636,6.04053346 C7.05041685,6.2599602 7.0504368,6.61574181 6.83088095,6.8351924 C6.61120524,7.05482901 6.25517874,7.05490146 6.03554572,6.83548509 Z'/%3E%3C/svg%3E%0A");
    }

    .xterm-viewport::-webkit-scrollbar {
      width: 6px !important;
      height: 6px !important;
    }
    .xterm-viewport::-webkit-scrollbar-thumb {
      background: ${
        isDarkMode ? "rgba(255, 255, 255, .2)" : "rgba(0, 0, 0, .2)"
      };
    }
    .tabs_list::-webkit-scrollbar {
      width: 3px !important;
      height: 3px !important;
    }
    .tabs_list::-webkit-scrollbar-thumb {
      background: ${
        isDarkMode ? "rgba(255, 255, 255, .2)" : "rgba(0, 0, 0, .2)"
      };
    }

    // Override: hyper-search

    .hyper-search-wrapper {
      position: relative !important;
      width: 100% !important;
      height: 52px !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      border: 0 !important;
      padding: 12px 14px 12px !important;
      background-color: transparent !important;
      border-radius: 0 !important;
      display: flex;
      opacity: 1 !important;
      box-shadow: 0 1px 0 ${
        isDarkMode ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .05)"
      };
    }
    .hyper-search-wrapper::before {
      content: '';
      position: absolute;
      top: 20px;
      left: 9px;
      margin-left: 14px;
      width: 12px;
      height: 12px;
      opacity: .8;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='${
        isDarkMode ? "%23FFF" : "%23222"
      }' fill-rule='evenodd' d='M18.0180272,15.9763428 L20.6402114,18.1942488 C21.0709886,18.5618712 21.1221857,19.2090988 20.7545639,19.639876 C20.3869415,20.0706532 19.7397138,20.1218503 19.3089367,19.7542284 C19.2678681,19.7191809 19.2296318,19.6809446 19.1945843,19.639876 L16.9761808,17.0181474 C16.1446386,17.6350733 15.1149359,18 14,18 C11.2385763,18 9,15.7614237 9,13 C9,10.2385763 11.2385763,8 14,8 C16.7614237,8 19,10.2385763 19,13 C19,14.1150083 18.6350259,15.1447724 18.0180272,15.9763428 Z M14,16.5 C15.9329966,16.5 17.5,14.9329966 17.5,13 C17.5,11.0670034 15.9329966,9.5 14,9.5 C12.0670034,9.5 10.5,11.0670034 10.5,13 C10.5,14.9329966 12.0670034,16.5 14,16.5 Z' transform='translate(-9 -8)'/%3E%3C/svg%3E%0A");
    }
    .hyper-search-wrapper button {
      position: relative;
      width: 28px;
      height: 28px;
      background: ${
        isDarkMode ? "rgba(255, 255, 255, .2)" : "rgba(255, 255, 255, .6)"
      };
      border-radius: 5px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .1), 0 0 1px rgba(0, 0, 0, .1);
      top: 0 !important;
      opacity: 1 !important;
      padding: 0 6px;
      cursor: pointer;
      flex-shrink: 0;
    }
    .hyper-search-wrapper button:hover {
      opacity: 1 !important;
    }
    .hyper-search-wrapper button:active {
      background: ${
        isDarkMode ? "rgba(255, 255, 255, .3)" : "rgba(255, 255, 255, .2)"
      };
    }
    .hyper-search-wrapper button.hyper-search-previous-button {
      border-radius: 5px 2px 2px 5px !important;
      margin-right: 1px;
    }
    .hyper-search-wrapper button.hyper-search-previous-button::after {
      content: '';
      position: absolute;
      top: 9px;
      left: 11px;
      width: 6px;
      height: 10px;
      opacity: .8;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='10' viewBox='0 0 6 10'%3E%3Cpath fill='${
        isDarkMode ? "%23FFF" : "%23222"
      }' d='M176.232354,17.7552874 C175.965383,17.9964219 175.922098,18.4362476 176.135675,18.7376657 C176.349251,19.0390838 176.738812,19.0879533 177.005783,18.8468188 L181.767669,14.5457657 C182.077444,14.2659699 182.077444,13.7340301 181.767669,13.4542343 L177.005783,9.15318116 C176.738812,8.91204669 176.349251,8.96091622 176.135675,9.2623343 C175.922098,9.56375238 175.965383,10.0035781 176.232354,10.2447126 L180.389999,14 L176.232354,17.7552874 Z' transform='matrix(-1 0 0 1 182 -9)'/%3E%3C/svg%3E%0A");
    }
    .hyper-search-wrapper button.hyper-search-next-button {
      border-radius: 2px 5px 5px 2px !important;
    }
    .hyper-search-wrapper button.hyper-search-next-button::after {
      content: '';
      position: absolute;
      top: 9px;
      left: 11px;
      width: 6px;
      height: 10px;
      opacity: .8;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='6' height='10' viewBox='0 0 6 10'%3E%3Cpath fill='${
        isDarkMode ? "%23FFF" : "%23222"
      }' d='M205.232354,17.7552874 C204.965383,17.9964219 204.922098,18.4362476 205.135675,18.7376657 C205.349251,19.0390838 205.738812,19.0879533 206.005783,18.8468188 L210.767669,14.5457657 C211.077444,14.2659699 211.077444,13.7340301 210.767669,13.4542343 L206.005783,9.15318116 C205.738812,8.91204669 205.349251,8.96091622 205.135675,9.2623343 C204.922098,9.56375238 204.965383,10.0035781 205.232354,10.2447126 L209.389999,14 L205.232354,17.7552874 Z' transform='translate(-205 -9)'/%3E%3C/svg%3E%0A");
    }
    .hyper-search-wrapper button.hyper-search-case-button {
      margin-left: 8px;
    }
    .hyper-search-wrapper button.hyper-search-case-button-unfocused::after {
      content: '';
      position: absolute;
      top: 8px;
      left: 8px;
      width: 12px;
      height: 12px;
      opacity: .8;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='13' viewBox='0 0 12 13'%3E%3Cpath fill='${
        isDarkMode ? "%23FFF" : "%23222"
      }' d='M237.994208,17.1648438 L243.994208,17.1648438 L243.994208,20.2 L237.994208,20.2 L237.994208,17.1648438 Z M238.996139,18.1726563 L238.996139,19.1863281 L242.992278,19.1863281 L242.998069,18.1726563 L238.996139,18.1726563 Z M235,14.2703125 L241.005792,8.2 L247,14.2703125 L244,14.2703125 L244,16.1511719 L237.994208,16.1511719 L238,14.2703125 L235,14.2703125 Z M241.005792,9.6296875 L237.409266,13.2566406 L239.001931,13.2566406 L238.996139,15.1375 L242.998069,15.1375 L243.003861,13.2566406 L244.584942,13.2566406 L241.005792,9.6296875 Z' transform='translate(-235 -8)'/%3E%3C/svg%3E%0A");
    }
    .hyper-search-wrapper button.hyper-search-case-button-focused,
    .hyper-search-wrapper button.hyper-search-case-button-focused:active {
      background: ${isDarkMode ? "rgba(255, 255, 255, .6)" : cursorColor};
    }
    .hyper-search-wrapper button.hyper-search-case-button-focused::after {
      content: '';
      position: absolute;
      top: 8px;
      left: 8px;
      width: 12px;
      height: 12px;
      opacity: 1;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='13' viewBox='0 0 12 13'%3E%3Cpath fill='${
        isDarkMode ? "%23222" : "%23FFF"
      }' d='M237.994208,17.1648438 L243.994208,17.1648438 L243.994208,20.2 L237.994208,20.2 L237.994208,17.1648438 Z M238.996139,18.1726563 L238.996139,19.1863281 L242.992278,19.1863281 L242.998069,18.1726563 L238.996139,18.1726563 Z M235,14.2703125 L241.005792,8.2 L247,14.2703125 L244,14.2703125 L244,16.1511719 L237.994208,16.1511719 L238,14.2703125 L235,14.2703125 Z M241.005792,9.6296875 L237.409266,13.2566406 L239.001931,13.2566406 L238.996139,15.1375 L242.998069,15.1375 L243.003861,13.2566406 L244.584942,13.2566406 L241.005792,9.6296875 Z' transform='translate(-235 -8)'/%3E%3C/svg%3E%0A");
    }
    #hyper-search-input {
      background: ${
        isDarkMode ? "rgba(255, 255, 255, .1)" : "rgba(255, 255, 255, .5)"
      };
      border-radius: 5px;
      box-shadow: 0 0 0 3px ${shadowColor}, 0 1px 3px rgba(0, 0, 0, .1), 0 0 1px rgba(0, 0, 0, .1), 0 0 0 1px ${shadowColor};
      padding: 2px 6px 2px 26px !important;
      color: ${foregroundColor} !important;
      opacity: 1 !important;
      margin-right: 8px;
      flex-grow: 1;
    }
    #hyper-search-input:focus {
      background: ${
        isDarkMode ? "rgba(255, 255, 255, .3)" : "rgba(255, 255, 255, .65)"
      };
      box-shadow: ${
        isDarkMode
          ? "0 1px 3px rgba(0, 0, 0, .1), 0 0 1px rgba(0, 0, 0, .1)"
          : "0 0 0 3px " +
            shadowColorRing +
            ", 0 1px 3px rgba(0, 0, 0, .1), 0 0 1px rgba(0, 0, 0, 0), 0 0 0 1px " +
            shadowColorBorder +
            ""
      };
      opacity: 1 !important;
    }
    #hyper-search-input::-webkit-input-placeholder {
      color: ${
        isDarkMode ? "rgba(255, 255, 255, .4)" : "rgba(0, 0, 0, .3)"
      } !important;
    }
    .hyper-search-wrapper + .term_fit {
      height: calc(100% - 52px) !important;
    }

    // Override: hyper-tab-icons

    .tabs_title svg, .tab_tab svg {
      fill: ${foregroundColor} !important;
      opacity: ${isDarkMode ? ".3" : ".6"};
      shape-rendering: crispEdges;
    }
    .tabs_title svg {
      opacity: .8;
    }
    .tab_tab.tab_active svg {
      opacity: .8;
    }
    .tabs_title svg,
    .tab_textInner svg {
      margin-top: -2px;
    }
    .tabs_title svg + span,
    .tab_textInner svg + span {
      vertical-align: unset !important;
    }

    // Override: hyper-tabs-enhanced

    .tabs_title .tab_process:before,
    .tab_tab.tab_active .tab_process:before,
    .tab_tab:hover .tab_process:before {
      opacity: .8;
      background-color: ${foregroundColor} !important;
    }
    .tab_tab.tab_hasActivity .tab_process:before,
    .tab_tab.tab_hasActivity .tab_icon:before,
    .tab_tab.tab_hasActivity .tab_icon:hover {
      background-color: ${cursorColor} !important;
    }
    .tab_tab.tab_hasActivity .tab_text {
      color: ${cursorColor} !important;
    }
    .tab_tab:first-of-type {
      padding-left: 0 !important;
    }

    // Override: hyper-statusline

    .footer_footer {
      opacity: 1 !important;
      background: ${
        isDarkMode ? "rgba(0, 0, 0, .1)" : "rgba(0, 0, 0, .03)"
      } !important;
    }
    .footer_footer::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: -1px;
      height: 1px;
      display: ${borders ? "block" : "none"};
      background: ${
        isDarkMode ? "rgba(255, 255, 255, .1)" : "rgba(0, 0, 0, .075)"
      };
    }
    .footer_group {
      color: ${foregroundColor} !important;
    }
    .footer_footer .item_icon::before {
      background: ${foregroundColor} !important;
      opacity: .8;
    }
    .footer_footer .item_dirty::before,
    .footer_footer .item_ahead::before {
      background: ${cursorColor} !important;
      opacity: 1;
    }
    .footer_footer .item_dirty,
    .footer_footer .item_ahead {
      color: ${cursorColor} !important;
    }
  `
  };
};

function hexOpacity(val: number) {
  const rounded = Math.round(val * 100) / 100;
  const alpha = Math.round(rounded * 255);
  const hex = (alpha + 0x10000)
    .toString(16)
    .substr(-2)
    .toUpperCase();
  return hex;
}

export { onWindow, decorateConfig, decorateBrowserOptions };
