// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Resize from './Resize';

type Props = {
  entry?: ?IntersectionObserverEntry,
  refCallback?: React.Ref<*>,
};

function Dummy({ entry, refCallback }: Props) {
  console.log(entry);

  return (
    <div ref={refCallback} style={{ backgroundColor: '#ccc' }}>
      Dummy
    </div>
  );
}

storiesOf('Resize', module).add('Demo', () => (
  <div style={{ padding: '1rem' }}>
    <Resize>
      <Dummy />
    </Resize>
  </div>
));
