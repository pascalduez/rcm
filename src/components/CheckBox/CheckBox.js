// @flow

import * as React from 'react';
import classNames from 'classnames';

import styles from './CheckBox.css';

export type Props = {
  id?: string,
  name: string,
  value?: string,
  defaultChecked?: boolean,
  checked?: boolean,
  indeterminate?: boolean,
  children?: React.Node,
  inputProps?: Object,
  className?: string,
  classes?: { [key: string]: string },
  onChange?: (evt: SyntheticInputEvent<HTMLInputElement>) => void,
};

class CheckBox extends React.Component<Props, void> {
  inputRef: React.Ref<HTMLInputElement> = React.createRef();

  static defaultProps = {
    classes: {},
    indeterminate: false,
  };

  componentDidMount() {
    this.inputRef.current.indeterminate = this.props.indeterminate;
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.indeterminate !== this.props.indeterminate) {
      this.inputRef.current.indeterminate = this.props.indeterminate;
    }
  }

  classOf(name: string): string {
    return this.props.classes[name] || '';
  }

  render() {
    const {
      id,
      name,
      value,
      defaultChecked,
      checked,
      indeterminate,
      children,
      inputProps,
      className,
      classes,
      onChange,
      ...extraProps
    } = this.props;

    return (
      <div
        className={classNames(styles.root, className, this.classOf('root'))}
        {...extraProps}
      >
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          defaultChecked={defaultChecked}
          checked={checked}
          onChange={onChange}
          ref={this.inputRef}
          className={classNames(styles.trigger, this.classOf('input'))}
          {...inputProps}
        />
        <label htmlFor={id}>{children}</label>
        <svg className={styles.checkmark} />
        <svg className={styles.dash} />
      </div>
    );
  }
}

export default CheckBox;
