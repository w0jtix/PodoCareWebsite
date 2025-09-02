import { AppTab } from "../data/appTabs";
import Header from "../components/header/Header";
import HomepageBody from "../components/homepage/HomepageBody";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (

      <div className="page">
        <Helmet>
          <title>PodoCare - Gabinet Podologiczny w Poznaniu</title>
          <meta
            name="description"
            content="PodoCare w Poznaniu - zajmujemy się wrastającymi paznokciami, odciskami, brodawkami wirusowymi i problemami stóp. Zadbaj o zdrowie swoich stóp."
          />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="PodoCare - Gabinet Podologiczny w Poznaniu" />
          <meta
            property="og:description"
            content="PodoCare w Poznaniu - zajmujemy się wrastającymi paznokciami, odciskami, brodawkami wirusowymi i problemami stóp. Zadbaj o zdrowie swoich stóp."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://podocare.com.pl/" />
          <meta property="og:image" content="https://podocare.com.pl/assets/podocarelogo.svg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="PodoCare - Gabinet Podologiczny w Poznaniu" />
          <meta
            name="twitter:description"
            content="PodoCare w Poznaniu - zajmujemy się wrastającymi paznokciami, odciskami, brodawkami wirusowymi i problemami stóp. Zadbaj o zdrowie swoich stóp."
          />
          <meta name="twitter:image" content="https://podocare.com.pl/assets/podocarelogo.svg" />
        </Helmet>

        <Header page={AppTab.STRONA_GLOWNA} />
        <HomepageBody />
        <Footer />
      </div>

  );
};

export default Home;
