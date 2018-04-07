// @flow

import * as React from 'react';

import withBox, { type Props as InjectedProps } from './withBox';

export type Props = {
  tagName: string,
  className?: string,
  children?: React.Node,
} & InjectedProps;

function Box({ tagName = 'div', children, ...extraProps }: Props) {
  return React.createElement(tagName, extraProps, children);
}

const Typed = withBox(Box);

Box.displayName = 'Box';
Typed.displayName = 'Box';

export default Typed;
