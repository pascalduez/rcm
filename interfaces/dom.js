// @flow

declare type DOMHighResTimeStamp = number;

declare type IntersectionObserverEntry = {
  // Read only
  // Returns the bounds rectangle of the target element as a DOMRectReadOnly.
  // The bounds are computed as described in the documentation for Element.getBoundingClientRect().
  boundingClientRect: any,
  // Read only
  // Returns the ratio of the intersectionRect to the boundingClientRect.
  intersectionRatio: any,
  // Read only
  // Returns a DOMRectReadOnly representing the target's visible area.
  intersectionRect: any,
  // Read only
  // A Boolean value which is true if the target element intersects with the
  // intersection observer's root. If this is true, then, the IntersectionObserverEntry
  // describes a transition into a state of intersection; if it's false, then you
  // know the transition is from intersecting to not-intersecting.
  isIntersecting: Boolean,
  // Read only
  // Returns a DOMRectReadOnly for the intersection observer's root.
  rootBounds: any,
  // Read only
  // The Element whose intersection with the root changed.
  target: HTMLElement,
  // Read only
  // A DOMHighResTimeStamp indicating the time at which the intersection was
  // recorded, relative to the IntersectionObserver's time origin.
  time: DOMHighResTimeStamp,
};

declare type IntersectionObserverOptions = {
  root?: Node | null,
  rootMargin?: string,
  threshold?: number | Array<number>,
};

declare class IntersectionObserver {
  constructor(
    callback: (
      arr: Array<IntersectionObserverEntry>,
      options: IntersectionObserverOptions
    ) => any
  ): void,
  observe(target: Node): void,
  takeRecords(): Array<IntersectionObserverEntry>,
  disconnect(): void,
  unobserve(): void,
}
