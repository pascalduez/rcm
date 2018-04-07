// @flow

import * as React from 'react';

import withFlex, { type Props as InjectedProps } from './withFlex';

export type Props = {
  tagName: string,
  className?: string,
  children?: React.Node,
} & InjectedProps;

function Flex({ tagName = 'div', children, ...extraProps }: Props) {
  return React.createElement(tagName, extraProps, children);
}

const Typed = withFlex(Flex);

Flex.displayName = 'Flex';
Typed.displayName = 'Flex';

export default Typed;
