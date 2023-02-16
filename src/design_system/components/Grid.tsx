import React from 'react';
import { Box, BoxProps } from './Box';
import * as styles from './Grid.css';

export type GridProps = BoxProps;

export const Grid = ({
  columnGap = { initial: 3, md: 5, lg: 12 },
  rowGap = { initial: 3, md: 5, lg: 12 },
  children,
  ...restProps
}: GridProps): JSX.Element => (
  <Box
    className={styles.grid}
    columnGap={columnGap}
    rowGap={rowGap}
    {...restProps}
  >
    {children}
  </Box>
);
