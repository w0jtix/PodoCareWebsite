import Header from "../components/header/Header";
import Footer from "../components/Footer";
import AboutUsBody from "../components/aboutUs/AboutUsBody";
import { AppTab } from "../data/appTabs";
import { Helmet } from "react-helmet-async";

export function AboutUs () {
  return (

      <div className="page">
        <Helmet>
          <title>O Nas | PodoCare - Gabinet Podologiczny w Poznaniu</title>
          <meta
            name="description"
            content="PodoCare w Poznaniu - poznaj nasz zespół podologów i filozofię gabinetu. Profesjonalna opieka nad stopami i indywidualne podejście do każdego klienta."
          />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="O Nas | PodoCare - Gabinet Podologiczny w Poznaniu" />
          <meta
            property="og:description"
            content="PodoCare w Poznaniu - poznaj nasz zespół podologów i filozofię gabinetu. Profesjonalna opieka nad stopami i indywidualne podejście do każdego klienta."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://podocare.com.pl/o-nas" />
          <meta property="og:image" content="https://podocare.com.pl/assets/podocarelogo.svg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="O Nas | PodoCare - Gabinet Podologiczny w Poznaniu" />
          <meta
            name="twitter:description"
            content="PodoCare w Poznaniu - poznaj nasz zespół podologów i filozofię gabinetu. Profesjonalna opieka nad stopami i indywidualne podejście do każdego klienta."
          />
          <meta name="twitter:image" content="https://podocare.com.pl/assets/podocarelogo.svg" />
        </Helmet>
      <Header page={AppTab.O_NAS} />
      <AboutUsBody />
      <Footer />
    </div>
  );
};

export default AboutUs;
