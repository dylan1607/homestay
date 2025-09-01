import { useEffect, useState, useCallback } from "react";

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};

export const useObserver = (
  ref: React.RefObject<HTMLElement>,
  options?: IntersectionObserverInit
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (ref.current) {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      }
    },
    [ref]
  );

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(callback, options);
    obs.observe(ref.current);
    return () => {
      obs.disconnect();
    };
  }, [ref, callback, options]);

  return isIntersecting;
};
