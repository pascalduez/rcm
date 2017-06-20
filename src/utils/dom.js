/* @flow */
/* global window */

export const canUseDOM: boolean = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const isDOMNode = (object: any): boolean =>
  object &&
  typeof object.nodeType === 'number' &&
  typeof object.nodeName === 'string';

export const isElement = (object: any): boolean =>
  isDOMNode(object) && object.nodeType > 0;
