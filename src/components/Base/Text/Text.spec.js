// @flow

import * as React from 'react';
import { render } from 'enzyme';

import Text from './Text';

describe('<Text />', () => {
  it('should render the proper default markup and classes', () => {
    const wrapper = render(<Text>Just a text</Text>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the proper markup following the `tagName` property', () => {
    const wrapper = render(<Text tagName="h1">Just a text</Text>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should add the proper classes based on props', () => {
    const wrapper = render(
      <Text
        size="big"
        weight="bold"
        color="green"
        align="end"
        transform="capitalize"
      >
        Just a text
      </Text>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should pass extra props through', () => {
    const wrapper = render(
      <Text style={{ display: 'block' }}>Just a text</Text>
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('the `component` property', () => {
    it('should inject classes to passed elements', () => {
      const wrapper = render(
        <Text size="bigger" weight="bold" component={<div>Just a text</div>} />
      );

      expect(wrapper).toMatchSnapshot();
    });

    it('should preserve elements own classes', () => {
      const wrapper = render(
        <Text
          size="bigger"
          weight="bold"
          component={<div className="test">Just a text</div>}
        />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
