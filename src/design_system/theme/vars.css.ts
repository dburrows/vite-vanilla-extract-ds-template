import { createGlobalTheme } from '@vanilla-extract/css';
import { generateGridItemColumns } from './gridHelpers';

export const breakpoints = {
  initial: {},
  xs: 'screen and (min-width: 320px)',
  sm: 'screen and (min-width: 480px)',
  md: 'screen and (min-width: 768px)',
  lg: 'screen and (min-width: 1024px)',
  xl: 'screen and (min-width: 1280px)',
};

/*
https://huemint.com/website-magazine/#palette=fdffff-76d3f4-0d0f0e-f19120

white #fdffff
lightblue #76d3f4
black #0d0f0e - text
grey #5a5552 - accent

combos

white background / black text
blue background / black text
grey background / white text
*/

/*
APP

https://huemint.com/bootstrap-plus/#palette=cbdfdf-ffffff-101314-0d4759-3d7385-439aa2-244a5e-217295-a9cacf

white:      #ffffff,
light:      #cbdfdf,
dark:       #101314,
primary:    #0d4759,
secondary:  #3d7385,
info:       #439aa2,
accent1:    #244a5e,
accent2:    #217295,
accent3:    #a9cacf,
success:    #13a456,
warning:    #e7c914,
danger:     #f4081e,


*/

const tokenColours = {
  purple50: '#EEEAF6',
  purple100: '#E1D7F6',
  purple200: '#DDCCFF',
  purple300: '#A586E5',
  purple400: '#4A2594',
  purple500: '#6935d3',
  purple600: '#4F289E',
  teal50: '#E7F9F7',
  teal100: '#F2F9F7',
  teal200: '#BAEAE7',
  teal300: '#19d3c5',
  teal400: '#12948A',
  teal500: '#4EA39B',
  navy50: '#E6E9F2',
  navy300: '#A3A9BA',
  navy600: '#192851',
  navy700: '#131E3D',
  sand: '#f6efea',
  orange: '#f08357',
  white: '#ffffff',
  grey50: '#f7f7f7',
  grey100: '#e3e3e3',
  red: '#ea5c5c',
  red50: '#FDECEF',
};

const colours = {
  none: 'none',
  inherit: 'inherit',
  currentColor: 'currentColor',
  white: tokenColours.white,

  // Primary
  primaryPurple: tokenColours.purple500,
  primaryTeal: tokenColours.teal300,
  primaryNavy: tokenColours.navy600,
  primarySand: tokenColours.sand,
  primaryOrange: tokenColours.orange,
  primaryWhite: tokenColours.white,

  // Neutral
  neutralPurple: tokenColours.purple50,
  neutralTeal: tokenColours.teal50,
  neutralNavy: tokenColours.navy50,
  neutralGrey: tokenColours.grey50,

  // Extended
  extendedPurple100: tokenColours.purple100,
  extendedPurple200: tokenColours.purple200,
  extendedPurple300: tokenColours.purple300,
  extendedPurple400: tokenColours.purple400,
  extendedPurple600: tokenColours.purple600,
  extendedTeal100: tokenColours.teal100,
  extendedTeal200: tokenColours.teal200,
  extendedTeal400: tokenColours.teal400,
  extendedTeal500: tokenColours.teal500,
  extendedNavy300: tokenColours.navy300,
  extendedNavy700: tokenColours.navy700,
  extendedGrey100: tokenColours.grey100,
  extendedRed50: tokenColours.red50,

  // Validation
  validationRed: tokenColours.red,
  validationGreen: tokenColours.teal500,
};

const space = {
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  8: '2rem', // 32px
  10: '2.5rem', // 40px
  12: '3rem', // 48px
  16: '4rem', // 64px
  24: '6rem', // 96px
  32: '8rem', // 128px
  48: '12rem', // 192px
  64: '16rem', // 256px
  96: '24rem', // 384px,
  auto: 'auto',
  unset: 'unset',
};

const radii = {
  5: '5px',
  10: '10px',
  20: '20px',
  40: '40px',
  60: '60px',
  full: '9999px',
};

const fontSizes = {
  inherit: 'inherit',
  1: '12px',
  2: '14px',
  3: '16px',
  4: '17px',
  5: '18px',
  6: '20px',
  7: '24px',
  8: '36px',
  9: '42px',
  10: '60px',
};

const lineHeights = {
  1: '16px',
  2: '18px',
  3: '20px',
  4: '26px',
  5: '32px',
  6: '36px',
  7: '42px',
  8: '60px',
};

const fontWeights = {
  regular: '450',
  bold: '700',
  heavy: '850',
};

const letterSpacings = {
  0: '0',
  1: '-.025em',
  2: '-.02em',
};

const fonts = {
  primary: "'Universal Sans', Arial, Helvetica, sans-serif",
};

export const sizes = {
  ...space,
  128: '32rem', // 512px
  160: '40rem', // 640px
  192: '48rem', // 768px
  220: '55rem', // 880px
  256: '64rem', // 1024px
  320: '80rem', // 1280px
  335: '83.75rem', // 1340px
  384: '96rem', // 1536px
  half: '50%',
  full: '100%',
  fitContent: 'fit-content',
};

export const gridColumns = generateGridItemColumns();

export const borderStyles = {
  none: 'none',
  solid: 'solid',
};

export const borderWidths = {
  1: 1,
  2: 2,
};

const vars = createGlobalTheme(':root', {
  fonts,
  colours,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  transitions: {
    ease: 'all .3s ease',
  },
  shadows: {
    link: `inset 0 -2px 0 ${tokenColours.teal300}`,
  },
});

export default vars;
