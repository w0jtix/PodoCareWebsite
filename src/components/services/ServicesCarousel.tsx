import { useRef, useEffect } from "react";
import { PriceListItem } from "../../data/priceList";
import Button from "../Button";

export interface ServicesCarouselProps {
  zabiegiServices: PriceListItem[];
  visibleCount: number;
  selectedCardId: number;
  onCardClick: (serviceId: number) => void;
}

export function ServicesCarousel({
  zabiegiServices,
  visibleCount,
  selectedCardId,
  onCardClick,
}: ServicesCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardWrapperRef = useRef<HTMLDivElement>(null);

  const handleCardSelect = (serviceId: number) => {
    onCardClick(serviceId);
  };

  const handleDotClick = (index: number) => {
    const serviceId = zabiegiServices[index].id;
    onCardClick(serviceId);
  };

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
  };

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const selectedIndex = zabiegiServices.findIndex(
      (service) => service.id === selectedCardId
    );
    if (selectedIndex === -1) return;

    if (cardWrapperRef.current && scrollContainerRef.current) {
      const style = window.getComputedStyle(scrollContainerRef.current);
      const gapValue = parseFloat(style.gap || "0");
      const totalWidth =
        visibleCount * cardWrapperRef.current.clientWidth +
        (visibleCount - 1) * gapValue;

      // zabiegi services id is in <3,7> range hence (-2) -> makes it <1,5>
      const initialScrollLeft =
        totalWidth * ((selectedCardId - 2 - 0.5) / visibleCount) -
        scrollContainerRef.current.clientWidth * 0.5;

      scrollContainerRef.current.scrollTo({
        left: initialScrollLeft,
        behavior: "auto",
      });
    }
  }, [selectedCardId, visibleCount, zabiegiServices]);

  return (
    <div className="width-max relative">
      <section className="services-cards-wrapper width-max">
        <div className="services-carousel-wrapper flex align-items-center width-max relative">
          <div
            ref={scrollContainerRef}
            className="services-carousel-container flex f-1 width-fit-content align-self-center space-evenly"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {zabiegiServices.map((service) => {
              const isExpanded = selectedCardId === service.id;

              return (
                <div
                  key={service.id}
                  className="services-pricing-card-wrapper"
                  ref={cardWrapperRef}
                >
                  <div
                    className={`services-pricing-card flex-column height-fit-content justify-self-center space-between relative pointer ${
                      isExpanded ? "selected" : ""
                    }`}
                    onClick={() => handleCardSelect(service.id)}
                  >
                    <div className="text-align-center">
                      <h3
                        className={`services-pricing-title flex align-items-center justify-center ${
                          isExpanded ? "selected" : ""
                        }`}
                      >
                        {service.shortName}
                      </h3>
                    </div>

                    <div className="services-features-list flex-column f-1">
                      {service.features?.common &&
                        service.features.common.length > 0 && (
                          <>
                            <div className="services-section-separator flex align-items-center left">
                              <div
                                className={`services-separator-line f-1 ${
                                  isExpanded ? "selected" : ""
                                }`}
                              ></div>
                              <div className="services-feature-category text-align-center align-items-center m-0">
                                <h5
                                  className={`services-category-title m-0 ${
                                    isExpanded ? "selected" : ""
                                  }`}
                                >
                                  Ogólne
                                </h5>
                              </div>
                              <div
                                className={`services-separator-line f-1 right ${
                                  isExpanded ? "selected" : ""
                                }`}
                              ></div>
                            </div>
                            <div className="feature-items-container commons flex-column">
                              {service.features.common.map(
                                (feature, featureIndex) => (
                                  <div
                                    key={`common-${featureIndex}`}
                                    className="services-feature-item width-90 flex"
                                  >
                                    <img
                                      className="services-feature-icon"
                                      src="src/assets/yellow-tick.svg"
                                      alt="Check"
                                    />
                                    <span
                                      className={`services-feature-text align-self-center ${
                                        isExpanded ? "selected" : ""
                                      }`}
                                    >
                                      {feature}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </>
                        )}

                      {service.features?.nails && (
                        <>
                          <div className="services-section-separator flex align-items-center left">
                            <div
                              className={`services-separator-line f-1 ${
                                isExpanded ? "selected" : ""
                              }`}
                            ></div>
                            <div className="services-feature-category text-align-center align-items-center m-0">
                              <h5
                                className={`services-category-title m-0 ${
                                  isExpanded ? "selected" : ""
                                }`}
                              >
                                Paznokcie
                              </h5>
                            </div>
                            <div
                              className={`services-separator-line f-1 right ${
                                isExpanded ? "selected" : ""
                              }`}
                            ></div>
                          </div>
                          <div className="services-feature-item width-90 flex nails">
                            <img
                              className="services-feature-icon"
                              src="src/assets/yellow-tick.svg"
                              alt="Check"
                            />
                            <span
                              className={`services-feature-text align-self-center ${
                                isExpanded ? "selected" : ""
                              }`}
                            >
                              {service.features.nails}
                            </span>
                          </div>
                        </>
                      )}

                      {service.features?.sole &&
                        service.features.sole.length > 0 && (
                          <>
                            <div className="services-section-separator flex align-items-center left">
                              <div
                                className={`services-separator-line f-1 ${
                                  isExpanded ? "selected" : ""
                                }`}
                              ></div>
                              <div className="services-feature-category text-align-center align-items-center m-0">
                                <h5
                                  className={`services-category-title m-0 ${
                                    isExpanded ? "selected" : ""
                                  }`}
                                >
                                  Podeszwa
                                </h5>
                              </div>
                              <div
                                className={`services-separator-line f-1 right ${
                                  isExpanded ? "selected" : ""
                                }`}
                              ></div>
                            </div>
                            <div className="feature-items-container soles">
                              {service.features.sole.map(
                                (feature, featureIndex) => (
                                  <div
                                    key={`sole-${featureIndex}`}
                                    className="services-feature-item width-90 flex"
                                  >
                                    <img
                                      className="services-feature-icon"
                                      src="src/assets/yellow-tick.svg"
                                      alt="Check"
                                    />
                                    <span
                                      className={`services-feature-text align-self-center ${
                                        isExpanded ? "selected" : ""
                                      }`}
                                    >
                                      {feature}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </>
                        )}
                    </div>

                    <div className="services-button-section flex justify-center align-items-center">
                      <Button
                        text={isExpanded ? "Wybrano" : "Wybierz"}
                        disableImage={true}
                        shiny={false}
                        footer={true}
                        backgroundVersion={isExpanded ? "light" : "dark"}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="services-carousel-indicators flex justify-center">
          {zabiegiServices.map((_, index) => (
            <div
              key={index}
              className={`carousel-dot pointer ${
                zabiegiServices[index].id === selectedCardId ? "active" : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ServicesCarousel;
