// @flow

import * as React from 'react';
import { flowRight as compose } from 'lodash-es';

import { withBox, type withBoxProps } from '../Box';
import { withFlex, type withFlexProps } from '../Flex';
import { withText, type withTextProps } from '../Text';

type InjectedProps = withBoxProps & withFlexProps & withTextProps;

export type Props = {
  tagName: string,
  className?: string,
  children?: React.Node,
  refCallback?: (node: React.ElementRef<*>) => {},
} & InjectedProps;

function Base({
  tagName = 'div',
  children,
  refCallback,
  ...extraProps
}: Props) {
  return React.createElement(
    tagName,
    { ref: refCallback, ...extraProps },
    children
  );
}

const Typed = compose(withBox, withFlex, withText)(Base);

Base.displayName = 'Base';
Typed.displayName = 'Base';

export default Typed;
