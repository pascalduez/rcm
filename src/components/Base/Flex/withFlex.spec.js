// @flow

import * as React from 'react';
import { render } from 'enzyme';

import withFlex from './withFlex';

const Wrapped = withFlex(props => <div {...props} />);

describe('withFlex()', () => {
  it('should render the proper default markup and classes', () => {
    const wrapper = render(<Wrapped />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should add the proper classes based on props', () => {
    const wrapper = render(
      <Wrapped
        flex
        flexInline
        flexRow
        flexRowReverse
        flexCol
        flexColReverse
        flexWrap
        flexNoWrap
        flexWrapReverse
        flexJustifyStart
        flexJustifyEnd
        flexJustifyCenter
        flexJustifyBetween
        flexJustifyAround
        flexAlignItemsStart
        flexAlignItemsEnd
        flexAlignItemsCenter
        flexAlignItemsStretch
        flexAlignItemsBaseline
        flexAlignContentStart
        flexAlignContentEnd
        flexAlignContentCenter
        flexAlignContentStretch
        flexAlignContentBetween
        flexAlignContentAround
        flexAlignSelfStart
        flexAlignSelfEnd
        flexAlignSelfCenter
        flexAlignSelfStretch
        flexAlignSelfBaseline
        flexAlignSelfLastBaseline
        flexAlignSelfAuto
        flexOrderFirst
        flexOrderLast
        flexOrderNone
        flexGrow1
        flexGrow2
        flexGrow3
        flexGrow4
        flexGrow5
        flexShrink0
        flexShrink1
        flexShrink2
        flexShrink3
        flexShrink4
        flexShrink5
        flexExpand
        flexExpandLeft
        flexExpandRight
        flexExpandTop
        flexExpandBottom
        flexBasisAuto
        flexBasis0
        flexInitial
        flexAuto
        flexNone
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should pass custom classes trough', () => {
    const wrapper = render(<Wrapped className="test" />);

    expect(wrapper).toMatchSnapshot();
  });
});
