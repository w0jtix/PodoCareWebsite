import { AppTab } from "../data/appTabs";
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import CennikBody from '../components/priceList/CennikBody';
import { Helmet } from "react-helmet-async";

export function Cennik () {
  return (

      <div className="page">
        <Helmet>
          <title>Cennik | PodoCare - Gabinet Podologiczny w Poznaniu</title>
          <meta
            name="description"
            content="Poznaj cennik usług w PodoCare w Poznaniu - sprawdź ceny zabiegów podologicznych, pielęgnacji stóp i konsultacji, aby zaplanować wizytę."

          />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Cennik | PodoCare - Gabinet Podologiczny w Poznaniu" />
          <meta
            property="og:description"
            content="Poznaj cennik usług w PodoCare w Poznaniu - sprawdź ceny zabiegów podologicznych, pielęgnacji stóp i konsultacji, aby zaplanować wizytę."

          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://podocare.com.pl/cennik" />
          <meta property="og:image" content="https://podocare.com.pl/assets/podocarelogo.svg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Cennik | PodoCare - Gabinet Podologiczny w Poznaniu" />
          <meta
            name="twitter:description"
            content="Poznaj cennik usług w PodoCare w Poznaniu - sprawdź ceny zabiegów podologicznych, pielęgnacji stóp i konsultacji, aby zaplanować wizytę."

          />
          <meta name="twitter:image" content="https://podocare.com.pl/assets/podocarelogo.svg" />
        </Helmet>
      <Header page={AppTab.CENNIK} />
      <CennikBody />
      <Footer />
    </div>

  );
};

export default Cennik
