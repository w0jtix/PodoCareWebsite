import footerData from "../data/footer-info";
import InfoAddress from "./InfoAddress";
import InfoOpeningHours from "./InfoOpeningHours";
import Button from "./Button";
import HeaderLogo from "./HeaderLogo";
import { callTo, googleMapsNavigate, redirectToBooksy } from "./utlis/navigation";
import { getCurrentYear } from "./utlis/dateUtils";
import navigationIcon from "../assets/gmaps.svg"
import { redirectTo } from "./utlis/navigation";
import { useNavigate } from "react-router-dom";

export function Footer () {

  const navigate = useNavigate();
  return (
    <div className="footer-background  relative width-max">
      <div className="footer-container flex justify-self-center height-fit-content">
        <div className="footer-div flex-column width-max">
          <div className="footer-interior flex align-items-start width-max space-around">
            <div className="footer-info-section flex-column height-max justify-center">
                <section className="info-section flex-column space-between">
                  <div className="address-row flex space-between">
                    <InfoAddress className={"footer"} />
                    <div className="footer-buttons flex-column space-between">
                      <Button
                        footer={true}
                        disableImage={false}
                        src={navigationIcon}
                        alt="Google Maps"
                        text="Nawigacja"
                        onClick={googleMapsNavigate}
                      />
                      <Button
                        footer={true}
                        disableImage={true}
                        text="Zadzwoń"
                        onClick={callTo}
                      />
                    </div>
                  </div>
                  <div className="address-row flex space-between align-items-center">
                  <InfoOpeningHours  className={"footer"}/>
                  <Button
                        footer={true}
                        disableImage={true}
                        text="Umów wizytę"
                        onClick={redirectToBooksy}
                      />
                  </div>
                </section>
            </div>
            <div className="footer-navigation flex width-fit-content height-fit-content">
              {footerData.map((column, columnIndex) => (
                <div key={columnIndex} className="column-urls flex-column width-fit-content">
                  <div className="footer-header-container width-fit-content">
                    <span className="footer-column-header">
                      {column.header}
                    </span>
                  </div>
                  <div className="footer-urls flex-column height-fit-content">
                    {column.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        onClick={() => {
                          if ('name' in item) {
                            redirectTo(item.name, navigate)
                          }
                        }}
                        className="single-url pointer"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>               
              ))}
            </div>
          </div>
          <div className="footer-logo-container absolute flex justify-end">
          <HeaderLogo/>
          </div>
          <section className="copyright-container flex justify-center">
          <span className="copyright text-align-center">{`©copyright PodoCare ${getCurrentYear()}. All rights reserved.`}</span>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
