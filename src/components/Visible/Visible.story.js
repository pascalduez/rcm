// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Visible from './Visible';

function Dummy({
  refCallback,
  visible,
}: {
  refCallback?: React.Ref<*>,
  visible?: boolean,
}) {
  return <p ref={refCallback}>{visible === true ? 'YES' : 'NO'}</p>;
}

storiesOf('Visible', module).add('Demo', () => (
  <div style={{ minHeight: '200vh' }}>
    <Visible>
      <Dummy />
    </Visible>
  </div>
));
