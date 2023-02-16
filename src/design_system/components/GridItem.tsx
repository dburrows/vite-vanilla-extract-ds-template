import React from 'react';
import { Box, BoxProps } from './Box';
import { generateGridItemDisplay } from '../theme/gridHelpers';

export const GridItem = ({
  gridColumn = { mobile: '2', tablet: '12' },
  children,
  ...restProps
}: BoxProps): JSX.Element => {
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
