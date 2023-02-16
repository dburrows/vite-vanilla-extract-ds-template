import React from 'react';
import { Box, BoxProps } from './Box';
import * as styles from './Grid.css';

export type GridProps = BoxProps;

export const Grid = ({
  columnGap,
  rowGap,
  children,
  ...restProps
}: GridProps): JSX.Element => (
  <Box className={styles.grid} {...restProps}>
    {children}
  </Box>
);
