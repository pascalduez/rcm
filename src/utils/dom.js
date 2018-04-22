/* @flow */
/* global window */

export const canUseDOM = (): boolean =>
  !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );

export const isNode = (arg: ?Node): %checks =>
  arg && typeof arg.nodeType === 'number' && typeof arg.nodeName === 'string';

export const isElement = (arg: ?Node): %checks =>
  isNode(arg) && arg.nodeType === 1;

export const isTextNode = (arg: ?Node): %checks =>
  isNode(arg) && arg.nodeType === 3;

export const isEmptyTextNode = (arg: ?Node): %checks =>
  isTextNode(arg) && arg.nodeValue === '';

export const isEmptyElement = (arg: ?Node): %checks =>
  isElement(arg) &&
  (arg.childNodes.length === 0 ||
    (arg.childNodes.length === 1 &&
      (isEmptyTextNode(arg.firstChild) || isEmptyElement(arg.firstChild))));
