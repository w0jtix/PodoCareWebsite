import HeaderMenu from "./HeaderMenu";
import HeaderSocials from "./HeaderSocials";
import HeaderLogo from "../HeaderLogo";
import InfoAddress from "../InfoAddress";
import InfoOpeningHours from "../InfoOpeningHours";
import Button from "../Button";
import { useCallback, useState } from "react";
import MobileMenuPopup from "../popups/MobileMenuPopup";
import { AppTab } from "../../data/appTabs";
import { useIsMobile } from "../hooks/useIsMobile";
import { callTo } from "../utlis/navigation";

export interface HeaderProps {
  page: AppTab
}

export function Header({ page }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean> (false);
  const isMobile = useIsMobile();

  const handleMobileMenuClick = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  },[]);

  return (
    <div className="header-background flex justify-center align-items-end width-max">
      <div className="header-container flex justify-self-center align-items-center justify-center">
        <div className="width-97 flex align-items-center justify-self-center space-between">
        <section className="header-left-section flex height-max align-items-center">
          <HeaderLogo />
          <HeaderMenu page={page} />
        </section>
        <section className="header-right-section flex height-max justify-end">
          <div className="header-info flex height-max justify-center align-items-center">
            <InfoOpeningHours/>
            <InfoAddress/>
            <Button  
              src= "src\assets\hamburger-menu.svg"
              alt={"HamburgerMenu"}
              disableText={true}
              customClassName="hamburger-menu"       
              onClick={handleMobileMenuClick}    
            />
          </div>
          <HeaderSocials />
        </section>
        </div>
      </div>
      {isMobile && (
        <button 
        className="call-us-mobile absolute flex justify-center align-items-center"
        onClick={callTo}
        >
          <img className="call-us-icon" src="src\assets\callUs.svg" alt="Call Us"></img>
        </button>
      )}
      {isMobileMenuOpen && (
        <MobileMenuPopup
        page={page}
        className="mobile-menu"
        onClose={handleMobileMenuClick}
        />
      )}
    </div>
  );
}

export default Header;
