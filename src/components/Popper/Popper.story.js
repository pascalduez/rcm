// @flow

import * as React from 'react';

import Popper from './Popper';

export default () => (
  <div
    style={{
      minHeight: '200vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Popper>Just some text</Popper>
  </div>
);
