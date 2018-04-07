// @flow

import * as React from 'react';
import { render } from 'enzyme';

import Box from './Box';

describe('<Box />', () => {
  it('should render the proper default markup and classes', () => {
    const wrapper = render(<Box />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the proper markup following the `tagName` property', () => {
    const wrapper = render(<Box tagName="span" />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should add the proper classes based on props', () => {
    const wrapper = render(
      <Box
        boxSizing="padding"
        margin="small"
        marginLeft="medium"
        paddingTop="large"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should pass extra props through', () => {
    const wrapper = render(<Box style={{ display: 'block' }}>Just a text</Box>);

    expect(wrapper).toMatchSnapshot();
  });
});
