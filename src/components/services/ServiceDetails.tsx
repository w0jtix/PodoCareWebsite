import { useRef, useEffect, useState, useCallback } from "react";
import { PriceListItem, priceListData } from "../../data/priceList";
import Button from "../Button";
import ZabiegiServicesGroupped from "./ZabiegiServicesGroupped";
import SDInfoCard from "./SDInfoCard";
import Selector from "../Selector";
import { Picture } from "@/data/diseases";
import ImageCarousel from "../ImageCarousel";
import ImageGalleryPopup from "../popups/ImageGalleryPopup";
import { loadShuffledImagesFromFolder } from "../utlis/imageLoader";
import { redirectTo } from "../utlis/navigation";
import { AppTab } from "../../data/appTabs";
import { useVisibleItemsCount } from "../hooks/useVisibleItemsCount";
import doubleArrow from "../../assets/double-arrow.svg"
import singleArrow from "../../assets/single-arrow.svg"
import { useNavigate } from "react-router-dom";
import { usePreventScroll } from "../hooks/usePreventScroll";
export interface ServiceDetailsProps {
  selectedService: PriceListItem | null;
  onSelectionChange?: (selection: string) => void;
  preselectedId?: number | null;
  preselectedBrodawkiValue?: string | null;
}

export function ServiceDetails({
  selectedService,
  onSelectionChange,
  preselectedId,
  preselectedBrodawkiValue
}: ServiceDetailsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [popupOpen, setPopupOpen] = useState<boolean>(false);
  const [selectedPicture, setSelectedPicture] = useState<Picture | null>(null);
  const navigate = useNavigate();

  const imagesCarouselBreakpoints = [
    { width: 480, count: 2 },
    { width: 620, count: 3 },
    { width: 768, count: 4 },
    { width: 1280, count: 5 },
    { width: 1700, count: 6 },
  ];

  usePreventScroll(popupOpen);

  const visibleCount = useVisibleItemsCount(imagesCarouselBreakpoints, 7);

  const getServicePictures = useCallback((): Picture[] => {
    if (selectedService?.folder) {
      return loadShuffledImagesFromFolder(selectedService.folder);
    }
    return [];
  }, [selectedService?.folder]);

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

  /* sidebarMenu choice/ nav from priceList -> scroll to the top */
  useEffect(() => {
    if (selectedService) {
      const headerHeight = window.innerHeight * 0.17;
      const padding = -200;
      window.scrollTo({
        top: headerHeight + padding,
        behavior: "smooth",
      });
    }
  }, [selectedService]);

  if (!selectedService) {
    return (
      <div className="sd-container flex-column justify-self-center width-max">
        <div className="sd-placeholder flex-column justify-center text-align-center">
          <h2 className="sd-section-title">Wybierz usługę z menu</h2>
          <br />
          <p className="sd-section-text m-0">
            Kliknij na wybraną usługę w menu po lewej stronie, aby zobaczyć
            szczegóły.
          </p>
        </div>
      </div>
    );
  }

  if (selectedService.category === "Zabiegi") {
    const zabiegiServices = priceListData.filter(
      (service) => service.category === "Zabiegi"
    );

    return (
      <ZabiegiServicesGroupped
        zabiegiServices={zabiegiServices}
        visibleImg={visibleCount}
        preselectedId={preselectedId}
      />
    );
  }

  return (
    <div
      className="sd-container flex-column width-95 height-fit-content"
      ref={containerRef}
    >
      <section className="home-body-row sd height-fit-content width-max flex  space-between align-items-start">
        <div className="sd-title-section align-self-center">
          <div className="sd-header-h1-container width-fit-content height-fit-content">
            <h1 className="header-h1 sd m-0">{selectedService.name}</h1>
          </div>
          {selectedService.category === "Brodawki wirusowe" && (
            <Selector
              onSelectionChange={onSelectionChange}
              className="bw-selector big-res"
              preselectedValue={preselectedBrodawkiValue}
            />
          )}
        </div>

        <div className="sd-info-section-wrapper">
          <SDInfoCard selectedService={selectedService} />
        </div>
      </section>
      {selectedService.category === "Brodawki wirusowe" && (
        <Selector
          onSelectionChange={onSelectionChange}
          className="bw-selector sm-res"
          preselectedValue={preselectedBrodawkiValue}
        />
      )}
      <section className="sd-section">
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
            {selectedService.shortDesc}
          </p>
        </div>
      </section>

      {selectedService.folder && loadShuffledImagesFromFolder(selectedService.folder).length > 0 && (
        <section className="sd-section gallery">
          <div className="sd-section-title-container width-fit-content height-fit-content justify-start">
            <h2 className="sd-section-title m-0">Galeria zdjęć</h2>
          </div>
          <ImageCarousel
            pictures={loadShuffledImagesFromFolder(selectedService.folder)}
            maxVisible={visibleCount}
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
          <h2 className="sd-section-title m-0">
            Czy ta usługa jest dla Ciebie?
          </h2>
        </div>
        <div className="sd-s-text flex-column">

        {selectedService.isItForYouDesc?.map((item, index) => (
          <div key={index} className="is-for-you-row flex align-items-center">
            <img
              className="bp-arrows-single"
              src={singleArrow}
              alt="Bullet Point"
            ></img>
            <p className="sd-section-text-is-for-you m-0 text-align-justify">
              {item}
            </p>
          </div>
        ))}

        </div>
      </section>

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
            {selectedService.visitDesc}
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
      {selectedService.category === "Brodawki wirusowe" && (
        <section className="available-services-b-w"></section>
      )}
      {popupOpen && selectedService.folder && (
        <ImageGalleryPopup
          header={selectedService.shortName ?? selectedService.name}
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

export default ServiceDetails;
