import { TermsData} from "../../data/terms";
import { processText } from "../utlis/textUtils";

export interface TermsProps {
  data: TermsData;
}

export function Terms( { data }: TermsProps) {

  return (
    <div className="terms-container flex-column width-half height-fit-content align-self-center">
      <h2 className="t-title flex align-self-center">{data.title}</h2>
      {data.sections.map((section) => (
        <div key={section.id} className="t-section flex-column width-max">
          {section.title && <h3 className="t-s-header flex text-align-center align-self-center">{section.title}</h3>}
          <div className="t-s-subsections">
            {section.content.length > 0 &&
              section.content.map((paragraph, index) => (
                <div key={index}>
                  <p 
                    className="t-s-paragraph text-align-justify"
                    dangerouslySetInnerHTML={{ __html: processText(paragraph.text) }}
                  ></p>
                  {paragraph.items && (
                    <ul className="t-s-p-container">
                      {paragraph.items.map((item, itemIndex) => ( 
                        <li 
                          key={itemIndex} 
                            className="t-s-p-bp"
                             dangerouslySetInnerHTML={{ __html: processText(item.text) }}
                            ></li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    <h2 className="t-footer text-align-center align-self-center">{data.footer + data.dateUpdated}</h2>
    </div>
  );
}

export default Terms;
