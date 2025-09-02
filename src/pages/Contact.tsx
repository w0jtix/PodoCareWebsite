import { AppTab } from "../data/appTabs";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import ContactBody from '../components/contact/ContactBody';
import { Helmet } from "react-helmet-async";

export function Contact () {
  return (

      <div className="page">
        <Helmet>
          <title>Kontakt | PodoCare - Gabinet Podologiczny w Poznaniu</title>
          <meta
            name="description"
            content="Skontaktuj się z PodoCare - Gabinet Podologiczny w Poznaniu przy ul. Warszawskiej 51/3. Umów wizytę lub zapytaj o nasze zabiegi podologiczne."
          />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Kontakt | PodoCare - Gabinet Podologiczny w Poznaniu" />
          <meta
            property="og:description"
            content="Skontaktuj się z PodoCare - Gabinet Podologiczny w Poznaniu przy ul. Warszawskiej 51/3. Umów wizytę lub zapytaj o nasze zabiegi podologiczne."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://podocare.com.pl/kontakt" />
          <meta property="og:image" content="https://podocare.com.pl/assets/podocarelogo.svg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Kontakt | PodoCare - Gabinet Podologiczny w Poznaniu" />
          <meta
            name="twitter:description"
            content="Skontaktuj się z PodoCare - Gabinet Podologiczny w Poznaniu przy ul. Warszawskiej 51/3. Umów wizytę lub zapytaj o nasze zabiegi podologiczne."
          />
          <meta name="twitter:image" content="https://podocare.com.pl/assets/podocarelogo.svg" />
        </Helmet>
      <Header page={AppTab.KONTAKT} />
      <ContactBody />
      <Footer />
    </div>

  )
}

export default Contact
