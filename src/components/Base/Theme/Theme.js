/* @flow */
/* eslint-disable react/sort-comp, react/no-unused-state */

import * as React from 'react';

export type Theme = 'light' | 'dark';

export type Props = {
  value: Theme,
  children: React.Node,
};

type State = {
  theme: Theme,
  switchTheme: () => void,
};

const { Provider, Consumer } = React.createContext();

class ThemeProvider extends React.Component<Props, State> {
  static defaultProps = {
    value: 'light',
  };

  switchTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  };

  state = {
    theme: this.props.value,
    switchTheme: this.switchTheme,
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { ThemeProvider, Consumer as ThemeConsumer };
