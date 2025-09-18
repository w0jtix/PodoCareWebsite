import Terms from "./Terms";
import { TermsData, TermType } from "../../data/terms";
import { AppTab } from "../../data/appTabs";
import { useState } from "react";

export interface TnCBodyProps {
  pageTitle: AppTab;
  data: TermsData;
}

export function TnCBody( { pageTitle, data }: TnCBodyProps) {
  const [activeTermType, setActiveTermType] = useState<TermType>(TermType.GENERAL);

  const isRegulamin = pageTitle === AppTab.REGULAMIN;

  const getCurrentTermsData = () => {
    if (activeTermType === TermType.PROMOTION && data.promotionTerms) {
      return data.promotionTerms;
    }
    return data;
  }

  return (
    <div className="body-background width-max p-0">
      <div className="body-container flex-column justify-self-center align-items-start height-fit-content">
        <section className="home-body-row terms height-fit-content width-max flex">
          <h1 className="header-h1">{pageTitle}</h1>

          {isRegulamin && data.promotionTerms && (
            <div className="terms-tabs-container flex justify-center align-items-center align-self-center width-fit-content height-fit-content">
              <ul className="terms-tabs flex-column m-0">
                <li 
                  className={`terms-tab ${activeTermType === TermType.GENERAL ? 'active' : ''}`}
                  onClick={() => setActiveTermType(TermType.GENERAL)}
                >
                  <p className="terms-tab-link pointer m-0">
                    Regulamin Świadczenia Usług
                  </p>
                </li>
                <li 
                  className={`terms-tab ${activeTermType === TermType.PROMOTION ? 'active' : ''}`}
                  onClick={() => setActiveTermType(TermType.PROMOTION)}
                >
                  <p className="terms-tab-link pointer m-0">
                    Regulamin Promocji Zostaw Opinię o Wizycie
                  </p>
                </li>
              </ul>
            </div>
          )}

        </section>
        <Terms data={getCurrentTermsData()}/>
      </div>
    </div>
  );
}

export default TnCBody;
