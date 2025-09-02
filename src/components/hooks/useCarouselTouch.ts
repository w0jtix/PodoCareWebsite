import { useRef, useEffect, useCallback } from "react";

interface UseCarouselTouchResult {
  offset: number;
  trackRef: React.RefObject<HTMLDivElement | null>;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchMove: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function useCarouselTouch(
  numberOfCards: number,
  cardWidth: number = 392,
  speed: number = 1
): UseCarouselTouchResult {
  const offsetRef = useRef(0);
  const hoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const velocityRef = useRef(0);
  const lastTouchTimeRef = useRef(0);
  const lastTouchXRef = useRef(0);
  const momentumActiveRef = useRef(false);
  const lastTimeRef = useRef(0);

  const trackRef = useRef<HTMLDivElement>(null);

  const animate = useCallback(
    (currentTime: number) => {
      const maxOffset = cardWidth * numberOfCards;

      const isAutoScrolling =
        !hoveredRef.current &&
        !isDraggingRef.current &&
        !momentumActiveRef.current;

      if (isAutoScrolling && currentTime - lastTimeRef.current >= 16) {
        offsetRef.current += speed;
        lastTimeRef.current = currentTime;
      }

      if (momentumActiveRef.current && !isDraggingRef.current) {
        offsetRef.current -= velocityRef.current * 16;
        velocityRef.current *= 0.95;

        if (Math.abs(velocityRef.current) < 0.01) {
          momentumActiveRef.current = false;
        }
      }

      if (offsetRef.current >= maxOffset) {
        offsetRef.current = 0;
      } else if (offsetRef.current < 0) {
        offsetRef.current += maxOffset;
      }

      if (trackRef.current) {
        const dragDelta = isDraggingRef.current ? dragOffsetRef.current : 0;
        trackRef.current.style.transform = `translate3d(-${
          offsetRef.current - dragDelta
        }px, 0, 0)`;
      }

      requestAnimationFrame(animate);
    },
    [cardWidth, numberOfCards, speed]
  );

  useEffect(() => {
    const id = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(id);
  }, [animate]);

  const onTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    hoveredRef.current = true;
    dragOffsetRef.current = 0;
    startXRef.current = e.touches[0].clientX;
    lastTouchXRef.current = startXRef.current;
    lastTouchTimeRef.current = performance.now();
    velocityRef.current = 0;
    momentumActiveRef.current = false;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || !trackRef.current) return;

    const currentX = e.touches[0].clientX;
    const delta = currentX - startXRef.current;

    const now = performance.now();
    const deltaTime = now - lastTouchTimeRef.current;
    const distance = currentX - lastTouchXRef.current;

    velocityRef.current = distance / deltaTime;
    dragOffsetRef.current = delta;

    trackRef.current.style.transform = `translate3d(${-(
      offsetRef.current - delta
    )}px, 0, 0)`;

    lastTouchXRef.current = currentX;
    lastTouchTimeRef.current = now;
  };

  const onTouchEnd = () => {
    isDraggingRef.current = false;
    hoveredRef.current = false;
    offsetRef.current -= dragOffsetRef.current;
    dragOffsetRef.current = 0;
    momentumActiveRef.current = true;
  };

  const onMouseEnter = () => {
    hoveredRef.current = true;
  };

  const onMouseLeave = () => {
    hoveredRef.current = false;
  };

  return {
    offset: offsetRef.current,
    trackRef,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onMouseEnter,
    onMouseLeave,
  };
}
