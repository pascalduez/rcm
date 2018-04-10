// @flow

import * as React from 'react';
import classNames from 'classnames';
import camelCase from 'lodash/camelCase';

import styles from './Box.css';

type Spacing = 'xsmall' | 'small' | 'base' | 'medium' | 'large' | 'none';

type BoxSizing = 'border' | 'content' | 'padding';

type Position = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';

export type BackgroundColor =
  | 'white'
  | 'grey-lighter'
  | 'grey-light'
  | 'grey'
  | 'grey-dark'
  | 'grey-darker'
  | 'transparent';

export type HoverBackgroundColor = 'white' | 'success' | 'success-dark';

export type BorderColor =
  | 'white'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'grey'
  | 'grey-dark'
  | 'grey-darker'
  | 'transparent';

export type HoverBorderColor =
  | 'white'
  | 'success'
  | 'warning'
  | 'danger'
  | 'grey'
  | 'grey-dark'
  | 'grey-darker'
  | 'transparent';

export type Props = {
  boxSizing?: ?BoxSizing,
  margin?: ?Spacing,
  padding?: ?Spacing,
  marginTop?: ?Spacing,
  marginRight?: Spacing,
  marginBottom?: ?Spacing,
  marginLeft?: ?Spacing,
  marginX?: ?Spacing,
  marginY?: ?Spacing,
  paddingTop?: ?Spacing,
  paddingRight?: ?Spacing,
  paddingBottom?: ?Spacing,
  paddingLeft?: ?Spacing,
  paddingX?: ?Spacing,
  paddingY?: ?Spacing,
  placeItemsCenter?: boolean,
  position?: Position,
  separatorTop?: boolean,
  separatorRight?: boolean,
  separatorBottom?: boolean,
  separatorLeft?: boolean,
  backgroundColor?: ?BackgroundColor,
  hoverBackgroundColor?: ?HoverBackgroundColor,
  borderColor?: ?BorderColor,
  hoverBorderColor?: ?HoverBorderColor,
  hoverable?: boolean,
  interactive?: boolean,
  className?: string,
};

/**
 * Helper: box model styling component.
 */
export default function withBox(
  Comp: React.ComponentType<*>
): React.ComponentType<*> {
  function Box(props: Props) {
    const {
      boxSizing,
      margin,
      padding,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      marginX,
      marginY,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      paddingX,
      paddingY,
      placeItemsCenter,
      position,
      separatorTop,
      separatorRight,
      separatorBottom,
      separatorLeft,
      backgroundColor,
      hoverBackgroundColor,
      borderColor,
      hoverBorderColor,
      hoverable,
      interactive,
      className,
      ...extraProps
    } = props;

    const rootClasses = classNames(
      {
        [styles.borderBox]: boxSizing === 'border',
        [styles.contentBox]: boxSizing === 'content',
        [styles.paddingBox]: boxSizing === 'padding',
      },
      margin && styles[camelCase(`margin-${margin}`)],
      padding && styles[camelCase(`padding-${padding}`)],
      marginTop && styles[camelCase(`margin-top-${marginTop}`)],
      marginRight && styles[camelCase(`margin-right-${marginRight}`)],
      marginBottom && styles[camelCase(`margin-bottom-${marginBottom}`)],
      marginLeft && styles[camelCase(`margin-left-${marginLeft}`)],
      marginX && styles[camelCase(`margin-x-${marginX}`)],
      marginY && styles[camelCase(`margin-y-${marginY}`)],
      paddingTop && styles[camelCase(`padding-top-${paddingTop}`)],
      paddingRight && styles[camelCase(`padding-right-${paddingRight}`)],
      paddingBottom && styles[camelCase(`padding-bottom-${paddingBottom}`)],
      paddingLeft && styles[camelCase(`padding-left-${paddingLeft}`)],
      paddingX && styles[camelCase(`padding-x-${paddingX}`)],
      paddingY && styles[camelCase(`padding-y-${paddingY}`)],
      placeItemsCenter && styles.placeItemsCenter,
      position && styles[camelCase(`position-${position}`)],
      separatorTop && styles.separatorTop,
      separatorRight && styles.separatorRight,
      separatorBottom && styles.separatorBottom,
      separatorLeft && styles.separatorLeft,
      backgroundColor &&
        styles[camelCase(`background-color-${backgroundColor}`)],
      hoverBackgroundColor &&
        styles[camelCase(`hover-background-color-${hoverBackgroundColor}`)],
      borderColor && styles[camelCase(`border-color-${borderColor}`)],
      hoverBorderColor &&
        styles[camelCase(`hover-border-color-${hoverBorderColor}`)],
      hoverable && styles.hoverable,
      interactive && styles.interactive,
      className
    );

    return <Comp className={rootClasses} {...extraProps} />;
  }

  return Box;
}
