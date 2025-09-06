import Button from "./Button";
import { useCallback, useRef, useState } from "react";
import { Picture } from "../data/diseases";
import ImageGalleryPopup from "./popups/ImageGalleryPopup";
import ImageCarousel from "./ImageCarousel";
import { useNavigate } from "react-router-dom";
import { navigateToServiceDetail } from "./utlis/navigation";
import { useVisibleItemsCount } from "./hooks/useVisibleItemsCount";
import { useIsMobile } from "./hooks/useIsMobile";
import { useThemeColor } from "./hooks/useThemeColor";

export interface CardProps {
  name: string;
  shortDesc: string;
  pictures: Picture[];
}

export function Card({
  name,
  shortDesc,
  pictures,
}: CardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const [selectedPicture, setSelectedPicture] = useState<Picture | null>(null);

  const cardBreakpoints = [
    { width: 470, count: 2 },
    { width: 640, count: 2 },
    { width: 768, count: 2 },
    { width: 1024, count: 2 },
  ]

  useThemeColor(popupOpen);

  const visibleCount = useVisibleItemsCount(cardBreakpoints, 3);

  const isMobile = useIsMobile();

  if (!pictures || pictures.length === 0) {
    pictures = [{ src: "", alt: "No image" }];
  }

  const navigate = useNavigate();

  const handleNavigate = useCallback(() => {
    navigateToServiceDetail(navigate, name);
  }, [name, navigate]);

  const handlePictureClick = (pic: Picture) => {
    setSelectedPicture(pic);
    setPopupOpen(true);
  };

  const selectedIndex = pictures.findIndex(
    (pic) =>
      pic.src === selectedPicture?.src && pic.alt === selectedPicture?.alt
  );

  return (
    <div ref={divRef} className="card-container">
      <div className="width-90 height-max m-0-auto">
        <section className="card-title-section flex justify-start">
          <span className="card-title flex height-max align-items-end">
            {name}
          </span>
        </section>
        <section className="carousel-section flex align-items-center">
        <ImageCarousel
          pictures={pictures}
          standalone={true}
          maxVisible={visibleCount}
          className="cards-homepage"
          showArrows={true}
          arrowClassName={`cards-homepage ${isMobile ? 'blackArrow' : ''}`}
          onPictureSelect={(pic) => handlePictureClick(pic)}
        />
        </section>
        <section className="card-description-section flex width-90 justify-self-center">
          <span className="card-description flex height-max">{shortDesc}</span>
        </section>

        <section className="card-button-section flex justify-center align-items-center">
          <Button
            text={"Więcej..."}
            disableImage={true}
            onClick={handleNavigate}
            backgroundVersion="light"
          />
        </section>
      </div>
      {popupOpen && (
        <ImageGalleryPopup
          header={name}
          pictures={pictures}
          selectedPicture={selectedPicture}
          setSelectedPicture={setSelectedPicture}
          selectedIndex={selectedIndex}
          onClose={() => setPopupOpen(false)}
          className="imgpop"
        />
      )}
    </div>
  );
}

export default Card;
