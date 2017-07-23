/* @flow */

import React, { type Children } from 'react';
import classNames from 'classnames';

import styles from './Hide.css';

export type Props = {
  tagName?: string,
  component?: React$Element<*>,
  children: Children,
  className?: string,
  xsm?: boolean,
  sm?: boolean,
  md?: boolean,
  lg?: boolean,
  xlg?: boolean,
  wd?: boolean,
  xwd?: boolean,
  xxwd?: boolean,
};

function Hide({
  tagName = 'span',
  component,
  children,
  className,
  xsm,
  sm,
  md,
  lg,
  xlg,
  wd,
  xwd,
  xxwd,
  ...extraProps
}: Props) {
  const rootClasses = classNames(
    {
      [styles.xsm]: xsm,
      [styles.sm]: sm,
      [styles.md]: md,
      [styles.lg]: lg,
      [styles.xlg]: xlg,
      [styles.wd]: wd,
      [styles.xwd]: xwd,
      [styles.xxwd]: xxwd,
    },
    className
  );

  if (component && React.isValidElement(component)) {
    return React.cloneElement(component, {
      className: rootClasses,
      ...extraProps,
    });
  }

  return React.createElement(
    tagName,
    { className: rootClasses, ...extraProps },
    children
  );
}

export default Hide;
