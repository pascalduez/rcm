// @flow

import React from 'react';
import { render } from 'enzyme';

import SrOnly from './SrOnly';

describe('<SrOnly />', () => {
  it('should render the proper default markup and classes', () => {
    const wrapper = render(<SrOnly>test</SrOnly>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the proper `xsm` breakpoint classes', () => {
    const wrapper = render(<SrOnly xsm>test</SrOnly>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the proper `sm` breakpoint classes', () => {
    const wrapper = render(<SrOnly sm>test</SrOnly>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the proper `md` breakpoint classes', () => {
    const wrapper = render(<SrOnly md>test</SrOnly>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the proper `lg` breakpoint classes', () => {
    const wrapper = render(<SrOnly lg>test</SrOnly>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the proper `xlg` breakpoint classes', () => {
    const wrapper = render(<SrOnly xlg>test</SrOnly>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the proper `xxlg` breakpoint classes', () => {
    const wrapper = render(<SrOnly xxlg>test</SrOnly>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the proper `wd` breakpoint classes', () => {
    const wrapper = render(<SrOnly wd>test</SrOnly>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the proper `xwd` breakpoint classes', () => {
    const wrapper = render(<SrOnly xwd>test</SrOnly>);

    expect(wrapper).toMatchSnapshot();
  });
});
