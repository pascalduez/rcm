// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Popper from './Popper';

storiesOf('Popper', module).add('Demo', () => (
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
));
