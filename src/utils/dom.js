/* @flow */
/* global window */

export const canUseDOM: boolean = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const isNode = (arg: any): boolean =>
  arg && typeof arg.nodeType === 'number' && typeof arg.nodeName === 'string';

export const isElement = (arg: any): boolean =>
  isNode(arg) && arg.nodeType === 1;

export const isTextNode = (arg: any): boolean =>
  isNode(arg) && arg.nodeType === 3;

export const isEmptyTextNode = (arg: any): boolean =>
  isTextNode(arg) && arg.nodeValue === '';

export const isEmptyElement = (arg: any): boolean =>
  isElement(arg) &&
  (arg.childNodes.length === 0 ||
    (arg.childNodes.length === 1 &&
      (isEmptyTextNode(arg.firstChild) || isEmptyElement(arg.firstChild))));
