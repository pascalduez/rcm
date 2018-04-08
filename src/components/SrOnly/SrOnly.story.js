// @flow

import * as React from 'react';

import Component from './SrOnly';

const SrOnly = props => <Component tagName="div" {...props} />;

export default () => (
  <div theme="grey" style={{ lineHeight: 2 }}>
    <SrOnly>Hidden at all breakpoints</SrOnly>
    <SrOnly xsm>Hidden at xsm breakpoint</SrOnly>
    <SrOnly sm>Hidden at sm breakpoint</SrOnly>
    <SrOnly md>Hidden at md breakpoint</SrOnly>
    <SrOnly lg>Hidden at lg breakpoint</SrOnly>
    <SrOnly xlg>Hidden at xlg breakpoint</SrOnly>
    <SrOnly xxlg>Hidden at xxlg breakpoint</SrOnly>
    <SrOnly wd>Hidden at wd breakpoint</SrOnly>
    <SrOnly xwd>Hidden at xwd breakpoint</SrOnly>
  </div>
);
