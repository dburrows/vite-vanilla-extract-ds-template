import { style } from '@vanilla-extract/css';
import { breakpoints } from '../theme/vars.css';

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  '@media': {
    [breakpoints.md]: {
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
    },
  },
});
