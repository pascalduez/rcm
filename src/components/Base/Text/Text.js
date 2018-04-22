// @flow

import * as React from 'react';
import classNames from 'classnames';

import withText, { type TextProps } from './withText';

export type Props = {
  tagName: string,
  component?: ?React.Element<*>,
  className?: string,
  children?: React.Node,
} & TextProps;

function Text({
  tagName = 'span',
  component,
  className,
  children,
  ...extraProps
}: Props) {
  if (component && React.isValidElement(component)) {
    return React.cloneElement(component, {
      className: classNames(component.props.className, className),
      ...extraProps,
    });
  }

  return React.createElement(tagName, { className, ...extraProps }, children);
}

const Typed = withText(Text);

Text.displayName = 'Text';
Typed.displayName = 'Text';

export default Typed;
