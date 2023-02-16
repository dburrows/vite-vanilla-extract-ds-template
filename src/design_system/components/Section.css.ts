import { style, createTheme, createThemeContract } from '@vanilla-extract/css';
import vars from '../theme/vars.css';

const colours = createThemeContract({
  background: null,
  text: null,
});

const white = createTheme(colours, {
  text: vars.colours.primaryNavy,
  background: vars.colours.primaryWhite,
});

const neutralNavy = createTheme(colours, {
  text: vars.colours.primaryNavy,
  background: vars.colours.neutralNavy,
});

const neutralTeal = createTheme(colours, {
  text: vars.colours.primaryNavy,
  background: vars.colours.neutralTeal,
});

const sand = createTheme(colours, {
  text: vars.colours.primaryNavy,
  background: vars.colours.primarySand,
});

const grey = createTheme(colours, {
  text: vars.colours.primaryNavy,
  background: vars.colours.neutralGrey,
});

const navy = createTheme(colours, {
  text: vars.colours.primaryWhite,
  background: vars.colours.primaryNavy,
});

const background = createTheme(colours, {
  text: vars.colours.primaryWhite,
  background: 'none',
});

export const themes = {
  white,
  navy,
  sand,
  grey,
  neutralNavy,
  neutralTeal,
  background,
};

export const section = style({
  backgroundColor: colours.background,
  color: colours.text,
});
