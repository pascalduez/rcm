// @flow

import * as React from 'react';
import { canUseDOM } from '../../utils';

type State = {
  collapsed: boolean,
};

export type Props = {
  collapsed?: boolean,
  render: (
    getActionProps: (*) => {},
    getDrawerProps: (*) => {},
    isCollapsed: boolean
  ) => React.Element<*>,
};

let idcounter = 0;

class Collapsible extends React.Component<Props, State> {
  id: string;

  static defaultProps = {
    collapsed: false,
  };

  state = {
    collapsed: this.props.collapsed || false,
  };

  /**
   * Unique Id generation.
   * All SVGs on the page should have a unique ID.
   * Used for `title`, `desc` a11y.
   * Saddly not work with SSR.
   * See https://git.io/vdoUM
   */
  componentWillMount() {
    this.id = `collapsible-${(idcounter += 1)}`;
  }

  /**
   * Allow to update the `collapsed` state via props.
   */
  componentWillReceiveProps(nextProps: Props) {
    if (this.props.collapsed !== nextProps.collapsed) {
      this.setState({
        collapsed: nextProps.collapsed,
      });
    }
  }

  /**
   * Handle click events on the Action.
   */
  handleClick = (evt: SyntheticEvent<HTMLButtonElement>): void => {
    evt.preventDefault();

    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  };

  // $FlowFixMe Destructuring default params + Flow annotation breaks react-docgen.
  getActionProps = ({ style, onClick, ...rest } = {}) => {
    const handleClick = (evt: SyntheticEvent<HTMLButtonElement>) => {
      this.handleClick(evt);
      if (onClick) onClick(evt);
    };

    const localStyle = canUseDOM() ? {} : { display: 'none' };

    return {
      type: 'button',
      'aria-expanded': !this.state.collapsed,
      'aria-controls': this.id,
      children: this.state.collapsed ? 'Expand' : 'Collapse',
      style: { ...style, ...localStyle },
      onClick: handleClick,
      ...rest,
    };
  };

  // $FlowFixMe Destructuring default params + Flow annotation breaks react-docgen.
  getDrawerProps = ({ style, ...rest } = {}) => ({
    'aria-hidden': this.state.collapsed,
    id: this.id,
    style: {
      display: this.state.collapsed ? 'none' : 'block',
      ...style,
    },
    ...rest,
  });

  render() {
    return this.props.render(
      this.getActionProps,
      this.getDrawerProps,
      this.state.collapsed
    );
  }
}

export default Collapsible;
