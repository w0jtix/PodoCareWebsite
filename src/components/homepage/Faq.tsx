import { useState } from "react";
import { faqItems, FaqItem } from "../../data/faq";
import Button from "../Button";
import { navigateToServiceDetail, redirectTo, redirectToBooksy } from "../utlis/navigation";
import { useNavigate } from "react-router-dom";

export function Faq() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const navigate = useNavigate();

  const toggleItem = (index: number) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleAction = (item: FaqItem) => {
    if(item.serviceName) {
      navigateToServiceDetail(navigate, item.serviceName);
    } else if (item.redirectTab) {
      redirectTo(item.redirectTab);
    } else if (item.booksy) {
      redirectToBooksy();
    }
  }

  return (
    <div className="section-faq width-max flex-column justify-center align-self-center height-fit-content">
      <div className="section-separator-container relative height-fit-content width-max flex justify-center align-items-center">
        <div className="section-separator relative width-max"></div>
        <div className="faq-title-wrapper absolute">
          <h1 className="faq-title">Najczęstsze pytania</h1>
        </div>
      </div>

      <div className="faq-list width-40 flex-column align-self-center">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item flex-column">
            <button
              className={`faq-question ${
                expandedItems.has(index) ? "expanded" : ""
              } flex width-max space-between text-align-left align-items-center pointer border-none`}
              onClick={() => toggleItem(index)}
            >
              <span className="faq-question-text">{item.question}</span>
              <img
                className={`faq-arrow ${
                  expandedItems.has(index) ? "expanded" : ""
                }`}
                src="src\assets\arrow_thin.svg"
                alt="Arrow Thin"
              ></img>
            </button>

            <div
              className={`faq-answer ${
                expandedItems.has(index)
                  ? "expanded height-fit-content"
                  : "collapsed"
              }`}
            >
              <p className="faq-answer-text m-0">{item.answer}</p>
              {(item.serviceName || item.redirectTab || item.booksy) && 
              <div className="faq-redirect flex justify-end align-items-center">
                        {item.actionText && <p className="sd-first-visit-text m-0">
                          {item.actionText}
                        </p>}
                        <Button
                          text={item.buttonText}
                          disableImage={true}
                          onClick={() => handleAction(item)}
                          shiny={true}
                        />
                      </div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
