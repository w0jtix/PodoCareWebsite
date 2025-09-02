import Terms from "./Terms";
import { TermsData } from "../../data/terms";
import { AppTab } from "../../data/appTabs";

export interface TnCBodyProps {
  pageTitle: AppTab;
  data: TermsData;
}

export function TnCBody( { pageTitle, data }: TnCBodyProps) {
  return (
    <div className="body-background width-max p-0">
      <div className="body-container flex-column justify-self-center align-items-start height-fit-content">
        <section className="home-body-row height-fit-content width-max flex-column">
          <h1 className="header-h1">{pageTitle}</h1>
        </section>
        <Terms data={data}/>
      </div>
    </div>
  );
}

export default TnCBody;
