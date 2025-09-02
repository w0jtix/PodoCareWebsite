import { contactData, navigationData, contactFormData } from "../../data/texts";
import ContactForm from "../ContactForm";
import ContactCard from "./ContactCard";
import { googleMapHook } from "../utlis/navigation";

export function ContactBody() {
  return (
    <div className="body-background width-max p-0">
      <div className="body-container flex-column justify-self-center align-items-start height-fit-content">
        <section className="home-body-row height-fit-content width-max flex-column">
          <h1 className="header-h1">Kontakt</h1>
        </section>
        <section className="contact-routes flex-column width-max">
          <section className="cr-section flex width-80 align-self-center align-items-center space-evenly">
            {contactData.map((item) => (
              <ContactCard item={item}/>
            ))}
          </section>
        </section>
        <section className="map-cf-section flex width-90 align-self-center">
          <div className="map-container flex-column height-fit-content width-half align-items-center">
            <h2 className="navigation-title m-0">{navigationData.header}</h2>
            <p className="navigation-desc flex text-align-center width-80 m-0">
              {navigationData.text}
            </p>
            <iframe
              className="g-map border-none"
              src={googleMapHook}
            ></iframe>
          </div>
          <div className="form-container flex-column width-half height-fit-content align-items-center">
            <h2 className="navigation-title m-0">{contactFormData.header}</h2>
            <p className="navigation-desc flex text-align-center width-80 m-0">
              {contactFormData.text}
            </p>
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactBody;
