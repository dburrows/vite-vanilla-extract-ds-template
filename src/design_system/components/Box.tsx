import React, { createElement, AllHTMLAttributes } from 'react';
import classNames, { Argument } from 'classnames';
import { sprinkles, Sprinkles } from '../theme/sprinkles.css';

type HtmlProperties = Omit<
  AllHTMLAttributes<HTMLElement>,
  'as' | 'className' | 'color' | 'width' | 'height'
>;
type InternalBoxProps = Sprinkles &
  HtmlProperties & { as?: React.ElementType; className?: Argument };

export const Box = React.forwardRef<HTMLElement, InternalBoxProps>(
  ({ as = 'div', className, ...props }: InternalBoxProps, ref): JSX.Element => {
    const sprinklesProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    for (const key in props) {
      if (sprinkles.properties.has(key as keyof Sprinkles)) {
        sprinklesProps[key] = props[key as keyof typeof props];
      } else {
        nativeProps[key] = props[key as keyof typeof props];
      }
    }

    const classes = sprinkles(sprinklesProps);

    return createElement(as, {
      className: classNames(classes, className),
      ...nativeProps,
      ref,
    });
  }
);

export type BoxProps = React.ComponentProps<typeof Box>;
