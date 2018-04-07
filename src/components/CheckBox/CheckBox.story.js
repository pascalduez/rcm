// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import CheckBox from './CheckBox';

storiesOf('CheckBox', module).add('Demo', () => (
  <React.Fragment>
    <CheckBox name="default">Just a label</CheckBox>
    <CheckBox name="defaultChecked" defaultChecked>
      Just a label
    </CheckBox>
    <CheckBox name="indeterminate" indeterminate>
      Just a label
    </CheckBox>
  </React.Fragment>
));
