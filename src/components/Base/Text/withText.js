/* @flow */
/* eslint-disable react/no-unused-prop-types */

import * as React from 'react';
import classNames from 'classnames';

import styles from './Text.css';

type Size = 'small' | 'base' | 'big' | 'bigger';

type Weight = 'normal' | 'bold';

type Style = 'normal' | 'italic' | 'oblique';

type Align = 'start' | 'end' | 'center';

type Transform = 'capitalize' | 'lowercase' | 'uppercase';

type Decoration = 'underline' | 'overline' | 'line-through';

type Overflow = 'truncate' | 'break';

type Display = 'inline' | 'inline-block' | 'block';

type Select = 'auto' | 'text' | 'none' | 'contain' | 'all';

export type Theme = 'info' | 'success' | 'warning' | 'danger' | 'disabled';

export type Color =
  | 'inherit'
  | 'base'
  | 'light'
  | 'white'
  | 'grey-lighter'
  | 'grey-light'
  | 'grey'
  | 'grey-dark'
  | 'grey-darker'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
  | 'disabled';

export type HoverColor = 'inherit' | 'white' | 'blue';

type ThemeProps = {
  [key: Theme]: {
    color: Color,
    weight: Weight,
  },
};

const themesMap: ThemeProps = {
  info: {
    color: 'info',
    weight: 'bold',
  },
  success: {
    color: 'success',
    weight: 'bold',
  },
  warning: {
    color: 'warning',
    weight: 'bold',
  },
  danger: {
    color: 'danger',
    weight: 'bold',
  },
  disabled: {
    color: 'disabled',
    weight: 'bold',
  },
};

export type TextProps = {
  size?: ?Size,
  weight?: ?Weight,
  fontStyle?: ?Style,
  color?: ?Color,
  hoverColor?: ?HoverColor,
  align?: ?Align,
  transform?: ?Transform,
  decoration?: ?Decoration,
  theme?: ?Theme,
  overflow?: ?Overflow,
  display?: ?Display,
  select?: ?Select,
  className?: string,
};

/**
 * Helper: font and text styling component.
 */
export default function withText<Props: TextProps>(
  Component: React.ComponentType<Props>
): React.ComponentType<Props> {
  function Text(props: Props) {
    const themeProps = props.theme ? themesMap[props.theme] : {};
    const {
      size,
      weight,
      fontStyle,
      color,
      hoverColor,
      align,
      transform,
      decoration,
      overflow,
      display,
      select,
      theme,
      className,
      ...extraProps
    }: Props = { ...themeProps, ...props };

    const rootClasses = classNames(
      {
        [styles.fontSizeSmall]: size === 'small',
        [styles.fontSizeBase]: size === 'base',
        [styles.fontSizeBig]: size === 'big',
        [styles.fontSizeBigger]: size === 'bigger',

        [styles.fontWeightNormal]: weight === 'normal',
        [styles.fontWeightBold]: weight === 'bold',

        [styles.fontStyleNormal]: fontStyle === 'normal',
        [styles.fontStyleItalic]: fontStyle === 'italic',
        [styles.fontStyleOblique]: fontStyle === 'oblique',

        [styles.colorInherit]: color === 'inherit',
        [styles.colorBase]: color === 'base',
        [styles.colorLight]: color === 'light',
        [styles.colorWhite]: color === 'white',
        [styles.colorGreyLighter]: color === 'grey-lighter',
        [styles.colorGreyLight]: color === 'grey-light',
        [styles.colorGrey]: color === 'grey',
        [styles.colorGreyDark]: color === 'grey-dark',
        [styles.colorGreyDarker]: color === 'grey-darker',
        [styles.colorInfo]: color === 'info',
        [styles.colorSuccess]: color === 'success',
        [styles.colorWarning]: color === 'warning',
        [styles.colorDanger]: color === 'danger',
        [styles.colorDisabled]: color === 'disabled',

        [styles.hoverColorInherit]: hoverColor === 'inherit',
        [styles.hoverColorWhite]: hoverColor === 'white',

        [styles.textAlignStart]: align === 'start',
        [styles.textAlignEnd]: align === 'end',
        [styles.textAlignCenter]: align === 'center',

        [styles.textTransformCapitallize]: transform === 'capitalize',
        [styles.textTransformLowercase]: transform === 'lowercase',
        [styles.textTransformUppercase]: transform === 'uppercase',

        [styles.textDecorationOverline]: decoration === 'overline',
        [styles.textDecorationUnderline]: decoration === 'underline',
        [styles.textDecorationLineThrough]: decoration === 'line-through',

        [styles.truncate]: overflow === 'truncate',
        [styles.break]: overflow === 'break',

        [styles.displayInline]: display === 'inline',
        [styles.displayInlineBlock]: display === 'inline-block',
        [styles.displayBlock]: display === 'block',

        [styles.selectAuto]: select === 'auto',
        [styles.selectText]: select === 'text',
        [styles.selectNone]: select === 'none',
        [styles.selectContain]: select === 'contain',
        [styles.selectAll]: select === 'all',
      },
      className
    );

    return <Component className={rootClasses} {...extraProps} />;
  }

  return Text;
}
