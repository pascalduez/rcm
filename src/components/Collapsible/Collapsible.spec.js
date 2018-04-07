// @flow

import * as React from 'react';
import { render, mount } from 'enzyme';

import Collapsible from './Collapsible';

const TestComponent = (
  <Collapsible
    render={(getActionProps, getDrawerProps) => (
      <div>
        <button {...getActionProps()}>Test</button>
        <div {...getDrawerProps()}>Test text...</div>
      </div>
    )}
  />
);

describe('<Collapsible />', () => {
  it('should render the passed elements', () => {
    const wrapper = render(TestComponent);

    expect(wrapper).toMatchSnapshot();
  });

  it('should toggle the Drawer style', () => {
    const wrapper = mount(TestComponent);

    expect(wrapper.find('div').at(1)).toHaveStyle('display', 'block');

    wrapper.find('button').simulate('click');

    expect(wrapper.find('div').at(1)).toHaveStyle('display', 'none');
  });

  describe('the `collapsed` property', () => {
    it('should trigger a state update', () => {
      const wrapper = mount(TestComponent);

      expect(wrapper).toHaveState('collapsed', false);

      wrapper.setProps({ collapsed: true });

      expect(wrapper).toHaveState('collapsed', true);
    });
  });

  describe('the `getActionProps` helper', () => {
    it('should properly merge properties', () => {
      const spy = jest.fn();
      const wrapper = mount(
        <Collapsible
          render={getActionProps => (
            <button
              {...getActionProps({
                onClick: spy,
              })}
            />
          )}
        />
      );

      wrapper.find('button').simulate('click');

      expect(spy).toHaveBeenCalled();
    });
  });

  describe('the `getDrawerProps` helper', () => {
    it('should properly merge properties', () => {
      const wrapper = mount(
        <Collapsible
          render={(getActionProps, getDrawerProps) => (
            <div
              {...getDrawerProps({
                style: { minHeight: '200px' },
              })}
            >
              Test text...
            </div>
          )}
        />
      );

      expect(wrapper.find('div')).toHaveStyle('display', 'block');
      expect(wrapper.find('div')).toHaveStyle('minHeight', '200px');

      wrapper.setProps({ collapsed: true });

      expect(wrapper.find('div')).toHaveStyle('display', 'none');
      expect(wrapper.find('div')).toHaveStyle('minHeight', '200px');
    });
  });

  describe('the `isCollapsed` helper', () => {
    it('should properly reflect current state', () => {
      const spy = jest.fn(() => <div>Test text...</div>);
      const wrapper = mount(<Collapsible render={spy} />);

      expect(spy).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        false
      );

      wrapper.setProps({ collapsed: true });

      expect(spy).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        true
      );
    });
  });
});
