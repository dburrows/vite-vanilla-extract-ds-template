import React from 'react';
import classnames from 'classnames';
import { Box, BoxProps } from './Box';
import * as styles from './Button.css';

export type ButtonProps = BoxProps & {
  variant?: keyof typeof styles.variants;
  type?: 'button' | 'submit';
  external?: boolean;
};

export const Button = ({
  width = 'fitContent',
  variant = 'primary',
  type = 'button',
  onClick,
  disabled,
  href,
  external,
  children,
  ...restProps
}: ButtonProps): JSX.Element => {
  const Element = href ? 'a' : 'button';
  return (
    <Box
      as={Element}
      type={Element === 'button' ? type : undefined}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      disabled={disabled}
      onClick={onClick}
      width={width}
      className={classnames(styles.button, [
        styles.as[Element],
        styles.variants[variant],
      ])}
      {...restProps}
    >
      {children}
    </Box>
  );
};
