/* @flow */
/* global window */

import * as React from 'react';
import { isElement } from '../../utils';

export type Props = {
  children: React.Element<*>,
};

type State = {
  entry: ?IntersectionObserverEntry,
};

class Resize extends React.Component<Props, State> {
  element: HTMLElement;
  observer: ResizeObserver;

  state = {
    entry: null,
  };

  componentDidMount() {
    if (!isElement(this.element)) return;

    this.observer = new window.ResizeObserver(([entry]) => {
      this.setState({ entry });
    });

    this.observer.observe(this.element);
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  render() {
    return React.cloneElement(this.props.children, {
      refCallback: node => {
        this.element = node;
      },
      entry: this.state.entry,
    });
  }
}

export default Resize;
