// @flow

import * as React from 'react';
import classNames from 'classnames';

import styles from './Flex.css';

export type Props = {
  flex?: boolean,
  flexInline?: boolean,
  flexRow?: boolean,
  flexRowReverse?: boolean,
  flexCol?: boolean,
  flexColReverse?: boolean,
  flexWrap?: boolean,
  flexNoWrap?: boolean,
  flexWrapReverse?: boolean,
  flexJustifyStart?: boolean,
  flexJustifyEnd?: boolean,
  flexJustifyCenter?: boolean,
  flexJustifyBetween?: boolean,
  flexJustifyAround?: boolean,
  flexAlignItemsStart?: boolean,
  flexAlignItemsEnd?: boolean,
  flexAlignItemsCenter?: boolean,
  flexAlignItemsStretch?: boolean,
  flexAlignItemsBaseline?: boolean,
  flexAlignContentStart?: boolean,
  flexAlignContentEnd?: boolean,
  flexAlignContentCenter?: boolean,
  flexAlignContentStretch?: boolean,
  flexAlignContentBetween?: boolean,
  flexAlignContentAround?: boolean,
  flexAlignSelfStart?: boolean,
  flexAlignSelfEnd?: boolean,
  flexAlignSelfCenter?: boolean,
  flexAlignSelfStretch?: boolean,
  flexAlignSelfBaseline?: boolean,
  flexAlignSelfLastBaseline?: boolean,
  flexAlignSelfAuto?: boolean,
  flexOrderFirst?: boolean,
  flexOrderLast?: boolean,
  flexOrderNone?: boolean,
  flexGrow1?: boolean,
  flexGrow2?: boolean,
  flexGrow3?: boolean,
  flexGrow4?: boolean,
  flexGrow5?: boolean,
  flexShrink0?: boolean,
  flexShrink1?: boolean,
  flexShrink2?: boolean,
  flexShrink3?: boolean,
  flexShrink4?: boolean,
  flexShrink5?: boolean,
  flexExpand?: boolean,
  flexExpandLeft?: boolean,
  flexExpandRight?: boolean,
  flexExpandTop?: boolean,
  flexExpandBottom?: boolean,
  flexBasisAuto?: boolean,
  flexBasis0?: boolean,
  flexInitial?: boolean,
  flexAuto?: boolean,
  flexNone?: boolean,
  className?: string,
};

/**
 * Helper: flexbox styling component.
 */
export default function withFlex(
  Comp: React.ComponentType<*>
): React.ComponentType<*> {
  function Flex(props: Props) {
    const {
      flex,
      flexInline,
      flexRow,
      flexRowReverse,
      flexCol,
      flexColReverse,
      flexWrap,
      flexNoWrap,
      flexWrapReverse,
      flexJustifyStart,
      flexJustifyEnd,
      flexJustifyCenter,
      flexJustifyBetween,
      flexJustifyAround,
      flexAlignItemsStart,
      flexAlignItemsEnd,
      flexAlignItemsCenter,
      flexAlignItemsStretch,
      flexAlignItemsBaseline,
      flexAlignContentStart,
      flexAlignContentEnd,
      flexAlignContentCenter,
      flexAlignContentStretch,
      flexAlignContentBetween,
      flexAlignContentAround,
      flexAlignSelfStart,
      flexAlignSelfEnd,
      flexAlignSelfCenter,
      flexAlignSelfStretch,
      flexAlignSelfBaseline,
      flexAlignSelfLastBaseline,
      flexAlignSelfAuto,
      flexOrderFirst,
      flexOrderLast,
      flexOrderNone,
      flexGrow1,
      flexGrow2,
      flexGrow3,
      flexGrow4,
      flexGrow5,
      flexShrink0,
      flexShrink1,
      flexShrink2,
      flexShrink3,
      flexShrink4,
      flexShrink5,
      flexExpand,
      flexExpandLeft,
      flexExpandRight,
      flexExpandTop,
      flexExpandBottom,
      flexBasisAuto,
      flexBasis0,
      flexInitial,
      flexAuto,
      flexNone,
      className,
      ...extraProps
    } = props;

    const rootClasses = classNames(
      {
        [styles.flex]: flex,
        [styles.flexInline]: flexInline,
        [styles.flexRow]: flexRow,
        [styles.flexRowReverse]: flexRowReverse,
        [styles.flexCol]: flexCol,
        [styles.flexColReverse]: flexColReverse,
        [styles.flexWrap]: flexWrap,
        [styles.flexNoWrap]: flexNoWrap,
        [styles.flexWrapReverse]: flexWrapReverse,
        [styles.flexJustifyStart]: flexJustifyStart,
        [styles.flexJustifyEnd]: flexJustifyEnd,
        [styles.flexJustifyCenter]: flexJustifyCenter,
        [styles.flexJustifyBetween]: flexJustifyBetween,
        [styles.flexJustifyAround]: flexJustifyAround,
        [styles.flexAlignItemsStart]: flexAlignItemsStart,
        [styles.flexAlignItemsEnd]: flexAlignItemsEnd,
        [styles.flexAlignItemsCenter]: flexAlignItemsCenter,
        [styles.flexAlignItemsStretch]: flexAlignItemsStretch,
        [styles.flexAlignItemsBaseline]: flexAlignItemsBaseline,
        [styles.flexAlignContentStart]: flexAlignContentStart,
        [styles.flexAlignContentEnd]: flexAlignContentEnd,
        [styles.flexAlignContentCenter]: flexAlignContentCenter,
        [styles.flexAlignContentStretch]: flexAlignContentStretch,
        [styles.flexAlignContentBetween]: flexAlignContentBetween,
        [styles.flexAlignContentAround]: flexAlignContentAround,
        [styles.flexAlignSelfStart]: flexAlignSelfStart,
        [styles.flexAlignSelfEnd]: flexAlignSelfEnd,
        [styles.flexAlignSelfCenter]: flexAlignSelfCenter,
        [styles.flexAlignSelfStretch]: flexAlignSelfStretch,
        [styles.flexAlignSelfBaseline]: flexAlignSelfBaseline,
        [styles.flexAlignSelfLastBaseline]: flexAlignSelfLastBaseline,
        [styles.flexAlignSelfAuto]: flexAlignSelfAuto,
        [styles.flexOrderFirst]: flexOrderFirst,
        [styles.flexOrderLast]: flexOrderLast,
        [styles.flexOrderNone]: flexOrderNone,
        [styles.flexGrow1]: flexGrow1,
        [styles.flexGrow2]: flexGrow2,
        [styles.flexGrow3]: flexGrow3,
        [styles.flexGrow4]: flexGrow4,
        [styles.flexGrow5]: flexGrow5,
        [styles.flexShrink0]: flexShrink0,
        [styles.flexShrink1]: flexShrink1,
        [styles.flexShrink2]: flexShrink2,
        [styles.flexShrink3]: flexShrink3,
        [styles.flexShrink4]: flexShrink4,
        [styles.flexShrink5]: flexShrink5,
        [styles.flexExpand]: flexExpand,
        [styles.flexExpandLeft]: flexExpandLeft,
        [styles.flexExpandRight]: flexExpandRight,
        [styles.flexExpandTop]: flexExpandTop,
        [styles.flexExpandBottom]: flexExpandBottom,
        [styles.flexBasisAuto]: flexBasisAuto,
        [styles.flexBasis0]: flexBasis0,
        [styles.flexInitial]: flexInitial,
        [styles.flexAuto]: flexAuto,
        [styles.flexNone]: flexNone,
      },
      className
    );

    return <Comp className={rootClasses} {...extraProps} />;
  }

  return Flex;
}
