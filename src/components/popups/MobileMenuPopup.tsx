import HeaderMenu from "../header/HeaderMenu";
import ReactDOM from "react-dom";
import HeaderLogo from "../HeaderLogo";
import HeaderSocials from "../header/HeaderSocials";
import closeIcon from "../../assets/close.svg";
import { AppTab } from "../../data/appTabs";
import { useThemeColor } from "../hooks/useThemeColor";

export interface MobileMenuPopupProps {
  page: AppTab;
  className?: string;
  onClose: () => void;
}

export function MobileMenuPopup({
  page,
  className = "",
  onClose,
}: MobileMenuPopupProps) {
  useThemeColor("#000000");

  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) {
    console.error("Portal root element not found");
    return null;
  }
  return ReactDOM.createPortal(
    <div className={`popup-overlay relative ${className}`} onClick={onClose}>
      <div
        className={`popup-content flex justify-end ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={`popup-close-button absolute pointer transparent border-none p-0 ${className}`}
          onClick={onClose}
        >
          <img src={closeIcon} alt="Close" className="popup-close-icon" />
        </button>
        <div className="mobile-menu-container height-max flex width-max">
          <div className="flex-column width-max height-max align-self-start space-between">
            <HeaderLogo className={className} />
            <HeaderMenu page={page} className="mobile-menu" />
            <HeaderSocials className={className} />
          </div>
        </div>
      </div>
    </div>,
    portalRoot
  );
}

export default MobileMenuPopup;
