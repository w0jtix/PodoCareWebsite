import { useState, useCallback } from "react";
import { priceListData, PriceListItem } from "../../data/priceList";
import Button from "../Button";
import { navigateToServiceDetail, redirectToBooksy } from "../utlis/navigation";
import { useNavigate } from "react-router-dom";
import booksyImg from "../../assets/booksy.png"
import arrowDown from "../../assets/arrow-down.svg"

export function CennikContainer() {
  const [expandedServices, setExpandedServices] = useState<Set<number>>(
    new Set()
  );

  const navigate = useNavigate();

  const handleNavigate = useCallback((name: string) => {
      navigateToServiceDetail(navigate, name);
  }, [navigate]);

  const groupedServices = priceListData.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, PriceListItem[]>);

  const formatPrice = (price: number) => `${price}zł`;

  const getServiceName = (service: PriceListItem) => {
    if (service.subName) {
      return { mainName: service.name, subName: service.subName };
    }

    return { mainName: service.name, subName: null };
  };

  const toggleService = (serviceId: number) => {
    setExpandedServices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  };

  const isServiceExpanded = (serviceId: number) => {
    return expandedServices.has(serviceId);
  };

  return (
    <div className="cennik-container width-60 height-fit-content align-self-center">
      <div className="category-cards-list flex-column">
        {Object.entries(groupedServices).map(([category, services]) => (
          <div key={category} className="category-card">
            <div className="cennik-category-header">
              <div className="flex align-items-center space-between">
                <h2 className="cennik-category-title m-0">{category}</h2>

                <div className="cennik-header-btn-desc flex space-between">
                  <div
                    className="service-price booksy border flex align-items-center justify-center g-10 pointer"
                    onClick={redirectToBooksy}
                  >
                    <img
                      className="cennik-booksy-img"
                      src={booksyImg}
                      alt="Booksy"
                    ></img>
                    <span className="service-price-text">Rezerwacja</span>
                  </div>

                  <div className="service-price border">
                    <span className="service-price-text">Cena</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="services-container">
              <div className="services flex-column">
                {services.map((service) => {
                  const { mainName, subName } = getServiceName(service);
                  const isExpanded = isServiceExpanded(service.id);

                  return (
                    <div
                      key={service.id}
                      className={`service-item flex-column height-fit-content pointer ${
                        isExpanded ? "expanded" : ""
                      }`}
                      onClick={() => toggleService(service.id)}
                    >
                      <div className="service-main-row flex space-between align-items-center">
                        <div className="arrow-name-container flex">
                          <img
                            className={`arrow-down ${
                              isExpanded ? "rotated" : ""
                            }`}
                            src={arrowDown}
                            alt="Arrow Down"
                          ></img>
                          <div
                            className={`service-content align-self-center flex-column ${
                              subName ? "hasSubName" : ""
                            }`}
                          >
                            <h3 className="service-name m-0">{mainName}</h3>
                            {subName && (
                              <p className="service-subname">
                                {service.subPrice
                                  ? `${subName} +${service.subPrice}zł`
                                  : subName}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="service-price">
                          <span className="service-price-text ">
                            {service.optionalPrice
                              ? `${service.price}/ ${formatPrice(
                                  service.optionalPrice
                                )}`
                              : service.name.includes("VIP")
                              ? `+${service.price}%`
                              : formatPrice(service.price)}
                          </span>
                        </div>
                      </div>
                      {isExpanded && (
                        <div className="service-description-inner flex-column">
                          <p className="service-description-text">
                            {service.serviceDesc}
                          </p>
                          <div className="desc-button-div flex justify-end align-self-end width-fit-content">
                            <Button
                              text="Czytaj więcej..."
                              onClick={() => handleNavigate(service.name)}
                              disableImage={true}
                              footer={true}
                              backgroundVersion="off-black"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CennikContainer;
