import React from 'react';
import classnames from 'classnames';
import { Box, BoxProps } from './Box';
import * as styles from './Section.css';

export type SectionProps = BoxProps & {
  as?: React.ElementType;
  theme?: keyof typeof styles.themes;
};

export const Section = ({
  as = 'section',
  theme = 'white',
  display = 'block',
  width = 'full',
  overflow = 'visible',
  py = {
    initial: 12,
    md: 24,
  },
  px = {
    initial: 4,
    md: 6,
  },
  children,
  ...restProps
}: SectionProps): JSX.Element => {
  return (
    <Box
      as={as}
      px={px}
      py={py}
      display={display}
      width={width}
      overflow={overflow}
      className={classnames(styles.section, styles.themes[theme])}
      {...restProps}
    >
      {children}
    </Box>
  );
};
