import React from 'react';
import { Box, BoxProps } from './Box';
import { generateGridItemDisplay } from '../theme/gridHelpers';

export const GridItem = ({
  gridColumn = { initial: '2', md: '12' },
  children,
  ...restProps
}: Omit<BoxProps, 'span'>): JSX.Element => {
  return (
    <Box
      gridColumn={gridColumn}
      display={generateGridItemDisplay(gridColumn)}
      {...restProps}
    >
      {children}
    </Box>
  );
};

export type GridItemVariants = React.ComponentProps<typeof GridItem>;
