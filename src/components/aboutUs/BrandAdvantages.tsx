import { aboutUsData } from "../../data/texts";
import yellowTick from "../../assets/yellow-tick.svg"
import arrowTl from "../../assets/arrow-tl.svg"
import arrowTr from "../../assets/arrow-tr.svg"
import arrowBl from "../../assets/arrow-bl.svg"
import arrowBr from "../../assets/arrow-br.svg"

const AboutUsExperience = () => {
  const brandName = "PODOCARE";

  return (
    <section className="advantages-section width-max flex justify-center align-items-center">
      <div className="advantages-container grid relative width-max align-items-center">
        <div className="advantages-item top-left flex justify-self-end text-align-right">
          <div className="flex-column">
            <div className="adv-title-container flex">
              <img
                className="check-icon"
                src={yellowTick}
                alt="Checkmark"
              ></img>
              <h3 className="advantages-title">{aboutUsData[0].title}</h3>
            </div>
            <p className="advantages-desc m-0">{aboutUsData[0].desc}</p>
          </div>
          <img
            src={arrowTl}
            alt=""
            className="arrow-about-us align-self-end"
          />
        </div>

        <div className="advantages-item top-right flex justify-self-start text-align-left">
          <img
            src={arrowTr}
            alt=""
            className="arrow-about-us align-self-end"
          />
          <div className="flex-column">
            <div className="adv-title-container flex">
              <img
                className="check-icon"
                src={yellowTick}
                alt="Checkmark"
              ></img>
              <h3 className="advantages-title">{aboutUsData[1].title}</h3>
            </div>
            <p className="advantages-desc m-0">{aboutUsData[1].desc}</p>
          </div>
        </div>

        <div className="brand-center flex relative align-items-center justify-center height-max">
          <div className="brand-name-vertical flex-column align-items-center">
            {brandName.split("").map((letter, index) => (
              <span key={index} className="brand-letter">
                {letter}
              </span>
            ))}
          </div>
        </div>

        <div className="advantages-item bottom-left flex justify-self-end text-align-right">
          <div className="flex-column">
            <div className="adv-title-container flex">
              <img
                className="check-icon"
                src={yellowTick}
                alt="Checkmark"
              ></img>
              <h3 className="advantages-title">{aboutUsData[2].title}</h3>
            </div>
            <p className="advantages-desc m-0">{aboutUsData[2].desc}</p>
          </div>
          <img
            src={arrowBl}
            alt=""
            className="arrow-about-us"
          />
        </div>

        <div className="advantages-item bottom-right flex justify-self-start text-align-left">
          <img
            src={arrowBr}
            alt=""
            className="arrow-about-us"
          />
          <div className="flex-column">
            <div className="adv-title-container flex">
              <img
                className="check-icon"
                src={yellowTick}
                alt="Checkmark"
              ></img>
              <h3 className="advantages-title">{aboutUsData[3].title}</h3>
            </div>
            <p className="advantages-desc m-0">{aboutUsData[3].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsExperience;
