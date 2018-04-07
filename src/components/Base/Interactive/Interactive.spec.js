// @flow

import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Interactive from './Interactive';

describe('<Interactive />', () => {
  describe('the `tagName` property', () => {
    it('should return the proper element when provided', () => {
      const wrapper = mount(<Interactive tagName="span">Do it</Interactive>);

      expect(wrapper.getDOMNode().tagName).toBe('SPAN');
    });

    it('should pass extraProps through', () => {
      const wrapper = shallow(
        <Interactive tagName="span" className="test">
          Do it
        </Interactive>
      );

      expect(wrapper).toHaveClassName('test');
    });

    it('should not pass the `Link` component properties', () => {
      const wrapper = mount(
        <Interactive tagName="span" to="/test" activeClassName="test">
          Do it
        </Interactive>
      );

      expect(wrapper.find('span')).not.toHaveProp('to');
      expect(wrapper.find('span')).not.toHaveProp('activeClassName');
    });

    it('should pass the `type` property', () => {
      const wrapper = mount(
        <Interactive tagName="button" type="button">
          Do it
        </Interactive>
      );

      expect(wrapper.find('button')).toHaveProp('type', 'button');
    });

    it('should pass the `href` property', () => {
      const wrapper = mount(
        <Interactive tagName="a" href="/test">
          Do it
        </Interactive>
      );

      expect(wrapper.find('a')).toHaveProp('href', '/test');
    });
  });

  describe('the `to` property', () => {
    it('should return a react-router `Link` component when provided', () => {
      const wrapper = mount(<Interactive to="/test">Do it</Interactive>);

      expect(wrapper.find('Link')).toExist();
      expect(wrapper).toHaveProp('to', '/test');
      expect(wrapper.getDOMNode().tagName).toBe('A');
    });

    it('should pass extraProps through', () => {
      const wrapper = shallow(
        <Interactive to="/test" className="test">
          Do it
        </Interactive>
      );

      expect(wrapper).toHaveClassName('test');
    });

    it('should pass the `activeClassName` property to `Link` elements', () => {
      const wrapper = mount(
        <Interactive to="/test" activeClassName="test">
          Do it
        </Interactive>
      );

      expect(wrapper.find('Link')).toHaveProp('activeClassName', 'test');
    });

    it('should not pass the other properties', () => {
      const wrapper = mount(
        <Interactive to="/test" href="/test" type="submit">
          Do it
        </Interactive>
      );

      expect(wrapper.find('Link')).not.toHaveProp('href');
      expect(wrapper.find('Link')).not.toHaveProp('type');
    });
  });

  describe('the `href` property', () => {
    it('should return an `a` element when provided', () => {
      const wrapper = mount(
        <Interactive href="/test" className="test">
          Do it
        </Interactive>
      );

      expect(wrapper.getDOMNode().tagName).toBe('A');
      expect(wrapper).toHaveProp('href', '/test');
    });

    it('should pass extraProps through', () => {
      const wrapper = shallow(
        <Interactive href="/test" className="test">
          Do it
        </Interactive>
      );

      expect(wrapper).toHaveClassName('test');
    });

    it('should not pass the other properties', () => {
      const wrapper = mount(
        <Interactive
          href="/test"
          to="/test"
          type="submit"
          activeClassName="test"
        >
          Do it
        </Interactive>
      );

      expect(wrapper.find('a')).not.toHaveProp('to');
      expect(wrapper.find('a')).not.toHaveProp('href');
      expect(wrapper.find('a')).not.toHaveProp('type');
      expect(wrapper.find('a')).not.toHaveProp('activeClassName');
    });
  });

  describe('default', () => {
    it('should return a `button` element when neither `to` or `href` are provided', () => {
      const wrapper = mount(<Interactive>Do it</Interactive>);

      expect(wrapper.getDOMNode().tagName).toBe('BUTTON');
    });

    it('should pass extraProps through', () => {
      const wrapper = shallow(
        <Interactive className="test">Do it</Interactive>
      );

      expect(wrapper).toHaveClassName('test');
    });

    it('should not pass the other properties', () => {
      const wrapper = mount(
        <Interactive activeClassName="test">Do it</Interactive>
      );

      expect(wrapper.find('button')).not.toHaveProp('to');
      expect(wrapper.find('button')).not.toHaveProp('href');
      expect(wrapper.find('button')).toHaveProp('type', undefined);
      expect(wrapper.find('button')).not.toHaveProp('activeClassName');
    });

    it('should pass the `type` property to `button` elements when set', () => {
      const wrapper = mount(<Interactive type="submit">Do it</Interactive>);

      expect(wrapper.find('button')).toHaveProp('type', 'submit');
    });
  });
});
