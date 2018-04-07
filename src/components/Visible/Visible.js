/* @flow */
/* global window */

import * as React from 'react';
import { canUseDOM, isElement } from '../../utils';

export type Props = {
  children: React.Element<*>,
};

type State = {
  visible: boolean,
};

class Visible extends React.Component<Props, State> {
  element: HTMLElement;
  observer: IntersectionObserver;

  state = {
    visible: !canUseDOM,
  };

  componentDidMount() {
    if (!isElement(this.element)) return;

    this.observer = new window.IntersectionObserver(
      ([entry]) => {
        const visible = entry.intersectionRatio === 1;

        if (this.state.visible !== visible) {
          this.setState({ visible });
        }
      },
      {
        threshold: 1.0,
      }
    );

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
      visible: this.state.visible,
    });
  }
}

export default Visible;
