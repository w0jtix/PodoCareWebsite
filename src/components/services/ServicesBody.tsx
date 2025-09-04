import ServiceDetails from "./ServiceDetails";
import DropdownSelect from "../DropdownSelect";
import {
  priceListData,
  PriceListItem,
  brodawkiWirusoweServices,
} from "../../data/priceList";
import { useState, useEffect, useRef } from "react";
import SidebarMenu from "./SidebarMenu";

import { useSearchParams } from "react-router-dom";
import { getServiceForDisease } from "../utlis/diseaseServiceMap";
import { useIsMobile } from "../hooks/useIsMobile";
import arrowThin from "../../assets/arrow_thin.svg"
import { normalizeString } from "../utlis/textUtils";

interface CategoryItem {
  id: string;
  name: string;
}

interface ServiceItem {
  id: number;
  name: string;
  originalService: PriceListItem;
}

export function ServicesBody() {
  const defaultService = priceListData.find(
    (service) => service.category === "Konsultacje"
  );

  const [selectedService, setSelectedService] = useState<PriceListItem | null>(
    defaultService || null
  );
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(
    null
  );
  const [preselectedZabiegiId, setPreselectedZabiegiId] = useState<number | null>(null);
  const [preselectedBrodawkiValue, setPreselectedBrodawkiValue] = useState<string | null> (null);
  const [availableServices, setAvailableServices] = useState<ServiceItem[]>([]);
  const isManualSelectorSelection = useRef<boolean>(false);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("disease");
    if (query) {
      const normalizedQuery = normalizeString(query);
      const directMatch = priceListData.find((s) => normalizeString(s.name) === normalizedQuery);

      if (directMatch) {
        setSelectedService(directMatch);
        if (normalizedQuery.includes("zabieg podologiczny") && directMatch.category === "Zabiegi") {
          setPreselectedZabiegiId(directMatch.id);
        } else if (normalizedQuery.includes("metodą chemiczną") && directMatch.category === "Brodawki wirusowe") {
          const selectionMap: Record<string, string> = {
            "Usuwanie brodawki wirusowej metodą chemiczną" : "1",
            "Usuwanie 2-3 brodawek wirusowych metodą chemiczną" : "2-3",
            "Usuwanie 4-7 brodawek wirusowych metodą chemiczną" : "4-7",
            "Usuwanie 8+ brodawek wirusowych metodą chemiczną" : "8+",
          };
          setPreselectedBrodawkiValue(selectionMap[normalizedQuery]);
        }

      } else {
        const mappedService = getServiceForDisease(normalizedQuery);
        if (mappedService) {
          setSelectedService(mappedService);
        }
      }
    }
  }, [searchParams]);

  const isMobile = useIsMobile();

  const categories: CategoryItem[] = [
    ...new Set(
      priceListData.map((service) => {
        if (service.category === "Zabiegi") {
          return "Zabiegi Podologiczne";
        }
        return service.category;
      })
    ),
  ].map((category) => ({
    id: category,
    name: category,
  }));

  // for mount - initial service is chosen by default hence it has to adjust category
  useEffect(() => {
    if (selectedService) {
      let categoryName = selectedService.category;
      if (selectedService.category === "Zabiegi") {
        categoryName = "Zabiegi Podologiczne";
      }

      const category = categories.find((cat) => cat.id === categoryName);
      if (category) {
        setSelectedCategory(category);
      }
    }
  }, [selectedService]);

  useEffect(() => {
    if (selectedCategory) {
      let services: ServiceItem[] = [];

      if (selectedCategory.id === "Zabiegi Podologiczne") {
        const zabiegiServices = priceListData.filter(
          (service) => service.category === "Zabiegi"
        );
        if (zabiegiServices.length > 0) {
          services = [
            {
              id: -1,
              name: `Zabiegi Podologiczne (${zabiegiServices.length})`,
              originalService: zabiegiServices[0],
            },
          ];
        }
      } else if (selectedCategory.id === "Brodawki wirusowe") {
        const brodawkiServices = priceListData.filter(
          (service) => service.category === "Brodawki wirusowe"
        );
        if (brodawkiServices.length > 0) {
          services = [
            {
              id: -2,
              name: `Usuwanie brodawek wirusowych metodą chemiczną (${brodawkiServices.length})`,
              originalService: brodawkiServices[0],
            },
          ];
        }
      } else {
        services = priceListData
          .filter((service) => service.category === selectedCategory.id)
          .map((service) => ({
            id: service.id,
            name: service.name,
            originalService: service,
          }));
      }

      setAvailableServices(services);

      //auto select for groupped services or length === 1
      const isGroupedCategory =
        selectedCategory.id === "Zabiegi Podologiczne" ||
        selectedCategory.id === "Brodawki wirusowe";
      const shouldAutoSelect =
        (isGroupedCategory && !isManualSelectorSelection.current) ||
        (services.length === 1 && !isGroupedCategory);

      if (shouldAutoSelect) {
        setSelectedService(services[0].originalService);
      }

      isManualSelectorSelection.current = false;
    } else {
      setAvailableServices([]);
    }
  }, [selectedCategory]);

  const handleCategoryChange = (
    category: CategoryItem | CategoryItem[] | null
  ) => {
    const selectedCat = Array.isArray(category) ? category[0] : category;
    setSelectedCategory(selectedCat);
    if (!selectedCat) {
      setAvailableServices([]);
    }
  };

  const handleServiceChange = (
    serviceItem: ServiceItem | ServiceItem[] | null
  ) => {
    const selectedServiceItem = Array.isArray(serviceItem)
      ? serviceItem[0]
      : serviceItem;
    if (selectedServiceItem) {
      setSelectedService(selectedServiceItem.originalService);

      setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev);
      newParams.delete("disease");
      return newParams;
    });
    }
  };

  const handleSelection = (selection: string) => {
    isManualSelectorSelection.current = true;

    const selectionMap: Record<string, string> = {
      "1": "Usuwanie brodawki wirusowej metodą chemiczną",
      "2-3": "Usuwanie 2-3 brodawek wirusowych metodą chemiczną",
      "4-7": "Usuwanie 4-7 brodawek wirusowych metodą chemiczną",
      "8+": "Usuwanie 8+ brodawek wirusowych metodą chemiczną",
    };

    const targetServiceName = selectionMap[selection];

    if (targetServiceName) {
      const matchingService = priceListData.find(
        (service) => service.name === targetServiceName
      );

      if (matchingService) {
        setSelectedService(matchingService);
      }
    }
  };

  const selectedServiceItem =
    (selectedService &&
      (brodawkiWirusoweServices.includes(selectedService.name)
        ? availableServices.find((item) =>
            item.name.startsWith(
              "Usuwanie brodawek wirusowych metodą chemiczną"
            )
          )
        : availableServices.find(
            (item) => item.originalService.id === selectedService.id
          ))) ||
    null;

  return (
    <div className="body-background width-max p-0">
      <div className="body-container flex-column justify-self-center align-items-start height-fit-content">
        <div className="services-body width-max flex height-fit-content">
          {isMobile ? (
            <div className="services-header flex align-items-center width-max space-between">
              <h1 className="header-h1 m-0">Usługi</h1>
              <div className="category-service-dropdowns flex-column align-items-center justify-center">
                <div className="dropdown-with-header-container flex-column align-items-center">
                  <span className="categories-dropdown-header flex justify-self-center">
                    Kategoria:
                  </span>
                  <div className="dropdown-wrapper">
                    <DropdownSelect<CategoryItem>
                      items={categories}
                      placeholder={"Wybierz"}
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                      searchable={false}
                      allowNew={false}
                      showTick={false}
                      multiple={false}
                      className="category-dropdown"
                      arrowIcon={arrowThin}
                      allowColors={true}
                    />
                  </div>
                </div>

                <div className="dropdown-with-header-container flex-column  align-items-center">
                  <span className="services-dropdown-header flex justify-self-center">
                    Usługa:
                  </span>
                  <div className="dropdown-wrapper">
                    <DropdownSelect<ServiceItem>
                      items={availableServices}
                      placeholder={"Wybierz"}
                      value={selectedServiceItem}
                      onChange={handleServiceChange}
                      searchable={false}
                      allowNew={false}
                      showTick={false}
                      multiple={false}
                      disabled={false}
                      className="service-dropdown"
                      arrowIcon={arrowThin}
                      allowColors={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <section className="home-body-row sb height-fit-content width-max flex-column">
              <h1 className="header-h1">Usługi</h1>
              <SidebarMenu
                data={priceListData}
                selectedService={selectedService}
                setSelectedService={setSelectedService}
              />
            </section>
          )}

          <section className="services-main-section flex width-max">
            <ServiceDetails
              selectedService={selectedService}
              onSelectionChange={handleSelection}
              preselectedId = {preselectedZabiegiId}
              preselectedBrodawkiValue={preselectedBrodawkiValue}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default ServicesBody;
