// @flow

import * as React from 'react';

export const getElementDisplayName = (element: React.Element<*>): string =>
  element.type.displayName ||
  // Function name.
  element.type.name ||
  // Function without a name.
  (typeof element.type === 'function' ? 'No Display Name' : element.type);
