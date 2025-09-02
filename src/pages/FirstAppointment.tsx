import { AppTab } from "../data/appTabs";
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import FABody from '../components/firstAppointment/FABody'
import { Helmet } from "react-helmet-async";

export function FirstAppointment () {
  return (

      <div className="page">
        <Helmet>
          <title>Przed Wizytą | PodoCare - Gabinet Podologiczny w Poznaniu</title>
          <meta
            name="description"
            content="Sprawdź, jak przygotować się do wizyty w PodoCare w Poznaniu - wskazówki dotyczące higieny, informacji i przebiegu zabiegów podologicznych dla komfortu klienta."
          />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="Przed Wizytą | PodoCare - Gabinet Podologiczny w Poznaniu" />
          <meta
            property="og:description"
            content="Sprawdź, jak przygotować się do wizyty w PodoCare w Poznaniu - wskazówki dotyczące higieny, informacji i przebiegu zabiegów podologicznych dla komfortu klienta."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://podocare.com.pl/przed-wizyta" />
          <meta property="og:image" content="https://podocare.com.pl/assets/podocarelogo.svg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Przed Wizytą | PodoCare - Gabinet Podologiczny w Poznaniu" />
          <meta
            name="twitter:description"
            content="Sprawdź, jak przygotować się do wizyty w PodoCare w Poznaniu - wskazówki dotyczące higieny, informacji i przebiegu zabiegów podologicznych dla komfortu klienta."
          />
          <meta name="twitter:image" content="https://podocare.com.pl/assets/podocarelogo.svg" />
        </Helmet>
      <Header page={AppTab.PRZED_WIZYTA} />
      <FABody />
      <Footer />
    </div>

  )
}

export default FirstAppointment
