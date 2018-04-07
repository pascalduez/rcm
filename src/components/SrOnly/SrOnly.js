// @flow

import * as React from 'react';
import classNames from 'classnames';

import styles from './SrOnly.css';

export type Props = {
  xsm?: boolean,
  sm?: boolean,
  md?: boolean,
  lg?: boolean,
  xlg?: boolean,
  xxlg?: boolean,
  wd?: boolean,
  xwd?: boolean,
  tagName?: string,
  className?: string,
  children: React.Node,
};

function SrOnly(props: Props) {
  const {
    xsm,
    sm,
    md,
    lg,
    xlg,
    xxlg,
    wd,
    xwd,
    tagName = 'span',
    className,
    children,
    ...extraProps
  } = props;

  const hasBreapoint = Object.values(props).some(val => val === true);

  const rootClasses = classNames(
    {
      [styles.all]: !hasBreapoint,
      [styles.xsm]: xsm,
      [styles.sm]: sm,
      [styles.md]: md,
      [styles.lg]: lg,
      [styles.xlg]: xlg,
      [styles.xxlg]: xxlg,
      [styles.wd]: wd,
      [styles.xwd]: xwd,
    },
    className
  );

  return React.createElement(
    tagName,
    { className: rootClasses, ...extraProps },
    children
  );
}

export default SrOnly;
