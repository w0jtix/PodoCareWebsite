import { AppTab } from "../data/appTabs";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import ServicesBody from "../components/services/ServicesBody";
import { Helmet } from "react-helmet-async";

export function Services () {
  return (

      <div className="page">
        <Helmet>
          <title>Usługi | PodoCare - Gabinet Podologiczny w Poznaniu</title>
          <meta
            name="description"
            content="Poznaj pełen zakres usług PodoCare w Poznaniu - zabiegi podologiczne, pielęgnacja stóp, leczenie wrastających paznokci i brodawki wirusowe."
          />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Usługi | PodoCare - Gabinet Podologiczny w Poznaniu" />
          <meta
            property="og:description"
            content="Poznaj pełen zakres usług PodoCare w Poznaniu - zabiegi podologiczne, pielęgnacja stóp, leczenie wrastających paznokci i brodawki wirusowe."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://podocare.com.pl/uslugi" />
          <meta property="og:image" content="https://podocare.com.pl/assets/podocarelogo.svg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Usługi | PodoCare - Gabinet Podologiczny w Poznaniu" />
          <meta
            name="twitter:description"
            content="Poznaj pełen zakres usług PodoCare w Poznaniu - zabiegi podologiczne, pielęgnacja stóp, leczenie wrastających paznokci i brodawki wirusowe."
          />
          <meta name="twitter:image" content="https://podocare.com.pl/assets/podocarelogo.svg" />
        </Helmet>
      <Header page={AppTab.USLUGI} />
      <ServicesBody />
      <Footer />
    </div>

  );
};

export default Services;
