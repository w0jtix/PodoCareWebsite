import { AppTab } from "../data/appTabs";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import TnCBody from "../components/termsAndConditions/TnCBody";
import { TermsData } from "../data/terms";
import { Helmet } from "react-helmet-async";
import { tabRoutes } from "../data/appTabs";

export interface TermsAndConditionsProps {
  pageTitle: AppTab;
  data: TermsData;
}

const metaDescriptions: Partial<Record<AppTab, string>> = {
  [AppTab.REGULAMIN]: "Zapoznaj się z regulaminem Gabinetu PodoCare w Poznaniu - zasady korzystania z usług i obowiązki klientów.",
  [AppTab.RODO]: "Poznaj politykę prywatności PodoCare w Poznaniu - jak chronimy Twoje dane osobowe zgodnie z RODO."
};

export function TermsAndConditions( {pageTitle, data }: TermsAndConditionsProps) {
  const description = metaDescriptions[pageTitle] || "PodoCare w Poznaniu - profesjonalny Gabinet Podologiczny.";

  return (

      <div className="page">
        <Helmet>
          <title>{`${pageTitle} | PodoCare - Gabinet Podologiczny w Poznaniu`}</title>
          <meta
            name="description"
            content={description}
          />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content={`${pageTitle} | PodoCare - Gabinet Podologiczny w Poznaniu`} />
          <meta
            property="og:description"
            content={description}
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://podocare.com.pl${tabRoutes[pageTitle]}`}  />
          <meta property="og:image" content="https://podocare.com.pl/assets/podocarelogo.svg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${pageTitle} | PodoCare - Gabinet Podologiczny w Poznaniu`} />
          <meta
            name="twitter:description"
            content={description}
          />
          <meta name="twitter:image" content="https://podocare.com.pl/assets/podocarelogo.svg" />
        </Helmet>
      <Header page={pageTitle} />
      <TnCBody pageTitle={pageTitle} data={data}/>
      <Footer />
    </div>

  );
}

export default TermsAndConditions;
