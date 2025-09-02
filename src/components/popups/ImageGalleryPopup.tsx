import { useEffect, useState, useCallback } from "react";
import ReactDOM from "react-dom";
import { Picture } from "@/data/diseases";
import ImageCarousel from "../ImageCarousel";
import { useVisibleItemsCount } from "../hooks/useVisibleItemsCount";

export interface ImageGalleryPopupProps {
  header?: string;
  pictures: Picture[];
  selectedPicture: Picture | null;
  setSelectedPicture: (pic: Picture) => void;
  selectedIndex: number;
  onClose: () => void;
  className?: string;
}

export function ImageGalleryPopup({
  header,
  pictures,
  selectedPicture,
  setSelectedPicture,
  selectedIndex,
  onClose,
  className = "",
}: ImageGalleryPopupProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(selectedIndex);
  const [bottomTrackIndex, setBottomTrackIndex] = useState<number>(0);
  const [isSliding, setIsSliding] = useState<boolean>(false);

  const maxVisibleBreakpoints = [
    { width: 400, count: 2 },
    { width: 550, count: 3 },
    { width: 700, count: 4 },
    { width: 768, count: 5 },
    { width: 880, count: 5 },
    { width: 1086, count: 6 },
  ]

  const maxVisible = useVisibleItemsCount(maxVisibleBreakpoints, 7);

  useEffect(() => {
    if (pictures[currentIndex]) {
      setSelectedPicture(pictures[currentIndex]);
    }
  }, [currentIndex, pictures, setSelectedPicture]);

  const handleMainPrev = useCallback(() => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        const newIndex = (prev - 1 + pictures.length) % pictures.length;
        setTimeout(() => {
          if (pictures.length > maxVisible) {
            const newBottomTrackIndex = Math.max(0, newIndex - 7);
            setBottomTrackIndex(newBottomTrackIndex);
          }
        }, 0);
        return newIndex;
      });
      setIsSliding(false);
    }, 300);
  }, [isSliding, pictures.length]);

  const handleMainNext = useCallback(() => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        const newIndex = (prev + 1) % pictures.length;
        setTimeout(() => {
          if (pictures.length > maxVisible) {
            const newBottomTrackIndex = Math.max(0, newIndex - 7);
            setBottomTrackIndex(newBottomTrackIndex);
          }
        }, 0);
        return newIndex;
      });
      setIsSliding(false);
    }, 300);
  }, [isSliding, pictures.length]);

  const handleBottomPrev = useCallback(() => {
    if (pictures.length <= maxVisible) return;

    setBottomTrackIndex((prev) => {
      const newIndex = Math.max(0, prev - 1);
      return newIndex;
    });
  }, [pictures.length]);

  const handleBottomNext = useCallback(() => {
    if (pictures.length <= maxVisible) return;

    setBottomTrackIndex((prev) => {
      const maxStartIndex = Math.max(0, pictures.length - maxVisible);
      const newIndex = Math.min(maxStartIndex, prev + 1);
      return newIndex;
    });
  }, [pictures.length]);

  const handleBottomPictureClick = useCallback((originalIndex: number) => {
    setCurrentIndex(originalIndex);
  }, []);

  const showArrows = pictures.length > 1;

  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) {
    console.error("Portal root element not found");
    return null;
  }
  return ReactDOM.createPortal(
    <div className={`popup-overlay ${className}`} onClick={onClose}>
      <div
        className={`popup-content flex-column relative ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="popup-close-button absolute pointer transparent border-none p-0" onClick={onClose}>
            <img
              src="src/assets/close.svg"
              alt="Close"
              className="popup-close-icon"
            />
          </button>
        <div className="popup-h-container flex justify-center">
          <h2 className={`popup-header ${className}`}>{header}</h2>       
        </div>
        <div className="pic-carousel flex">
          {showArrows && (
            <button
              className="p-0 border-none transparent width-fit-content height-fit-content"
              onClick={handleMainPrev}
            >
              <img
                className={`arrow pointer ${className}`}
                src="./src/assets/arrow.svg"
                alt="Previous"
              />
            </button>
          )}

          <img
            className="carousel-picture"
            src={selectedPicture?.src}
            alt={selectedPicture?.alt}
            key={currentIndex}
          ></img>

          {showArrows && (
            <button
              className="p-0 border-none transparent width-fit-content height-fit-content"
              onClick={handleMainNext}
            >
              <img
                className={`arrow right pointer ${className}`}
                src="./src/assets/arrow.svg"
                alt="Next"
              />
            </button>
          )}
        </div>
        <ImageCarousel
          pictures={pictures}
          currentIndex={currentIndex}
          bottomTrackIndex={bottomTrackIndex}
          onPrev={handleBottomPrev}
          onNext={handleBottomNext}
          onPictureClick={handleBottomPictureClick}
          maxVisible={maxVisible}
          className={className}
          arrowClassName={className}
          showArrows={true}
        />
      </div>
    </div>,
    portalRoot
  );
}

export default ImageGalleryPopup;
