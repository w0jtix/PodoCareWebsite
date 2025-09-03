import { AppTab, tabRoutes } from "./appTabs";

export type SocialMedia = {
    name: AppTab;
    alt: string;
    src: string;
    href: string;
}

import instagram from "../assets/instagram.svg"
import facebook from "../assets/facebook.svg"

const socials: SocialMedia[] = [
    {
        name: AppTab.INSTAGRAM,
        alt: "Instagram",
        src: instagram,
        href: tabRoutes[AppTab.INSTAGRAM]
    },
    {
        name: AppTab.FACEBOOK,
        alt: "Facebook",
        src: facebook,
        href: tabRoutes[AppTab.FACEBOOK]
    }
]

export default socials