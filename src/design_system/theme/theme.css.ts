import { createGlobalTheme } from '@vanilla-extract/css';

export const breakpoints = {
  initial: {},
  mobile: 'screen and (min-width: 390px)',
  tablet: 'screen and (min-width: 768px)',
  desktop: 'screen and (min-width: 1024px)',
  desktopLarge: 'screen and (min-width: 1440px)',
};

const fonts = {
  primary: "'Universal Sans', Arial, Helvetica, sans-serif",
};

const tokenColours = {
  white: '#ffffff',
  //Core
  navy500: '#192852',
  purple300: '#6935D3',
  teal300: '#19D3C5',
  green300: '#008065',

  //Neutral
  neutralTeal50: '#E7F9F7',
  neutralSand100: '#F6EFEA',
  neutralPurple100: '#F0EBFB',

  //States
  teal200: '#BAEAE7', //primary hover
  teal400: '#12948A', //primary active
  neutralTeal100: '#F2F9F7', //primary disabled
  purple400: '#4A2594', // secondary active
  purple200: '#DDCCFF', // secondary disabled
};

const colours = {
  none: 'none',
  inherit: 'inherit',
  currentColor: 'currentColor',
  white: tokenColours.white,
  primaryPurple: tokenColours.purple300,
  primaryNavy: tokenColours.navy500,
  primaryGreen: tokenColours.green300,
  neutralPurple: tokenColours.neutralPurple100,
  neutralSand: tokenColours.neutralSand100,
  neutralTeal: tokenColours.neutralTeal50,
  neutralTeal100: tokenColours.neutralTeal100,
  extendedTeal200: tokenColours.teal200,
  extendedTeal400: tokenColours.teal400,
  extendedPurple200: tokenColours.purple200,
  extendedPurple400: tokenColours.purple400,
};

export const vars = createGlobalTheme(':root', {
  fonts,
  colours,
  breakpoints,
});

export default vars;
