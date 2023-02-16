import { style, styleVariants } from '@vanilla-extract/css';
import vars from '../theme/vars.css';

export const button = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: '8px 18px',
  borderRadius: 90,
  borderStyle: 'solid',
  borderWidth: 2,
  outline: 'none',
  textAlign: 'center',
  fontFamily: vars.fonts.primary,
  letterSpacing: '-0.02em',
  fontWeight: 'bold',
  fontSize: 18,
  lineHeight: 1,
  cursor: 'pointer',
  selectors: {
    '&:focus::before': {
      content: '',
      position: 'absolute',
      top: '-6px',
      right: '-6px',
      bottom: '-6px',
      left: '-6px',
      border: `3px solid ${vars.colours.primaryNavy}`,
      borderRadius: 25,
    },
  },
});

export const as = styleVariants({
  a: {
    textDecoration: 'none',
  },
  button: {
    ':disabled': {
      opacity: 0.85,
      cursor: 'not-allowed',
    },
  },
});

export const variants = styleVariants({
  primary: {
    color: vars.colours.primaryNavy,
    backgroundColor: vars.colours.primaryTeal,
    borderColor: vars.colours.primaryTeal,
    selectors: {
      '&:hover': {
        backgroundColor: vars.colours.extendedTeal200,
        borderColor: vars.colours.extendedTeal200,
      },
      '&:active': {
        backgroundColor: vars.colours.extendedTeal400,
        borderColor: vars.colours.extendedTeal400,
        color: vars.colours.primaryWhite,
      },
      '&:disabled': {
        backgroundColor: vars.colours.extendedTeal100,
        borderColor: vars.colours.extendedTeal100,
        color: vars.colours.extendedNavy300,
      },
    },
  },
  secondary: {
    color: vars.colours.primaryPurple,
    backgroundColor: 'transparent',
    borderColor: vars.colours.primaryPurple,
    selectors: {
      '&:hover': {
        color: vars.colours.primaryWhite,
        backgroundColor: vars.colours.primaryPurple,
        borderColor: vars.colours.primaryPurple,
      },
      '&:active': {
        color: vars.colours.primaryWhite,
        backgroundColor: vars.colours.extendedPurple400,
        borderColor: vars.colours.extendedPurple400,
      },
      '&:disabled': {
        color: vars.colours.extendedPurple200,
        backgroundColor: 'transparent',
        borderColor: vars.colours.extendedPurple200,
      },
    },
  },
  tertiary: {
    color: vars.colours.primaryWhite,
    backgroundColor: 'transparent',
    borderColor: vars.colours.primaryWhite,
    selectors: {
      '&:hover': {
        color: vars.colours.primaryPurple,
        backgroundColor: vars.colours.primaryWhite,
        borderColor: vars.colours.primaryWhite,
      },
      '&:active': {
        color: vars.colours.primaryPurple,
        backgroundColor: vars.colours.neutralPurple,
        borderColor: vars.colours.neutralPurple,
      },
      '&:disabled': {
        color: vars.colours.extendedPurple300,
        backgroundColor: 'transparent',
        borderColor: vars.colours.extendedPurple300,
      },
    },
  },
});

// Apply these styles to each respective `ButtonIcon` instance
export const buttonIcon = style({
  // Button variant descendent selectors
  selectors: {
    // Primary
    [`${variants.primary} &`]: {
      stroke: vars.colours.primaryNavy,
    },
    [`${variants.primary}:active &`]: {
      stroke: vars.colours.primaryWhite,
    },
    [`${variants.primary}:disabled &`]: {
      stroke: vars.colours.extendedNavy300,
    },

    // Secondary
    [`${variants.secondary} &`]: {
      stroke: vars.colours.primaryPurple,
    },
    [`${variants.secondary}:disabled &`]: {
      stroke: vars.colours.extendedPurple200,
    },
    [`${variants.secondary}:not(:disabled):active &`]: {
      stroke: vars.colours.primaryWhite,
    },
    [`${variants.secondary}:not(:disabled):hover &`]: {
      stroke: vars.colours.primaryWhite,
    },

    // Tertiary
    [`${variants.tertiary}:not(:disabled) &`]: {
      stroke: vars.colours.primaryWhite,
    },
    [`${variants.tertiary}:disabled &`]: {
      stroke: vars.colours.extendedPurple300,
    },
    [`${variants.tertiary}:not(:disabled):active &`]: {
      stroke: vars.colours.primaryPurple,
    },
    [`${variants.tertiary}:not(:disabled):hover &`]: {
      stroke: vars.colours.primaryPurple,
    },
  },
});
