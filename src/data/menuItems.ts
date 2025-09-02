import { AppTab, tabRoutes } from "./appTabs";

export type MenuItem = {
    name: AppTab;
    href: string;
}

const menuItems: MenuItem[] = [
  { name: AppTab.STRONA_GLOWNA, href: tabRoutes[AppTab.STRONA_GLOWNA]},
  { name: AppTab.O_NAS, href: tabRoutes[AppTab.O_NAS] },
  { name: AppTab.USLUGI, href: tabRoutes[AppTab.USLUGI] },
  { name: AppTab.CENNIK, href: tabRoutes[AppTab.CENNIK] },
  { name: AppTab.PRZED_WIZYTA, href: tabRoutes[AppTab.PRZED_WIZYTA]},
  { name: AppTab.REGULAMIN, href: tabRoutes[AppTab.REGULAMIN]},
  { name: AppTab.KONTAKT, href: tabRoutes[AppTab.KONTAKT] },
];

export default menuItems;

