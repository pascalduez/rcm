// @flow

import * as React from 'react';
import { render } from 'enzyme';

import Base from './Base';

describe('<Base />', () => {
  it('should render the proper default markup and classes', () => {
    const wrapper = render(<Base />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should pass extra props through', () => {
    const wrapper = render(
      <Base style={{ display: 'block' }}>Just a text</Base>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
