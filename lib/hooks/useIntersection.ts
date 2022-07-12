import { useRef, useState, useEffect, RefObject } from 'react';

export const useIntersection = <T extends HTMLElement>(): [
  boolean,
  RefObject<T>
] => {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(true);

  const options = {
    root: null,
    rootMargin: '0px',
    thresold: [1],
  };

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setVisible(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref.current]);

  return [visible, ref];
};
