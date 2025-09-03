import { AppTab } from './appTabs';
import menuItems, { MenuItem } from './menuItems';
import socials, { SocialMedia } from './socials';

export type LegalItem = {
    name: AppTab;
}

const legalItems: LegalItem[] = [
    { name: AppTab.REGULAMIN},
    { name: AppTab.RODO }
];

export type FooterColumn = {
    header: string;
    items: MenuItem[] | SocialMedia[] | LegalItem[];
}

const footerData: FooterColumn[] = [
  { header: "Strony", items: menuItems },
  { header: "Social Media", items: socials },
  { header: "Informacje prawne", items: legalItems },
];

export default footerData;
