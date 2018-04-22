// @flow

import * as React from 'react';
import CheckBox from '../CheckBox';

type Props = {
  checkboxes: Array<string>,
};

type State = {
  selection: Set<string>,
  selectionDirty: boolean,
  selectionAll: boolean,
};

class CheckGroup extends React.Component<Props, State> {
  state = {
    selection: new Set(),
    selectionDirty: false,
    selectionAll: false,
  };

  isChecked = name => this.state.selection.has(name);

  handleChange = (evt: SyntheticInputEvent<HTMLInputElement>) => {
    const { name } = evt.currentTarget;

    this.setState(({ selection }) => {
      selection[this.isChecked(name) ? 'delete' : 'add'](name);

      return {
        selection: new Set(selection),
        selectionDirty:
          selection.size > 0 && selection.size < this.props.checkboxes.length,
        selectionAll: selection.size === this.props.checkboxes.length,
      };
    });
  };

  handleChangeAll = () => {
    this.setState(prevState => {
      if (prevState.selectionAll) {
        return {
          selection: new Set(),
          selectionDirty: false,
          selectionAll: false,
        };
      }

      return {
        selection: new Set(this.props.checkboxes),
        selectionDirty: false,
        selectionAll: true,
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <CheckBox
          name="all"
          checked={this.state.selectionAll}
          indeterminate={this.state.selectionDirty}
          onChange={this.handleChangeAll}
        />
        <hr />
        {this.props.checkboxes.map(key => (
          <CheckBox
            key={key}
            name={key}
            checked={this.isChecked(key)}
            onChange={this.handleChange}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default CheckGroup;
