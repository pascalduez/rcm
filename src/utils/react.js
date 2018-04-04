// @flow

import type { Element } from 'react';

export const getElementDisplayName = (element: Element<*>): string =>
  element.type.displayName ||
  // Function name.
  element.type.name ||
  // Function without a name.
  (typeof element.type === 'function' ? 'No Display Name' : element.type);
