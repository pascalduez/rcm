// @flow

import * as React from 'react';

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

export default () => (
  <div style={{ padding: '1rem' }}>
    <Resize>
      <Dummy />
    </Resize>
  </div>
);
