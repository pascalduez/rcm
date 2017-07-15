// @flow

declare type DOMHighResTimeStamp = number;

declare class DOMRectReadOnly {
  x: number,
  y: number,
  width: number,
  height: number,
  top: number,
  right: number,
  bottom: number,
  left: number,
  constructor(x: number, y: number, width: number, height: number): void,
  fromRect(rectangle?: { x?: number, y?: number, width?: number, height?: number }): DOMRect,
}

declare class DOMRect extends DOMRectReadOnly {
  constructor(x: number, y: number, width: number, height: number): void,
}

declare type IntersectionObserverEntry = {
  boundingClientRect: DOMRectReadOnly,
  intersectionRatio: number,
  intersectionRect: DOMRectReadOnly,
  isIntersecting: Boolean,
  rootBounds: DOMRectReadOnly,
  target: HTMLElement,
  time: DOMHighResTimeStamp,
};

declare type IntersectionObserverCallback = (
  entries: Array<IntersectionObserverEntry>,
  observer: IntersectionObserver,
) => any;

declare type IntersectionObserverOptions = {
  root?: Node | null,
  rootMargin?: string,
  threshold?: number | Array<number>,
};

declare class IntersectionObserver {
  constructor(
    callback: IntersectionObserverCallback,
    options: IntersectionObserverOptions
  ): void,
  observe(target: HTMLElement): void,
  unobserve(): void,
  takeRecords(): Array<IntersectionObserverEntry>,
  disconnect(): void,
}


declare type ResizeObserverEntry = {
  boundingClientRect: DOMRectReadOnly,
  intersectionRatio: number,
  intersectionRect: DOMRectReadOnly,
  isIntersecting: Boolean,
  rootBounds: DOMRectReadOnly,
  target: HTMLElement,
  time: DOMHighResTimeStamp,
};

declare type ResizeObserverCallback = (
  entries: Array<ResizeObserverEntry>,
  observer: ResizeObserver,
) => any;

declare type ResizeObserverOptions = {
  root?: Node | null,
  rootMargin?: string,
  threshold?: number | Array<number>,
};

declare class ResizeObserver {
  constructor(
    callback: ResizeObserverCallback,
    options: ResizeObserverOptions
  ): void,
  observe(target: HTMLElement): void,
  unobserve(): void,
  takeRecords(): Array<ResizeObserverEntry>,
  disconnect(): void,
}
