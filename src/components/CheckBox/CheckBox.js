// @flow

import * as React from 'react';
import classNames from 'classnames';
import SrOnly from '../SrOnly';

import styles from './CheckBox.css';

type Variant = 'inline' | 'compact';

export type Props = {
  id?: string,
  name: string,
  value?: string,
  defaultChecked?: boolean,
  checked?: boolean,
  indeterminate: boolean,
  disabled?: boolean,
  readOnly?: boolean,
  children?: React.Node,
  inputProps?: Object,
  inputRef?: (node: React.Ref<HTMLInputElement>) => void,
  variant: Variant,
  className?: string,
  classes: { [key: string]: string },
  onChange?: (evt: SyntheticInputEvent<HTMLInputElement>) => void,
};

class CheckBox extends React.Component<Props, void> {
  inputRef: React.Ref<HTMLInputElement> = React.createRef();

  static defaultProps = {
    indeterminate: false,
    variant: 'inline',
    classes: {},
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
    const { classes } = this.props;
    return name in classes ? classes[name] : '';
  }

  render() {
    const {
      id,
      name,
      value,
      defaultChecked,
      checked,
      indeterminate,
      disabled,
      readOnly,
      children,
      inputProps,
      inputRef,
      variant,
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
          disabled={disabled}
          readOnly={readOnly}
          onChange={onChange}
          ref={this.inputRef}
          className={classNames(styles.trigger, this.classOf('input'))}
          {...inputProps}
        />
        <label htmlFor={id}>
          {variant === 'compact' ? <SrOnly>{children}</SrOnly> : children}
        </label>
        <svg className={styles.checkmark} />
        <svg className={styles.dash} />
      </div>
    );
  }
}

export default CheckBox;
