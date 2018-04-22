// @flow

import React from 'react';
import { render, shallow, mount } from 'enzyme';
import cases from 'jest-in-case';

import withText from './withText';
import styles from './Text.css';

const Wrapped = withText(props => <div {...props} />);

describe('withText()', () => {
  it('should render the proper default markup and classes', () => {
    const wrapper = render(<Wrapped />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should add the proper classes based on props', () => {
    const wrapper = render(
      <Wrapped
        size="big"
        weight="bold"
        color="white"
        align="end"
        transform="capitalize"
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  cases(
    'the `size` property',
    ({ name, className, ...extra }) => {
      const wrapper = shallow(<Wrapped {...extra} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      {
        name: 'should add the `small` classNames',
        size: 'small',
        className: styles.fontSizeSmall,
      },
      {
        name: 'should add the `base` classNames',
        size: 'base',
        className: styles.fontSizeBase,
      },
      {
        name: 'should add the `big` classNames',
        size: 'big',
        className: styles.fontSizeBig,
      },
      {
        name: 'should add the `bigger` classNames',
        size: 'bigger',
        className: styles.fontSizeBigger,
      },
    ]
  );

  cases(
    'the `weight` property',
    ({ name, className, ...extra }) => {
      const wrapper = shallow(<Wrapped {...extra} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      {
        name: 'should add the `normal` classNames',
        weight: 'normal',
        className: styles.fontWeightNormal,
      },
      {
        name: 'should add the `bold` classNames',
        weight: 'bold',
        className: styles.fontWeightBold,
      },
    ]
  );

  cases(
    'the `fontStyle` property',
    ({ name, className, ...extra }) => {
      const wrapper = shallow(<Wrapped {...extra} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      {
        name: 'should add the `normal` classNames',
        fontStyle: 'normal',
        className: styles.fontStyleNormal,
      },
      {
        name: 'should add the `italic` classNames',
        fontStyle: 'italic',
        className: styles.fontStyleItalic,
      },
      {
        name: 'should add the `oblique` classNames',
        fontStyle: 'oblique',
        className: styles.fontStyleOblique,
      },
    ]
  );

  cases(
    'the `color` property',
    ({ name, className, ...extra }) => {
      const wrapper = shallow(<Wrapped {...extra} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      {
        name: 'should add the `inherit` classNames',
        color: 'inherit',
        className: styles.colorInherit,
      },
      {
        name: 'should add the `base` classNames',
        color: 'base',
        className: styles.colorBase,
      },
      {
        name: 'should add the `light` classNames',
        color: 'light',
        className: styles.colorLight,
      },
      {
        name: 'should add the `white` classNames',
        color: 'white',
        className: styles.colorWhite,
      },
      {
        name: 'should add the `grey-lighter` classNames',
        color: 'grey-lighter',
        className: styles.colorGreyLighter,
      },
      {
        name: 'should add the `grey-light` classNames',
        color: 'grey-light',
        className: styles.colorGreyLight,
      },
      {
        name: 'should add the `grey` classNames',
        color: 'grey',
        className: styles.colorGrey,
      },
      {
        name: 'should add the `grey-dark` classNames',
        color: 'grey-dark',
        className: styles.colorGreyDark,
      },
      {
        name: 'should add the `grey-darker` classNames',
        color: 'grey-darker',
        className: styles.colorGreyDarker,
      },
      {
        name: 'should add the `info` classNames',
        color: 'info',
        className: styles.colorInfo,
      },
      {
        name: 'should add the `success` classNames',
        color: 'success',
        className: styles.colorSuccess,
      },
      {
        name: 'should add the `warning` classNames',
        color: 'warning',
        className: styles.colorWarning,
      },
      {
        name: 'should add the `danger` classNames',
        color: 'danger',
        className: styles.colorDanger,
      },
      {
        name: 'should add the `disabled` classNames',
        color: 'disabled',
        className: styles.colorDisabled,
      },
    ]
  );

  cases(
    'should add the proper `hoverColor` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped hoverColor={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'inherit', className: styles.hoverColorInherit },
      { name: 'white', className: styles.hoverColorWhite },
    ]
  );

  describe('the `align` property', () => {
    it('should add the `start` class', () => {
      const wrapper = mount(<Wrapped align="start" />);

      expect(wrapper.find('div')).toHaveClassName(styles.textAlignStart);
    });

    it('should add the `end` class', () => {
      const wrapper = mount(<Wrapped align="end" />);

      expect(wrapper.find('div')).toHaveClassName(styles.textAlignEnd);
    });

    it('should add the `center` class', () => {
      const wrapper = mount(<Wrapped align="center" />);

      expect(wrapper.find('div')).toHaveClassName(styles.textAlignCenter);
    });
  });

  describe('the `transform` property', () => {
    it('should add the `capitalize` class', () => {
      const wrapper = mount(<Wrapped transform="capitalize" />);

      expect(wrapper.find('div')).toHaveClassName(
        styles.textTransformCapitallize
      );
    });

    it('should add the `lowercase` class', () => {
      const wrapper = mount(<Wrapped transform="lowercase" />);

      expect(wrapper.find('div')).toHaveClassName(
        styles.textTransformLowercase
      );
    });

    it('should add the `uppercase` class', () => {
      const wrapper = mount(<Wrapped transform="uppercase" />);

      expect(wrapper.find('div')).toHaveClassName(
        styles.textTransformUppercase
      );
    });
  });

  describe('the `decoration` property', () => {
    it('should add the `overline` class', () => {
      const wrapper = mount(<Wrapped decoration="overline" />);

      expect(wrapper.find('div')).toHaveClassName(
        styles.textDecorationOverline
      );
    });

    it('should add the `underline` class', () => {
      const wrapper = mount(<Wrapped decoration="underline" />);

      expect(wrapper.find('div')).toHaveClassName(
        styles.textDecorationUnderline
      );
    });

    it('should add the `line-through` class', () => {
      const wrapper = mount(<Wrapped decoration="line-through" />);

      expect(wrapper.find('div')).toHaveClassName(
        styles.textDecorationLineThrough
      );
    });
  });

  describe('the `overflow` property', () => {
    it('should add the `truncate` class', () => {
      const wrapper = mount(<Wrapped overflow="truncate" />);

      expect(wrapper.find('div')).toHaveClassName(styles.truncate);
    });

    it('should add the `break` class', () => {
      const wrapper = mount(<Wrapped overflow="break" />);

      expect(wrapper.find('div')).toHaveClassName(styles.break);
    });
  });

  describe('the `display` property', () => {
    it('should add the `inline` class', () => {
      const wrapper = mount(<Wrapped display="inline" />);

      expect(wrapper.find('div')).toHaveClassName(styles.displayInline);
    });

    it('should add the `inline-block` class', () => {
      const wrapper = mount(<Wrapped display="inline-block" />);

      expect(wrapper.find('div')).toHaveClassName(styles.displayInlineBlock);
    });

    it('should add the `block` class', () => {
      const wrapper = mount(<Wrapped display="block" />);

      expect(wrapper.find('div')).toHaveClassName(styles.displayBlock);
    });
  });

  describe('the `select` property', () => {
    it('should add the `auto` class', () => {
      const wrapper = mount(<Wrapped select="auto" />);

      expect(wrapper.find('div')).toHaveClassName(styles.selectAuto);
    });

    it('should add the `text` class', () => {
      const wrapper = mount(<Wrapped select="text" />);

      expect(wrapper.find('div')).toHaveClassName(styles.selectText);
    });

    it('should add the `none` class', () => {
      const wrapper = mount(<Wrapped select="none" />);

      expect(wrapper.find('div')).toHaveClassName(styles.selectNone);
    });

    it('should add the `contain` class', () => {
      const wrapper = mount(<Wrapped select="contain" />);

      expect(wrapper.find('div')).toHaveClassName(styles.selectContain);
    });

    it('should add the `all` class', () => {
      const wrapper = mount(<Wrapped select="all" />);

      expect(wrapper.find('div')).toHaveClassName(styles.selectAll);
    });
  });

  describe('the `theme` property', () => {
    it('should add the `info` classes', () => {
      const wrapper = mount(<Wrapped theme="info" />);

      expect(wrapper.find('div')).toHaveClassName(styles.colorInfo);
      expect(wrapper.find('div')).toHaveClassName(styles.fontWeightBold);
    });

    it('should add the `success` classes', () => {
      const wrapper = mount(<Wrapped theme="success" />);

      expect(wrapper.find('div')).toHaveClassName(styles.colorSuccess);
      expect(wrapper.find('div')).toHaveClassName(styles.fontWeightBold);
    });

    it('should add the `warning` classes', () => {
      const wrapper = mount(<Wrapped theme="warning" />);

      expect(wrapper.find('div')).toHaveClassName(styles.colorWarning);
      expect(wrapper.find('div')).toHaveClassName(styles.fontWeightBold);
    });

    it('should add the `danger` classes', () => {
      const wrapper = mount(<Wrapped theme="danger" />);

      expect(wrapper.find('div')).toHaveClassName(styles.colorDanger);
      expect(wrapper.find('div')).toHaveClassName(styles.fontWeightBold);
    });

    it('should add the `disabled` classes', () => {
      const wrapper = mount(<Wrapped theme="disabled" />);

      expect(wrapper.find('div')).toHaveClassName(styles.colorDisabled);
      expect(wrapper.find('div')).toHaveClassName(styles.fontWeightBold);
    });
  });
});
