// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import CheckGroup from './CheckGroup';

storiesOf('CheckGroup', module).add('Demo', () => (
  <CheckGroup checkboxes={['one', 'two', 'three']} />
));
