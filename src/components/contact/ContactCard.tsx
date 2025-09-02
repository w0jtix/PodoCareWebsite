import { contactRoute } from "@/data/texts";
import {
  callTo,
  redirectTo,
  googleMapsNavigate,
  mailTo,
} from "../utlis/navigation";

export interface ContactCardProps {
  item: contactRoute;
}

export function ContactCard({ item }: ContactCardProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    switch (item.action) {
      case "call":
        callTo();
        break;
      case "navigate":
        googleMapsNavigate();
        break;
      case "route":
        if (item.tab) redirectTo(item.tab);
        break;
      case "mail":
        mailTo();
        break;
      default:
        window.open(item.href, "_blank");
        break;
    }
  };

  return (
    <div className="cr-container flex-column">
      <div className="cr-img-header">
        <div className="cr-img-container flex justify-center align-items-center">
          <img className="cr-img" src={item.src} alt={item.alt}></img>
        </div>
        <div className="cr-h-container">
          <h3 className="cr-header m-0">{item.text}</h3>
        </div>
      </div>
      <div className="cr-description flex-column">
        <p className="cr-text">{item.line}</p>
        {item.subLine && <p className="cr-text">{item.subLine}</p>}

        <a
          className="cr-href inline-block width-fit-content relative nowrap pointer"
          onClick={handleClick}
        >
          {item.hrefText}
        </a>
      </div>
    </div>
  );
}

export default ContactCard;
