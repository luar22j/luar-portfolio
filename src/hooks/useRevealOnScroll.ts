import { useEffect, useRef, useState } from "react";

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Reports whether the referenced element has entered the viewport.
 * The observer disconnects after the first intersection, so the reveal
 * happens once and nothing keeps observing afterwards.
 */
export const useRevealOnScroll = <T extends HTMLElement>({
  threshold = 0.2,
  rootMargin,
}: RevealOptions = {}) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};
