import { useRef, useEffect, RefObject } from 'react';

interface IntersectionOptions {
  rootMargin?: string;
  thresold?: number | number[];
  onChange?: (visible: boolean) => void;
}

export const useIntersection = <T extends HTMLElement>({
  rootMargin,
  thresold,
  onChange,
}: IntersectionOptions): RefObject<T> => {
  const ref = useRef<T>(null);

  const options = {
    root: null,
    rootMargin: '0px',
    thresold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
  };

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      onChange && onChange(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref]);

  return ref;
};
