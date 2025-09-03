import { useState, useEffect } from "react";
import { PriceListItem } from "../../data/priceList";
import Searchbar from "../Searchbar";
import arrowDown from "../../assets/arrow-down.svg"

export interface SidebarMenuProps {
  data: PriceListItem[];
  selectedService?: PriceListItem | null;
  setSelectedService: (service: PriceListItem) => void;
}

export function SidebarMenu({
  data,
  selectedService,
  setSelectedService,
}: SidebarMenuProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    if (selectedService?.category === "Zabiegi") {
      setExpandedCategories(
        (prev) => new Set([...prev, "Zabiegi Podologiczne"])
      );
    } else if (selectedService?.category === "Brodawki wirusowe") {
      setExpandedCategories((prev) => new Set([...prev, "Brodawki wirusowe"]));
    } else if (selectedService?.category) {
      setExpandedCategories(
        (prev) => new Set([...prev, selectedService.category])
      );
    }
  }, [selectedService]);

  const groupedServices = data.reduce((acc, service) => {
    if (service.category === "Zabiegi") {
      if (!acc["Zabiegi Podologiczne"]) {
        acc["Zabiegi Podologiczne"] = [];
      }
    } else if (service.category === "Brodawki wirusowe") {
      if (!acc["Brodawki wirusowe"]) {
        acc["Brodawki wirusowe"] = [];
      }
    } else {
      if (!acc[service.category]) {
        acc[service.category] = [];
      }
      acc[service.category].push(service);
    }
    return acc;
  }, {} as Record<string, PriceListItem[]>);

  const filteredGroupedServices = Object.entries(groupedServices).reduce(
    (acc, [category, services]) => {
      if (
        category === "Zabiegi Podologiczne" ||
        category === "Brodawki wirusowe"
      ) {
        const categoryMatches = category
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

        let serviceMatches = false;
        if (category === "Zabiegi Podologiczne") {
          serviceMatches = data
            .filter((service) => service.category === "Zabiegi")
            .some((service) =>
              service.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        } else if (category === "Brodawki wirusowe") {
          serviceMatches = data
            .filter((service) => service.category === "Brodawki wirusowe")
            .some((service) =>
              service.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (categoryMatches || serviceMatches || searchTerm === "") {
          acc[category] = [];
        }
      } else {
        const filteredServices = services.filter(
          (service) =>
            service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            category.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (filteredServices.length > 0) {
          acc[category] = filteredServices;
        }
      }
      return acc;
    },
    {} as Record<string, PriceListItem[]>
  );

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  const getCategoryServiceCount = (category: string): number => {
    return data.filter((service) => service.category === category).length;
  };

  const isCategoryExpanded = (category: string) => {
    return expandedCategories.has(category);
  };

  const handleServiceClick = (category: string) => {
    if (category === "Zabiegi Podologiczne") {
      const firstZabiegService = data.find(
        (service) => service.category === "Zabiegi"
      );
      if (firstZabiegService) {
        setSelectedService(firstZabiegService);
      }
    } else if (category === "Brodawki wirusowe") {
      const firstBrodawkiService = data.find(
        (service) => service.category === "Brodawki wirusowe"
      );
      if (firstBrodawkiService) {
        setSelectedService(firstBrodawkiService);
      }
    }
  };

  const handleRegularServiceClick = (service: PriceListItem) => {
    setSelectedService(service);
  };

  const renderServiceList = (category: string, services: PriceListItem[]) => {
    if (category === "Zabiegi Podologiczne") {
      return (
        <div
          className={`sb-service-item pointer ${selectedService?.category === "Zabiegi" ? "selected" : ""}`}
          onClick={() => handleServiceClick(category)}
        >
          <span className={`sb-service-name ${selectedService?.category === "Zabiegi" ? "selected" : ""}`}>
            {`Zabiegi Podologiczne (${getCategoryServiceCount("Zabiegi")})`}
          </span>
        </div>
      );
    }

    if (category === "Brodawki wirusowe") {
      return (
        <div
          className={`sb-service-item pointer ${selectedService?.category === "Brodawki wirusowe" ? "selected" : ""}`}
          onClick={() => handleServiceClick(category)}
        >
          <span className={`sb-service-name ${selectedService?.category === "Brodawki wirusowe" ? "selected" : ""}`}>
            {`Usuwanie brodawek wirusowych metodą chemiczną (${getCategoryServiceCount("Brodawki wirusowe")})`}
            
          </span>
        </div>
      );
    }

    return services.map((service) => (
      <div
        key={service.id}
        className={`sb-service-item pointer ${selectedService?.id === service.id ? "selected" : ""}`}
        onClick={() => handleRegularServiceClick(service)}
      >
        <span className={`sb-service-name ${selectedService?.id === service.id ? "selected" : ""}`}>{service.name}</span>
      </div>
    ));
  };

  return (
    <div className="sbmenu-container flex-column height-fit-content align-self-center">
      <Searchbar
        placeholder="Szukaj..."
        onChange={setSearchTerm}
        value={searchTerm}
        className="width-max"
      />

      <div className="sb-content">
        {Object.entries(filteredGroupedServices).map(([category, services]) => {
          const isExpanded = isCategoryExpanded(category);

          return (
            <div key={category} className="sb-category-section">
              <div
                className="sb-category-header pointer"
                onClick={() => toggleCategory(category)}
              >
                <div className="flex space-between align-items-center">
                  <h3 className="sb-category-title m-0">{category}</h3>

                  <img
                    className={`sb-category-arrow ${
                      isExpanded ? "rotated" : ""
                    }`}
                    src={arrowDown}
                    alt="Dropdown Arrow"
                  />
                </div>
              </div>

              {isExpanded && (
                <div className="sb-services-list">
                  {renderServiceList(category, services)}
                </div>
              )}
            </div>
          );
        })}

        {Object.keys(filteredGroupedServices).length === 0 && searchTerm && (
          <div className="sb-no-results text-align-center">
            <p className="m-0">Brak wyników</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SidebarMenu;
