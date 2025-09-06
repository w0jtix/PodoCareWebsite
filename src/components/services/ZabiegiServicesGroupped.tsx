import { useState, useCallback } from "react";
import { PriceListItem } from "../../data/priceList";
import Button from "../Button";
import SDInfoCard from "./SDInfoCard";
import ImageCarousel from "../ImageCarousel";
import { Picture } from "@/data/diseases";
import { loadShuffledImagesFromFolder } from "../utlis/imageLoader";
import ImageGalleryPopup from "../popups/ImageGalleryPopup";
import ServicesCarousel from "./ServicesCarousel";
import { AppTab } from "../../data/appTabs";
import { redirectTo } from "../utlis/navigation";
import { useVisibleItemsCount } from "../hooks/useVisibleItemsCount";
import { zabiegiIntroInformations } from "../../data/texts";
import important from "../../assets/important.svg";
import doubleArrow from "../../assets/double-arrow.svg";
import { useNavigate } from "react-router-dom";
import { useThemeColor } from "../hooks/useThemeColor";
import { useSafeAreaColor } from "../utlis/safeAreaManager";

export interface ZabiegiServicesGrouppedProps {
  visibleImg: number;
  zabiegiServices: PriceListItem[];
  preselectedId?: number | null;
}

export function ZabiegiServicesGroupped({
  visibleImg = 7,
  zabiegiServices,
  preselectedId,
}: ZabiegiServicesGrouppedProps) {
  const [selectedCardId, setSelectedCardId] = useState<number>(
    preselectedId ?? 5
  );
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const [selectedPicture, setSelectedPicture] = useState<Picture | null>(null);
  const navigate = useNavigate();

  const zabiegiCardBreakpoints = [
    { width: 768, count: 5 },
    { width: 1024, count: 5 },
    { width: 1280, count: 5 },
  ];

  /* useThemeColor(popupOpen ? "#000000" : undefined); */
  useSafeAreaColor(popupOpen);

  const visibleCount = useVisibleItemsCount(zabiegiCardBreakpoints, 5);

  const handleCardClick = (serviceId: number) => {
    setSelectedCardId(serviceId);
  };

  const selectedCardService = selectedCardId
    ? zabiegiServices.find((service) => service.id === selectedCardId)
    : null;

  const getServicePictures = useCallback((): Picture[] => {
    if (selectedCardService?.folder) {
      return loadShuffledImagesFromFolder(selectedCardService.folder);
    }
    return [];
  }, [selectedCardService?.folder]);

  const handlePictureSelect = useCallback((selectedPicture: Picture) => {
    setSelectedPicture(selectedPicture);
    setPopupOpen(true);
  }, []);

  const selectedIndex = selectedPicture
    ? getServicePictures().findIndex(
        (pic) =>
          pic.src === selectedPicture.src && pic.alt === selectedPicture.alt
      )
    : 0;

  return (
    <div className="sd-container zs flex-column width-95 height-fit-content">
      <section className="home-body-row sd zs height-fit-content width-max flex align-items-start">
        <div className="sd-title-section">
          <div className="sd-header-h1-container zs width-fit-content height-fit-content">
            <h1 className="header-h1 sd zs m-0">Zabiegi Podologiczne</h1>
            <div className="zs-important-info-container flex">
              <img
                className="zs-importnant-icon"
                src={important}
                alt="Important"
              ></img>
              <div className="zs-imp-spans flex-column">
                <span className="zabiegi-intro-text">
                  {zabiegiIntroInformations.line1}
                </span>
                <span className="zabiegi-intro-text bold">
                  {zabiegiIntroInformations.line2}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesCarousel
        zabiegiServices={zabiegiServices}
        visibleCount={visibleCount}
        selectedCardId={selectedCardId}
        onCardClick={handleCardClick}
      />
      {selectedCardService && (
        <div>
          <section className="sd-section zs flex space-between">
            <div className="sd-title-text-wrapper flex-column">
              <div className="sd-section-title-container width-fit-content height-fit-content">
                <h2 className="sd-section-title m-0">Krótki opis</h2>
              </div>

              <div className="sd-s-text flex">
                <img
                  className="bp-arrows"
                  src={doubleArrow}
                  alt="Bullet Point"
                ></img>
                <p className="sd-section-text m-0 text-align-justify">
                  {selectedCardService.shortDesc}
                </p>
              </div>
            </div>
            <SDInfoCard selectedService={selectedCardService} />
          </section>
          {selectedCardService.folder && (
            <section className="sd-section gallery flex justify-center align-items-center">
              <ImageCarousel
                pictures={loadShuffledImagesFromFolder(
                  selectedCardService.folder
                )}
                maxVisible={visibleImg}
                className="services-img"
                arrowClassName="services-img"
                standalone={true}
                showArrows={true}
                onPictureSelect={handlePictureSelect}
              />
            </section>
          )}
          <section className="sd-section">
            <div className="sd-section-title-container width-fit-content height-fit-content">
              <h2 className="sd-section-title m-0">Jak przebiega wizyta?</h2>
            </div>

            <div className="sd-s-text flex">
              <img
                className="bp-arrows"
                src={doubleArrow}
                alt="Bullet Point"
              ></img>
              <p className="sd-section-text m-0 text-align-justify">
                {selectedCardService.visitDesc}
              </p>
            </div>
            <div className="sd-first-visit flex justify-end align-items-center">
              <p className="sd-first-visit-text m-0">
                Pierwsza wizyta? Sprawdź jak się przygotować
              </p>
              <Button
                text={"Sprawdź"}
                disableImage={true}
                onClick={() => redirectTo(AppTab.PRZED_WIZYTA, navigate)}
                shiny={true}
              />
            </div>
          </section>
        </div>
      )}
      {popupOpen && selectedCardService && selectedCardService.folder && (
        <ImageGalleryPopup
          header={selectedCardService.shortName}
          pictures={getServicePictures()}
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

export default ZabiegiServicesGroupped;
