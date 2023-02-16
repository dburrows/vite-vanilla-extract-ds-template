import { style } from '@vanilla-extract/css';
import { breakpoints, sizes } from '../theme/vars.css';

export const grid = style({
  maxWidth: sizes.container,
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '1.25rem',
  '@media': {
    [breakpoints.tablet]: {
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      gap: '2.0625rem',
    },
    [breakpoints.desktop]: {
      gap: '2.5rem',
    },
  },
});
