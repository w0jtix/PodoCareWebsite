import { AppTab, tabRoutes } from "../../data/appTabs";
import { getBooksyUrl } from "../../data/booksy";

const phoneNumber = "+48725868735";
const mailAddress = "podocare.poznan@gmail.com"
export const googleNavigation = "https://www.google.com/maps/dir/?api=1&destination=PodoCare+Gabinet+Podologiczny+Poznań"

export const googleMapHook = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9735.387379077087!2d16.96857!3d52.4094519!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b6f9cd3a465%3A0x639faee4a26e4d4e!2sPodoCare%20Gabinet%20Podologiczny%20Pozna%C5%84!5e0!3m2!1spl!2spl!4v1752588652885!5m2!1spl!2spl";

export function redirectToBooksy (): void {
    const url = getBooksyUrl();
    if(url) {
        window.open(url, "_blank");
    }
}

export function redirectTo (tab: AppTab, navigate: (path:string)=> void): void {
    const url = tabRoutes[tab];
    if(!url) return;

    if (url.startsWith("http")) {
        window.open(url, "_blank");
    } else {
        navigate(url);
        window.scrollTo(0, 0); 
    }
}

export function callTo (): void {
    window.location.href = `tel:${phoneNumber}`
}

export function mailTo(): void {
  window.location.href = `mailto:${mailAddress}`;
}

export function googleMapsNavigate (): void {
    window.open(googleNavigation, "_blank");
}

export function navigateToServiceDetail(navigate: (path: string) => void, name: string) {
  const encodedName = encodeURIComponent(name);
  navigate(`${tabRoutes[AppTab.USLUGI]}?disease=${encodedName}`);
}