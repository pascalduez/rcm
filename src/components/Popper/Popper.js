// @flow

import React, { type Children } from 'react';
import PopperCtor from 'popper.js';

import styles from './Popper.css';

type Placement =
  | 'auto'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'auto-start'
  | 'top-start'
  | 'right-start'
  | 'bottom-start'
  | 'left-start'
  | 'auto-end'
  | 'top-end'
  | 'right-end'
  | 'bottom-end'
  | 'left-end';

export type Props = {
  placement?: Placement,
  eventsEnabled?: boolean,
  modifiers?: Object,
  children: Children,
};

type State = {
  data: {
    offsets: {
      popper: {
        top: number,
        left: number,
      },
    },
  },
};

class Popper extends React.Component {
  props: Props;
  trigger: HTMLElement;
  popover: HTMLElement;
  instance: Object;

  static defaultProps = {
    placement: 'auto',
    eventsEnabled: true,
    modifiers: {},
  };

  state: State = {
    data: {
      offsets: {
        popper: {
          top: 0,
          left: 0,
        },
      },
    },
  };

  componentDidMount() {
    const { placement, eventsEnabled } = this.props;

    const modifiers = {
      ...this.props.modifiers,
      applyStyle: { enabled: false },
    };

    const options = {
      placement,
      eventsEnabled,
      modifiers,
      // @TODO
      onUpdate: (data) => {
        this.setState({ data });
      },
    };

    this.instance = new PopperCtor(this.trigger, this.popover, options);

    this.instance.scheduleUpdate();
  }

  componentWillUnmount() {
    this.destroy();
  }

  update() {
    if (this.instance) {
      this.instance.update();
    }
  }

  destroy() {
    if (this.instance) {
      this.instance.destroy();
    }
  }

  renderStyles() {
    const { left, top } = this.state.data.offsets.popper;

    return {
      transform: `translate3d(${left}px, ${top}px, 0)`,
      position: 'absolute',
      top: 0,
      left: 0,
    };
  }

  render() {
    return (
      <div>
        <div
          ref={(node) => {
            this.trigger = node;
          }}
          className={styles.trigger}
        >
          Trigger
        </div>
        <div
          ref={(node) => {
            this.popover = node;
          }}
          style={this.renderStyles()}
          className={styles.popover}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Popper;
