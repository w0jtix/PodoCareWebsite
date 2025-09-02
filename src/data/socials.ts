import { AppTab, tabRoutes } from "./appTabs";

export type SocialMedia = {
    name: AppTab;
    alt: string;
    src: string;
    href: string;
}

const socials: SocialMedia[] = [
    {
        name: AppTab.INSTAGRAM,
        alt: "Instagram",
        src: "src/assets/instagram.svg",
        href: tabRoutes[AppTab.INSTAGRAM]
    },
    {
        name: AppTab.FACEBOOK,
        alt: "Facebook",
        src: "src/assets/facebook.svg",
        href: tabRoutes[AppTab.FACEBOOK]
    }
]

export default socials