// @flow

import * as React from 'react';
import { render, shallow } from 'enzyme';
import cases from 'jest-in-case';

import withBox from './withBox';
import styles from './Box.css';

const Wrapped = withBox(props => <div {...props} />);

describe('withBox()', () => {
  it('should render the proper default markup and classes', () => {
    const wrapper = render(<Wrapped />);

    expect(wrapper).toMatchSnapshot();
  });

  cases(
    'should add the proper `boxSizing` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped boxSizing={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'border', className: styles.borderBox },
      { name: 'content', className: styles.contentBox },
      { name: 'padding', className: styles.paddingBox },
    ]
  );

  /**
   *
   * margin
   *
   */
  cases(
    'should add the proper `margin` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped margin={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'none', className: styles.marginNone },
      { name: 'xsmall', className: styles.marginXsmall },
      { name: 'small', className: styles.marginSmall },
      { name: 'base', className: styles.marginBase },
      { name: 'medium', className: styles.marginMedium },
      { name: 'large', className: styles.marginLarge },
    ]
  );

  cases(
    'should add the proper `marginTop` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped marginTop={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'none', className: styles.marginTopNone },
      { name: 'xsmall', className: styles.marginTopXsmall },
      { name: 'small', className: styles.marginTopSmall },
      { name: 'base', className: styles.marginTopBase },
      { name: 'medium', className: styles.marginTopMedium },
      { name: 'large', className: styles.marginTopLarge },
    ]
  );

  cases(
    'should add the proper `marginRight` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped marginRight={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'none', className: styles.marginRightNone },
      { name: 'xsmall', className: styles.marginRightXsmall },
      { name: 'small', className: styles.marginRightSmall },
      { name: 'base', className: styles.marginRightBase },
      { name: 'medium', className: styles.marginRightMedium },
      { name: 'large', className: styles.marginRightLarge },
    ]
  );

  cases(
    'should add the proper `marginBottom` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped marginBottom={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'none', className: styles.marginBottomNone },
      { name: 'xsmall', className: styles.marginBottomXsmall },
      { name: 'small', className: styles.marginBottomSmall },
      { name: 'base', className: styles.marginBottomBase },
      { name: 'medium', className: styles.marginBottomMedium },
      { name: 'large', className: styles.marginBottomLarge },
    ]
  );

  cases(
    'should add the proper `marginLeft` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped marginLeft={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'none', className: styles.marginLeftNone },
      { name: 'xsmall', className: styles.marginLeftXsmall },
      { name: 'small', className: styles.marginLeftSmall },
      { name: 'base', className: styles.marginLeftBase },
      { name: 'medium', className: styles.marginLeftMedium },
      { name: 'large', className: styles.marginLeftLarge },
    ]
  );

  /**
   *
   * padding
   *
   */
  cases(
    'should add the proper `padding` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped padding={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'none', className: styles.paddingNone },
      { name: 'xsmall', className: styles.paddingXsmall },
      { name: 'small', className: styles.paddingSmall },
      { name: 'base', className: styles.paddingBase },
      { name: 'medium', className: styles.paddingMedium },
      { name: 'large', className: styles.paddingLarge },
    ]
  );

  cases(
    'should add the proper `paddingTop` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped paddingTop={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'none', className: styles.paddingTopNone },
      { name: 'xsmall', className: styles.paddingTopXsmall },
      { name: 'small', className: styles.paddingTopSmall },
      { name: 'base', className: styles.paddingTopBase },
      { name: 'medium', className: styles.paddingTopMedium },
      { name: 'large', className: styles.paddingTopLarge },
    ]
  );

  cases(
    'should add the proper `paddingRight` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped paddingRight={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'none', className: styles.paddingRightNone },
      { name: 'xsmall', className: styles.paddingRightXsmall },
      { name: 'small', className: styles.paddingRightSmall },
      { name: 'base', className: styles.paddingRightBase },
      { name: 'medium', className: styles.paddingRightMedium },
      { name: 'large', className: styles.paddingRightLarge },
    ]
  );

  cases(
    'should add the proper `paddingBottom` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped paddingBottom={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'none', className: styles.paddingBottomNone },
      { name: 'xsmall', className: styles.paddingBottomXsmall },
      { name: 'small', className: styles.paddingBottomSmall },
      { name: 'base', className: styles.paddingBottomBase },
      { name: 'medium', className: styles.paddingBottomMedium },
      { name: 'large', className: styles.paddingBottomLarge },
    ]
  );

  cases(
    'should add the proper `paddingLeft` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped paddingLeft={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'none', className: styles.paddingLeftNone },
      { name: 'xsmall', className: styles.paddingLeftXsmall },
      { name: 'small', className: styles.paddingLeftSmall },
      { name: 'base', className: styles.paddingLeftBase },
      { name: 'medium', className: styles.paddingLeftMedium },
      { name: 'large', className: styles.paddingLeftLarge },
    ]
  );

  /**
   *
   * marginX, marginY
   *
   */
  cases(
    'should add the proper `marginX` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped marginX={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'none', className: styles.marginXNone },
      { name: 'xsmall', className: styles.marginXXsmall },
      { name: 'small', className: styles.marginXSmall },
      { name: 'base', className: styles.marginXBase },
      { name: 'medium', className: styles.marginXMedium },
      { name: 'large', className: styles.marginXLarge },
    ]
  );

  cases(
    'should add the proper `marginY` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped marginY={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'none', className: styles.marginYNone },
      { name: 'xsmall', className: styles.marginYXsmall },
      { name: 'small', className: styles.marginYSmall },
      { name: 'base', className: styles.marginYBase },
      { name: 'medium', className: styles.marginYMedium },
      { name: 'large', className: styles.marginYLarge },
    ]
  );

  /**
   *
   * paddingX, paddingY
   *
   */
  cases(
    'should add the proper `paddingX` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped paddingX={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'none', className: styles.paddingXNone },
      { name: 'xsmall', className: styles.paddingXXsmall },
      { name: 'small', className: styles.paddingXSmall },
      { name: 'base', className: styles.paddingXBase },
      { name: 'medium', className: styles.paddingXMedium },
      { name: 'large', className: styles.paddingXLarge },
    ]
  );

  cases(
    'should add the proper `paddingY` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped paddingY={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'none', className: styles.paddingYNone },
      { name: 'xsmall', className: styles.paddingYXsmall },
      { name: 'small', className: styles.paddingYSmall },
      { name: 'base', className: styles.paddingYBase },
      { name: 'medium', className: styles.paddingYMedium },
      { name: 'large', className: styles.paddingYLarge },
    ]
  );

  describe('the `placeItemsCenter` property', () => {
    it('should add the proper classes', () => {
      const wrapper = shallow(<Wrapped placeItemsCenter />);

      expect(wrapper).toHaveClassName(styles.placeItemsCenter);
    });
  });

  cases(
    'should add the proper `position` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped position={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'static', className: styles.positionStatic },
      { name: 'relative', className: styles.positionRelative },
      { name: 'absolute', className: styles.positionAbsolute },
      { name: 'fixed', className: styles.positionFixed },
      { name: 'sticky', className: styles.positionSticky },
    ]
  );

  cases(
    'should add the proper `backgroundColor` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped backgroundColor={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'white', className: styles.backgroundColorWhite },
      { name: 'grey-lighter', className: styles.backgroundColorGreyLighter },
      { name: 'greyLight', className: styles.backgroundColorGreyLight },
      { name: 'grey', className: styles.backgroundColorGrey },
      { name: 'grey-dark', className: styles.backgroundColorGreyDark },
      { name: 'grey-darker', className: styles.backgroundColorGreyDarker },
      { name: 'transparent', className: styles.backgroundColorTransparent },
    ]
  );

  cases(
    'should add the proper `hoverBackgroundColor` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped hoverBackgroundColor={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'white', className: styles.hoverBackgroundColorWhite },
      { name: 'success', className: styles.hoverBackgroundColorSuccess },
      {
        name: 'success-dark',
        className: styles.hoverBackgroundColorSuccessDark,
      },
    ]
  );

  cases(
    'should add the proper `borderColor` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped borderColor={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'white', className: styles.borderColorWhite },
      { name: 'info', className: styles.borderColorInfo },
      { name: 'success', className: styles.borderColorSuccess },
      { name: 'warning', className: styles.borderColorWarning },
      { name: 'danger', className: styles.borderColorDanger },
      { name: 'grey', className: styles.borderColorGrey },
      { name: 'grey-dark', className: styles.borderColorGreyDark },
      { name: 'grey-darker', className: styles.borderColorGreyDarker },
      { name: 'transparent', className: styles.borderColorTransparent },
    ]
  );

  cases(
    'should add the proper `hoverBorderColor` classNames',
    ({ name, className }) => {
      const wrapper = shallow(<Wrapped hoverBorderColor={name} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      { name: 'white', className: styles.hoverBorderColorWhite },
      { name: 'info', className: styles.hoverBorderColorInfo },
      { name: 'success', className: styles.hoverBorderColorSuccess },
      { name: 'warning', className: styles.hoverBorderColorWarning },
      { name: 'danger', className: styles.hoverBorderColorDanger },
      { name: 'grey', className: styles.hoverBorderColorGrey },
      { name: 'grey-dark', className: styles.hoverBorderColorGreyDark },
      { name: 'grey-darker', className: styles.hoverBorderColorGreyDarker },
      { name: 'transparent', className: styles.hoverBorderColorTransparent },
    ]
  );

  cases(
    'should add the proper `separator` classNames',
    ({ name, className, ...props }) => {
      const wrapper = shallow(<Wrapped {...props} />);

      expect(wrapper).toHaveClassName(className);
    },
    [
      {
        name: 'separatorTop',
        separatorTop: true,
        className: styles.separatorTop,
      },
      {
        name: 'separatorRight',
        separatorRight: true,
        className: styles.separatorRight,
      },
      {
        name: 'separatorBottom',
        separatorBottom: true,
        className: styles.separatorBottom,
      },
      {
        name: 'separatorLeft',
        separatorLeft: true,
        className: styles.separatorLeft,
      },
    ]
  );

  describe('the `hoverable` property', () => {
    it('should add the proper classes', () => {
      const wrapper = shallow(<Wrapped hoverable />);

      expect(wrapper).toHaveClassName(styles.hoverable);
    });
  });

  describe('the `interactive` property', () => {
    it('should add the proper classes', () => {
      const wrapper = shallow(<Wrapped interactive />);

      expect(wrapper).toHaveClassName(styles.interactive);
      expect(wrapper).toHaveClassName(styles.hoverable);
    });
  });
});
