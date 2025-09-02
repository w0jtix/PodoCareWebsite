import { Picture } from "@/data/diseases";
import { useCallback, useState, useRef, useEffect } from "react";

export interface ImageCarouselProps {
  pictures: Picture[];
  currentIndex?: number;
  bottomTrackIndex?: number;
  maxVisible?: number;
  onPrev?: () => void;
  onNext?: () => void;
  onPictureClick?: (originalIndex: number) => void;
  onCurrentIndexChange?: (index: number) => void;
  onPictureSelect?: (picture: Picture) => void;
  showArrows?: boolean;
  standalone?: boolean;
  className?: string;
  arrowClassName?: string;
}

export function ImageCarousel({
  pictures,
  currentIndex: externalCurrentIndex,
  bottomTrackIndex: externalBottomTrackIndex,
  maxVisible = 8,
  onPrev,
  onNext,
  onPictureClick,
  onCurrentIndexChange,
  onPictureSelect,
  showArrows = true,
  standalone = false,
  className = "",
  arrowClassName = "",
}: ImageCarouselProps) {
  const [internalCurrentIndex, setInternalCurrentIndex] = useState(0);
  const [internalBottomTrackIndex, setInternalBottomTrackIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pictureRef = useRef<HTMLImageElement>(null);
  const [imageWidth, setImageWidth] = useState(0);
  const [gap, setGap] = useState(0);

  const pic = pictureRef.current;
  const picWidth = pic?.clientWidth;

  maxVisible = pictures.length < maxVisible ? pictures.length : maxVisible;

  const currentIndex = standalone
    ? internalCurrentIndex
    : externalCurrentIndex ?? 0;
  const bottomTrackIndex = standalone
    ? internalBottomTrackIndex
    : externalBottomTrackIndex ?? 0;

  const updateDimensions = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const containerWidth = container.clientWidth;

      const computedStyle = window.getComputedStyle(container);
      const gapValue = parseFloat(computedStyle.gap) || 15;

      const calculatedImageWidth =
        (containerWidth - gapValue * (maxVisible - 1)) / maxVisible;
      setImageWidth(picWidth ?? calculatedImageWidth);
      setGap(gapValue);
    }
  }, [maxVisible]);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    updateDimensions();

    const observer = new ResizeObserver(() => {
      updateDimensions();
    });

    observer.observe(scrollContainerRef.current);

    return () => observer.disconnect();
  }, [updateDimensions]);

  /* imageWidth as fallback */
  useEffect(() => {
    if (!standalone && scrollContainerRef.current && imageWidth > 0) {
      const scrollLeft = bottomTrackIndex * ((picWidth ?? imageWidth) + gap);
      scrollContainerRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [bottomTrackIndex, picWidth, imageWidth, gap, standalone]);

  const scrollDistance = picWidth? picWidth+ gap : imageWidth + gap;
  const maxScrollIndex = Math.max(0, pictures.length - maxVisible);

  const scrollToIndex = useCallback(
    (index: number) => {
      if (scrollContainerRef.current) {
        const scrollLeft = index * scrollDistance;
        scrollContainerRef.current.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        });

        if (standalone) {
          setInternalBottomTrackIndex(index);
        }
      }
    },
    [scrollDistance, standalone]
  );

  const handlePrev = useCallback(() => {
    if (standalone) {
      if (pictures.length <= maxVisible) return;
      const newIndex = Math.max(0, internalBottomTrackIndex - 1);
      scrollToIndex(newIndex);
    } else if (onPrev) {
      onPrev();
    }
  }, [
    standalone,
    pictures.length,
    maxVisible,
    internalBottomTrackIndex,
    scrollToIndex,
    onPrev,
  ]);

  const handleNext = useCallback(() => {
    if (standalone) {
      if (pictures.length <= maxVisible) return;
      const newIndex = Math.min(maxScrollIndex, internalBottomTrackIndex + 1);
      scrollToIndex(newIndex);
    } else if (onNext) {
      onNext();
    }
  }, [
    standalone,
    pictures.length,
    maxVisible,
    maxScrollIndex,
    internalBottomTrackIndex,
    scrollToIndex,
    onNext,
  ]);

  const handlePictureClick = useCallback(
    (originalIndex: number) => {
      if (standalone) {
        setInternalCurrentIndex(originalIndex);
        onCurrentIndexChange?.(originalIndex);
        if (onPictureSelect && pictures[originalIndex]) {
          onPictureSelect(pictures[originalIndex]);
        }
      } else if (onPictureClick) {
        onPictureClick(originalIndex);
      }
    },
    [
      standalone,
      onPictureClick,
      onCurrentIndexChange,
      onPictureSelect,
      pictures,
    ]
  );

  const handleTouchStart = useRef<number>(0);
  const handleTouchEnd = useRef<number>(0);
  const isScrolling = useRef<boolean>(false);

  const onTouchStart = (e: React.TouchEvent) => {
    handleTouchStart.current = e.targetTouches[0].clientX;
    isScrolling.current = false;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    handleTouchEnd.current = e.targetTouches[0].clientX;
    isScrolling.current = true;
  };

  const onTouchEnd = () => {
    if (
      !handleTouchStart.current ||
      !handleTouchEnd.current ||
      !isScrolling.current
    )
      return;

    const distance = handleTouchStart.current - handleTouchEnd.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    const currentTrackIndex = standalone
      ? internalBottomTrackIndex
      : bottomTrackIndex;

    if (isLeftSwipe && currentTrackIndex < maxScrollIndex) {
      handleNext();
    }
    if (isRightSwipe && currentTrackIndex > 0) {
      handlePrev();
    }
  };

  const handleScroll = useCallback(() => {
    if (!standalone || !scrollContainerRef.current) return;

    const scrollLeft = scrollContainerRef.current.scrollLeft;
    const newIndex = Math.round(scrollLeft / scrollDistance);
    if (newIndex !== internalBottomTrackIndex && scrollDistance > 0) {
      setInternalBottomTrackIndex(newIndex);
    }
  }, [scrollDistance, internalBottomTrackIndex, standalone]);

  const currentTrackIndex = standalone
    ? internalBottomTrackIndex
    : bottomTrackIndex;
  const canScrollPrev = currentTrackIndex > 0;
  const canScrollNext = currentTrackIndex < maxScrollIndex;

  return (
    <div
      className={`image-carousel-wrapper flex align-items-center width-max relative ${
        !standalone ? "popup-mode" : ""
      } ${className}`}
    >
      {showArrows && (
        <button
          className={`carousel-arrow carousel-arrow-next border-none pointer flex align-items-center justify-center ${
            !canScrollPrev ? "disabled" : ""
          } ${!standalone ? "popup-arrow" : ""} ${className}`}
          onClick={handlePrev}
          disabled={!canScrollPrev}
          aria-label="Previous images"
        >
          <img
            className={`arrow-icon ${arrowClassName}`}
            src={`./src/assets/${
              className === "cards-homepage" &&
              !arrowClassName.includes("blackArrow")
                ? ""
                : !standalone
                ? ""
                : "black_"
            }arrow.svg`}
            alt="Previous"
          />
        </button>
      )}

      <div
        ref={scrollContainerRef}
        className={`image-carousel-container flex f-1 ${
          !standalone ? "popup-carousel" : ""
        } ${className}`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onScroll={handleScroll}
        style={
          {
            "--max-visible": maxVisible,
            "--image-width": `${imageWidth}px`,
          } as React.CSSProperties
        }
      >
        {pictures.map((picture, index) => (
          <img
            ref={pictureRef}
            key={`${picture.src}-${index}`}
            className={`carousel-image pointer ${
              !standalone ? "popup-image" : ""
            } ${!standalone && currentIndex === index ? "active" : ""}`}
            src={picture.src}
            alt={picture.alt}
            onClick={() => handlePictureClick(index)}
            loading="lazy"
          />
        ))}
      </div>

      {showArrows && (
        <button
          className={`carousel-arrow carousel-arrow-next border-none pointer flex align-items-center justify-center ${
            !canScrollNext ? "disabled" : ""
          } ${!standalone ? "popup-arrow" : ""}  ${className}`}
          onClick={handleNext}
          disabled={!canScrollNext}
          aria-label="Next images"
        >
          <img
            className={`arrow-icon right ${arrowClassName}`}
            src={`./src/assets/${
              className === "cards-homepage" &&
              !arrowClassName.includes("blackArrow")
                ? ""
                : !standalone
                ? ""
                : "black_"
            }arrow.svg`}
            alt="Next"
          />
        </button>
      )}
    </div>
  );
}

export default ImageCarousel;
