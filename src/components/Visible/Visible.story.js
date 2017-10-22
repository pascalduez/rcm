// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Visible from './Visible';

function Dummy({
  refCallback,
  visible,
}: {
  refCallback?: (node: HTMLElement) => void,
  visible?: boolean,
}) {
  return <p ref={refCallback}>{visible ? 'YES' : 'NO'}</p>;
}

storiesOf('Visible', module).add('Demo', () => (
  <div style={{ minHeight: '200vh' }}>
    <Visible>
      <Dummy />
    </Visible>
  </div>
));
