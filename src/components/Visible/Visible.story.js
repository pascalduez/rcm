// @flow

import * as React from 'react';

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

export default () => (
  <div style={{ minHeight: '200vh' }}>
    <Visible>
      <Dummy />
    </Visible>
  </div>
);
