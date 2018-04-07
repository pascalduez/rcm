// @flow

import * as React from 'react';
import { render } from 'enzyme';

import Flex from './Flex';

describe('<Flex />', () => {
  it('should render the proper default markup and classes', () => {
    const wrapper = render(<Flex />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the proper markup following the `tagName` property', () => {
    const wrapper = render(<Flex tagName="span" />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should add the proper classes based on props', () => {
    const wrapper = render(
      <Flex flex flexJustifyCenter flexAlignItemsCenter />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should pass custom classes trough', () => {
    const wrapper = render(<Flex className="test" />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should pass extra props through', () => {
    const wrapper = render(
      <Flex style={{ display: 'block' }}>Just a text</Flex>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
