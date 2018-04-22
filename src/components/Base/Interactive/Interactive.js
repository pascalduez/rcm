/* @flow */

/* flowlint sketchy-null-string: off */

import * as React from 'react';
import compose from 'lodash/flowRight';
import { Link, type LocationShape } from 'react-router';

import { withText, type withTextProps } from '../Text';
import { withBox, type withBoxProps } from '../Box';
import { withFlex, type withFlexProps } from '../Flex';

type InjectedProps = withBoxProps & withFlexProps & withTextProps;

export type Props = {
  to?: string | LocationShape,
  href?: string,
  type?: string,
  activeClassName?: string,
  tagName?: ?string,
  refCallback?: (node: React.ElementRef<*>) => void,
} & InjectedProps;

/**
 * Helper component.
 * Returns the proper interactive (clickable) element depending on props.
 */
const Interactive = ({
  to,
  href,
  type,
  tagName,
  refCallback,
  activeClassName,
  ...extraProps
}: Props) => {
  if (tagName) {
    return React.createElement(tagName, {
      type,
      href,
      ref: refCallback,
      ...extraProps,
    });
  }

  if (to) {
    return React.createElement(Link, {
      to,
      activeClassName,
      ref: refCallback,
      ...extraProps,
    });
  }

  if (href) {
    return React.createElement('a', {
      href,
      ref: refCallback,
      ...extraProps,
    });
  }

  return React.createElement('button', {
    type,
    ref: refCallback,
    ...extraProps,
  });
};

const Typed = compose(withBox, withFlex, withText)(Interactive);

Interactive.displayName = 'Interactive';
Typed.displayName = 'Interactive';

export default Typed;
