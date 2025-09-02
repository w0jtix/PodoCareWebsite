import { priceListData } from "../../data/priceList";

export function getServiceForDisease(diseaseName: string) {
  const mapping: Record<string, string> = {
    "Brodawki wirusowe": "Usuwanie brodawki wirusowej metodą chemiczną",
    "Odciski": "Usunięcie odcisku",
    "Modzele": "Usunięcie modzela",
    "Pękające pięty": "Opracowanie pękających pięt",
    "Pedicure podologiczny": "Rozszerzony zabieg podologiczny",
    "Wrastające paznokcie": "Opracowanie wrastającego paznokcia",
    "Zielona bakteria": "Oczyszczenie paznokcia zmienionego chorobowo",
    "Onycholiza": "Oczyszczenie paznokcia pourazowego",
    "Konsultacja podologiczna" : "Konsultacja podologiczna w gabinecie",
  };

  const serviceName = mapping[diseaseName];
  if (!serviceName) return null;

  return priceListData.find((service) => service.name === serviceName) || null;
}