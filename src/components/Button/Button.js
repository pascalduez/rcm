// @flow

import * as React from 'react';
import classNames from 'classnames';

import styles from './Button.css';

export type Props = {
  type?: string,
  variant?: string,
  primary?: boolean,
  secondary?: boolean,
  ghost?: boolean,
  theme?: string,
  icon?: string,
  children?: React.Node,
  className?: string,
};

function Button(props: Props) {
  const {
    type,
    variant,
    primary,
    secondary,
    ghost,
    theme,
    icon,
    children,
    className,
    ...extraProps
  } = props;

  return (
    <button className={classNames(styles.root, className)} {...extraProps}>
      {children}
    </button>
  );
}

export default Button;
