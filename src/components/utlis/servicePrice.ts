import { PriceListItem } from "@/data/priceList";

export const formatPrice = (service: PriceListItem) => {
    if (service.optionalPrice) {
      return `${service.price}/${service.optionalPrice}zł`;
    }
    if (service.name.includes("VIP")) {
      return `+${service.price}%`;
    }
    return `${service.price}zł`;
  };